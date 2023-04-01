import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {useParams, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';
 import TextField from '@mui/material/TextField';
import jwt_decode from "jwt-decode";



function Payment() {
 
const token = localStorage.getItem("Authorization") 
const decoded = jwt_decode(token);

  let navigate=useNavigate()

const { id,theaterId,showId,selected,total } = useParams()
let [movie,setMovie] = useState({})
let [show,setShow] = useState([])
let [theater,setTheater] = useState([])
 let [email,setEmail] = useState("")



const getMovie = () => {
fetch(`http://localhost:5002/bookmyshow/movies/${id}`,
{
    method:"GET",
    headers:{
      Authorization:localStorage.getItem("Authorization")
      
  }})
.then((data) => data.json())
.then((list) => setMovie(list))
}
useEffect(() => {getMovie()},[id])

useEffect(() => {
  if(movie){
    setShow(movie.shows)
  }
  }, [movie])

  useEffect(() => {
    if(movie){
      setTheater(movie.theaters)
    }
    }, [movie])
  
  let movieTicket = () => {
    const bookingUser = {
        email:decoded.email,
      }
    fetch(`http://localhost:5002/bookmyshow/movies/${id}`,{
      method:"POST",
      body: JSON.stringify(bookingUser),
      headers: {
        "Content-Type" : "application/json",
        Authorization:localStorage.getItem("Authorization")
    },
    })
        .then((data) => data.json())
          .then((data) => console.log(data),
          toast.success('Mail Sent Regarding Your Tickets', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
          )
          .then(() => navigate('/bookmyshow/movies'))
  }

  return <>
  <NavBar/>
  <Box sx={{backgroundColor:"#f2f2f2",display:"flex",alignItems:"center",padding:"30px"}}>
<Paper sx={{padding:"30px 30px",width:{xs:"300px",sm:"400px",md:"400px"},margin:"0px auto",textAlign:"center"}}>
        <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '120px', md: '120px' },
        }}
        alt="The house from the offer."
        src="/image/bms.png"
        />
        <h4 style={{fontSize:"14px",lineHeight:"22px"}}>Make Your Payment here by Entering Your Mail Id for Share the ticket information which booked by You.</h4>

        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>
        <Box
        component="img"
        sx={{
          borderRadius:"2%",
            margin:"0px auto",
          objectFit:'cover',
          objectPosition:'top',
          width: { xs: '200px', md: '200px' },
          height: { xs: '250px', md: '250px' }
        }}
        alt="The house from the offer."
        src={movie.poster}
        />
        <p style={{margin:0,fontWeight:700}}>{theater && theater.length > 0 ? theater.find(v => v.theaterid === theaterId)?.theatername : ''}</p>
        <p style={{margin:0,fontWeight:600}}>Show Time : {show && show.length > 0 ? show.find(e => e.showid === showId).show : ''}</p>
        <p style={{margin:0,fontWeight:600}}>Your Seats : {selected}</p>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <p style={{fontWeight:700}}>{movie.name}</p>
            <p style={{fontWeight:700}}>₹ {total}</p>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>

        <p style={{margin:0,fontWeight:500}}>The ticket information will send to this Email Id <span style={{margin:0,fontWeight:700}}>{decoded.email}</span></p>

<Button sx={{backgroundColor:"#f84464",padding:"15px"}} variant="contained" onClick={movieTicket}>Make Payment</Button>
<ToastContainer />
</Box>
        </Box>

</Paper>
  </Box>
  </>
}

export default Payment
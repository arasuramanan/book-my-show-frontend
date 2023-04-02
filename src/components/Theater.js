import React,{useState,useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import NavBar from './NavBar';


function Theater() {
    const { id } = useParams()
let [movie,setMovie] = useState({})
let [theater,setTheater] = useState([])

const token = localStorage.getItem("Authorization")

const getMovie = () => {
    fetch(`https://book-my-show-backend-arasuramanan.onrender.com/bookmyshow/movies/${id}`,
    {
        method:"GET",
        headers:{
          Authorization:localStorage.getItem("Authorization")
          
      }
})
    .then((data) => data.json())
    .then((list) => setMovie(list))
    }
    useEffect(() => {getMovie()},[id])

    const getTheater = () => {
        fetch(`https://book-my-show-backend-arasuramanan.onrender.com/bookmyshow/movies/${id}`,
        {
            method:"GET",
            headers:{
              Authorization:localStorage.getItem("Authorization")
          }
    })
        .then((data) => data.json())
        .then((list) => setTheater(list.theaters))
        }
        useEffect(() => {getTheater()},[id])

        const [select,setSelect] = useState(false)

  return <>
  <NavBar/>
  <Box sx={{backgroundColor:"#1a1a1a"}}>
  <Box sx={{padding:"30px 0px",width:"70%",margin:"0px auto"}}>
   <h6 style={{fontSize:"18px",color:"whitesmoke",margin:15}}>{movie.name}</h6>
   <h6 style={{fontSize:"18px",color:"whitesmoke",margin:15}}>{movie.type}</h6>
  </Box>
  <Paper>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"70%",margin:"0px auto",}}>
    <Box>
    </Box>
    {/* <Box sx={{padding:0,display:"flex",alignItems:"center"}}><span style={{fontSize:"18px"}}>Tamil-2d</span></Box> */}
    </Box>
  </Paper>
  </Box>
  <Box>
<Box sx={{backgroundColor:"#f2f2f2",width:"70%",margin:"0px auto",display:"flex",flexDirection:{xs:"column",sm:"row",md:"row"},gap:5,flexWrap:"wrap",justifyContent:"center",padding:"10px 0px"}}>
        {
          theater && theater.map((v,i) => <Theaterlist movie={movie} theater={v} key={i} />)
        }
</Box>
</Box>

  </>
}

function Theaterlist({theater,movie}){
  let navigate= useNavigate()
    return<>
    <Paper sx={{padding:"20px 20px 0px 20px",margin:"20px"}} onClick={() => navigate(`/bookmyshow/movies/${movie.id}/theater/${theater.theaterid}`)}>
    <Box
        component="img"
        sx={{
          margin:"0px auto",
          cursor:"pointer",
          display:"flex",
          justifyContent:"center",
          objectFit:'cover',
          objectPosition:'center',
          height: { xs: 200, md: 200  },
          width: { xs: '210px', sm:300, md: '300px' },
          borderRadius:"3%"
        }}
        alt="The house from the offer."
        src={theater.theaterimg}
        />
        <h5 style={{textAlign:"center"}}>{theater.theatername}</h5>
    </Paper>
    </>
}


export default Theater
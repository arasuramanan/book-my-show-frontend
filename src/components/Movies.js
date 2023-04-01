import React,{useState,useEffect,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import NavBar from './NavBar';

function Movies() {

  const token = localStorage.getItem("Authorization")
    const [movies,setMovies] = useState([])
    const getMovies = () => {
    fetch("http://localhost:5002/bookmyshow/movies",
    {
        method:"GET",
        headers:{
          Authorization:localStorage.getItem("Authorization")
          
      }})
    .then((data) => data.json())
    .then((lsts) => setMovies(lsts))
    }
    useEffect(() => {getMovies()},[movies])
console.log(movies);
  return <>
  <NavBar/>
  <Box sx={{width:{xs:"80%",sm:"90%",md:"80%"},margin:"0px auto",display:"flex",flexDirection:{xs:"column",sm:"row",md:"row"},gap:10,flexWrap:"wrap",justifyContent:"center",padding:"10px 0px"}}>
{
    movies.map((e,i) => <Movielist movie={e} key={i} id={e.id} />)
}
  </Box>
  </>
}

function Movielist({movie,id}){
    let navigate=useNavigate()
    return<>
    <Box sx={{width:"250px",height:"350px",padding:"30px 0px",margin:{xs:"0px auto",sm:0,md:0}}}>
        <Box
        component="img"
        onClick={() => navigate(`/bookmyshow/movies/${movie._id}`)}
        sx={{
            margin:0,
            cursor:"pointer",
          objectFit:'cover',
          objectPosition:'center',
          height: { xs: 370, md: 350  },
          width: { xs: '250px', md: '100%' },
          borderRadius:"2%"
        }}
        alt="The house from the offer."
        src={movie.poster}
        />
     <Box sx={{width:"250px"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:1}}>
        <p style={{color:"#FDCC0D",margin:0,padding:"8px 5px",fontSize:"15px",display:"flex",alignItems:"center"}}><StarIcon/> {movie.rating}</p>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h5 style={{color:"black",margin:0,padding:"6px 5px",fontSize:"16px",fontWeight:700}}>{movie.id}</h5>
     <p style={{color:"#333545",margin:0,padding:"0px 5px",fontSize:"16px",fontWeight:500}}>{movie._id}</p>
             </Box>
     </Box>

    </Box>
     
    </>
}

export default Movies
import React,{useState,useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NavBar from './NavBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function Movie() {

const { id } = useParams()
let [movie,setMovie] = useState({})
let navigate = useNavigate()

const token = localStorage.getItem("Authorization")

const getMovie = () => {
fetch(`http://localhost:5002/bookmyshow/movies/${id}`,
{
    method:"GET",
    
    headers:{
      Authorization:localStorage.getItem("Authorization")
      
  }
})
.then((data) => console.log(data))
.then((list) => console.log(list))

}
useEffect(() => {getMovie()},[id])

  return <>
  <NavBar/>
  <Box sx={{backgroundColor:"black",padding:"30px"}}>
    <Box sx={{width:"70%",margin:"0px auto",display:"flex",flexDirection:{xs:"column",sm:"row",md:"row"}}}>
    <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'center',
          height: { xs: 352, md: 390  },
          width: { xs: '210', md: '210' },
          borderRadius:"3%"
        }}
        alt="The house from the offer."
        src={movie.poster}
        />
        <Box sx={{padding:{xs:"20px 20px",sm:"70px 20",md:"70px 20px"},textAlign:{xs:"center",sm:"left"}}}>
            <h1 style={{fontSize:"22px",color:"whitesmoke"}}>{movie.name}</h1>
            <h1 style={{fontSize:"22px",color:"whitesmoke"}}>⭐ {movie.rating}</h1>
            <h4 style={{fontSize:"18px",color:"whitesmoke"}}>2D Tamil,Telugu</h4>
            <h1 style={{fontSize:"18px",color:"whitesmoke"}}>{movie.type}</h1>
            <Button sx={{backgroundColor:"#f84464",marginTop:"10px"}} onClick={() => navigate(`/bookmyshow/movies/${movie._id}/theatre`)} variant="contained">Book Tickets</Button>
        </Box>
    </Box>
  </Box>
  <Box sx={{width:"70%",margin:"0px auto"}}>
    <h4>About the Movie</h4>
    <p style={{fontWeight:400,fontSize:"14px"}}>{movie.summary}</p>
    <hr/>
  </Box>
  <Box sx={{width:"70%",margin:"20px auto",display:"flex",flexDirection:{xs:"column",sm:"row",md:"row"},gap:5}}>
    <Box>
    <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'top',
          height: { xs: 110, md: 110  },
          width: { xs: 110, md: 110 },
          borderRadius:"50%"
        }}
        alt="The house from the offer."
        src={movie.castimg}
        />
    <p style={{fontWeight:500}}>{movie.cast}</p>
    <hr/>
  </Box>
  <Box>
    <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'top',
          height: { xs: 110, md: 110  },
          width: { xs: 110, md: 110 },
          borderRadius:"50%"
        }}
        alt="The house from the offer."
        src={movie.cast1img}
        />
    <p style={{fontWeight:500}}>{movie.cast1}</p>
    <hr/>
  </Box>
  <Box>
    <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'top',
          height: { xs: 110, md: 110  },
          width: { xs: 110, md: 110 },
          borderRadius:"50%"
        }}
        alt="The house from the offer."
        src={movie.cast2img}
        />
    <p style={{fontWeight:500}}>{movie.cast2}</p>
    <hr/>
  </Box>
    </Box>
  </>
}

// function ParticularMovie({movie}){
// return<>

// </>
// }

export default Movie
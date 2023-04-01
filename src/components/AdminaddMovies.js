import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import {useFormik} from "formik";
import * as yup from "yup"
import AdminNavbar from './AdminNavbar';
import bms from "../image/bms.png";


const formValidationSchema = yup.object({
    name:yup.string().required(),
    poster:yup.string().required(),
    rating:yup.string().required(),
    type:yup.string().required(),
    summary:yup.string().required(),
    trailer:yup.string().required(),
    cast:yup.string().required(),
    cast1:yup.string().required(),
    cast2:yup.string().required(),
    
  })
  
  function AdminaddMovies() {
    const token = localStorage.getItem("Authorization")
      let navigate = useNavigate()
      const {handleSubmit, values, handleChange,handleBlur,touched, errors} = useFormik({
        initialValues:{
            name:'',
            poster:'',
            rating:'',
            type:'',
            summary:'',
            trailer:'',
            cast:'',
            cast1:'',
            cast2:'',
        
        },
        validationSchema : formValidationSchema,
        onSubmit:(newList) => {
            addMovie(newList)
        }
    
    })
      let addMovie = (newList) => {
            fetch("http://localhost:5002/bookmyshow/add/movies",{
              method:"POST",
              body: JSON.stringify(newList),
              headers: {
                "Content-Type" : "application/json",
               
         Authorization:localStorage.getItem("Authorization")
         
     
            },
            })
                .then((data) => data.json())
                .then((dat) => console.log(dat))
                .then((data) => alert('Movies added Successfully 😀😀😀😀'))
                .then(() => navigate('/bookmyshow/movies/admin'))
      }
  
    return <>
    <AdminNavbar/>
      <Box sx={{backgroundColor:"#f2f2f2",display:"flex",alignItems:"center",padding:"30px 0px"}}>
  <Paper sx={{padding:"50px 30px",width:{xs:"300px",sm:"400px",md:"400px"},margin:"0px auto",textAlign:"center"}}>
          <Box
          component="img"
          sx={{
              margin:0,
            objectFit:'cover',
            objectPosition:'center',
            width: { xs: '120px', md: '120px' },
          }}
          alt="The house from the offer."
          src={bms}
          />
          <h4>Add New Movie</h4>
  
          <form  onSubmit = {handleSubmit}>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>
  
          <TextField
           id="outlined-basic"
            label="Movie Name"
            variant="outlined"
            name="name"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.name && errors.name}
             helperText =  {touched.name && errors.name ? errors.name :null}
             />

<TextField
           id="outlined-basic"
            label="Movie Poster"
            variant="outlined"
            name="poster"
            value={values.poster}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.poster && errors.poster}
             helperText =  {touched.poster && errors.poster ? errors.poster :null}
             />

<TextField
           id="outlined-basic"
            label="Movie Rating"
            variant="outlined"
            name="rating"
            value={values.rating}
            onBlur={handleBlur}
            onChange={handleChange}
            type="number"
            error = {touched.rating && errors.rating}
             helperText =  {touched.rating && errors.rating ? errors.rating :null}
             />

<TextField
           id="outlined-basic"
            label="Movie Type"
            variant="outlined"
            name="type"
            value={values.type}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.type && errors.type}
             helperText =  {touched.type && errors.type ? errors.type :null}
             />

<TextField
           id="outlined-basic"
            label="Movie Summary"
            variant="outlined"
            name="summary"
            value={values.summary}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.summary && errors.summary}
             helperText =  {touched.summary && errors.summary ? errors.summary :null}
             />

<TextField
           id="outlined-basic"
            label="Movie Trailer"
            variant="outlined"
            name="trailer"
            value={values.trailer}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.trailer && errors.trailer}
             helperText =  {touched.trailer && errors.trailer ? errors.trailer :null}
             />

<TextField
           id="outlined-basic"
            label="Actors"
            variant="outlined"
            name="cast"
            value={values.cast}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.cast && errors.cast}
             helperText =  {touched.cast && errors.cast ? errors.cast :null}
             />

<TextField
           id="outlined-basic"
            label="Actors"
            variant="outlined"
            name="cast1"
            value={values.cast1}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.cast1 && errors.cast1}
             helperText =  {touched.cast1 && errors.cast1 ? errors.cast1 :null}
             />

<TextField
           id="outlined-basic"
            label="Actors"
            variant="outlined"
            name="cast2"
            value={values.cast2}
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            error = {touched.cast2 && errors.cast2}
             helperText =  {touched.cast2 && errors.cast2 ? errors.cast2 :null}
             />


          
          <Button type="submit" sx={{backgroundColor:"#f84464",padding:"15px"}} variant="contained">Add</Button>
          </Box>
          </form>
  
  </Paper>
    </Box>
    </>
  }

export default AdminaddMovies
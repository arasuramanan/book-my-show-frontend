import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate, useParams} from 'react-router-dom'
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
    castimg:yup.string().required(),
    cast1img:yup.string().required(),
    cast2img:yup.string().required(),
  })
  
  function AdmineditMovie() {
    const {id} = useParams()
    const [list,setList] = useState(null);

    const token = localStorage.getItem("Authorization")
  
    useEffect(() => {
        fetch(`https://book-my-show-backend-arasuramanan.onrender.com/bookmyshow/movies/${id}`,
        {
            method:"GET",
            headers:{
              Authorization:localStorage.getItem("Authorization")
              
          }
        })
        .then((data) => data.json())
        .then((list) => setList(list))
    }, [])
  
    return list ? <EditForm list={list}/> : null
  }


  function EditForm({list}) {
  
    const token = localStorage.getItem("Authorization")
    let navigate = useNavigate()
    const {handleSubmit, values, handleChange,handleBlur,touched, errors} = useFormik({
      initialValues:{
          name:list.name,
          poster:list.poster,
          rating:list.rating,
          type:list.type,
          summary:list.summary,
          trailer:list.trailer,
          cast:list.cast,
          cast1:list.cast1,
          cast2:list.cast2,
          castimg:list.castimg,
          cast1img:list.cast1img,
          cast2img:list.cast2img,
      },
      validationSchema : formValidationSchema,
      onSubmit:(newList) => {
          editMovie(newList)
      }
  
  })
    let editMovie = (newList) => {
          fetch("https://book-my-show-backend-arasuramanan.onrender.com/bookmyshow/add/movies",{
            method:"PUT",
            body: JSON.stringify(newList),
            headers: {
              "Content-Type" : "application/json",
              
                Authorization:localStorage.getItem("Authorization")
                
            
          },
          })
              .then((data) => data.json())
              .then(() => alert('Movie added Successfully'))
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
        <h4>Edit Movie</h4>

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


        <TextField
         id="outlined-basic"
          label="Actors image"
           variant="outlined"
           name="castimg"
           value={values.castimg}
           onBlur={handleBlur}
           onChange={handleChange}
           type="text"
           error = {touched.castimg && errors.castimg}
            helperText =  {touched.castimg && errors.castimg ? errors.castimg :null}
            />
           
        <TextField
         id="outlined-basic"
          label="Actors image"
           variant="outlined"
           name="cast1img"
           value={values.cast1img}
           onBlur={handleBlur}
           onChange={handleChange}
           type="text"
           error = {touched.cast1img && errors.cast1img}
            helperText =  {touched.cast1img && errors.cast1img ? errors.cast1img :null}
            />

<TextField
         id="outlined-basic"
          label="Actors image"
           variant="outlined"
           name="cast2img"
           value={values.cast2img}
           onBlur={handleBlur}
           onChange={handleChange}
           type="text"
           error = {touched.cast2img && errors.cast2img}
            helperText =  {touched.cast2img && errors.cast2img ? errors.cast2img :null}
            />

        <Button type="submit" sx={{backgroundColor:"#f84464",padding:"15px"}} variant="contained">Add</Button>
        </Box>
        </form>

</Paper>
  </Box>
  </>
}



export default AdmineditMovie
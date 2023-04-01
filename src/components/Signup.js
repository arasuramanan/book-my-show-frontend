import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import {useFormik} from "formik";
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';


const formValidationSchema = yup.object({
  fullName:yup.string().required(),
  email:yup.string().required(),
  password:yup.string().required().min(5),
  role:yup.string().required()
})

function Signup() {

    let navigate = useNavigate()
    const {handleSubmit, values, handleChange,handleBlur,touched, errors} = useFormik({
      initialValues:{
        role:'',
        fullName:'',
        email:'',
        password:'',
      },
      validationSchema : formValidationSchema,
      onSubmit:(newList) => {
          addUser(newList)
      }
  
  })
    let addUser = (newList) => {
          fetch("http://localhost:5002/users/signup",{
            method:"POST",
            body: JSON.stringify(newList),
            headers: {
              "Content-Type" : "application/json",
          },
          })
              .then((data) => data.json())
              .then(() => toast.success('Account Created Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                }))
                .then(() =>setTimeout(() =>{
                  navigate('/users/login')
                },3000))
  
    }

  return <>
  <NavBar/>
    <Box sx={{backgroundColor:"#f2f2f2",height:{xs:"100vh",md:"100vh"},display:"flex",alignItems:"center"}}>
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
        src="/image/bms.png"
        />
        <h4>Register Your Details</h4>

        <form  onSubmit = {handleSubmit}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>

        <TextField
         id="outlined-basic"
          label="Role(Admin/User)"
          variant="outlined"
          name="role"
          value={values.role}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          error = {touched.role && errors.role}
           helperText =  {touched.role && errors.role ? errors.role :null}
           />

        <TextField
         id="outlined-basic"
          label="Full Name"
          variant="outlined"
          name="fullName"
          value={values.fullName}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          error = {touched.fullName && errors.fullName}
           helperText =  {touched.fullName && errors.fullName ? errors.fullName :null}
           />

        <TextField
         id="outlined-basic"
          label="Email"
           variant="outlined"
           name="email"
           value={values.email}
           onBlur={handleBlur}
           onChange={handleChange}
           type="text"
           error = {touched.email && errors.email}
            helperText =  {touched.email && errors.email ? errors.email :null}
            />
           
        <TextField
         id="outlined-basic"
          label="Password"
           variant="outlined"
           name="password"
           value={values.password}
           onBlur={handleBlur}
           onChange={handleChange}
           type="password"
           error = {touched.password && errors.password}
            helperText =  {touched.password && errors.password ? errors.password :null}
            />

        <Button type="submit" sx={{backgroundColor:"#f84464",padding:"15px"}} variant="contained">Signup</Button>
        <ToastContainer />
        </Box>
        </form>
        <h5 style={{margin:"10px"}}>Already have an Account <span style={{color:"#f84464",cursor:"pointer"}} onClick={() => navigate('/users/login')}>Click here to Login</span></h5>

</Paper>
  </Box>
  </>
}

export default Signup
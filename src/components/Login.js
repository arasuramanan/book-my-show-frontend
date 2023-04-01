import React,{useContext} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import {useFormik} from "formik";
import * as yup from "yup"
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import { MyContext } from "../components/Context";
import bms from "../image/bms.png";




const formValidationSchema = yup.object({
  role:yup.string().required(),
    email:yup.string().required(),
    password:yup.string().required().min(5),
})

function Login() {

let {setUser} = useContext(MyContext), 
navigate=useNavigate();

const {handleSubmit, values, handleChange,handleBlur,touched, errors} = useFormik({
    initialValues:{
      role:'',
      email:'',
      password:'',
    },
    validationSchema : formValidationSchema,
    onSubmit:(loginUser) => {
        addList(loginUser)
    }
})

let addList = (loginUser) => {
    fetch("http://localhost:5002/users/login",{
        method:"POST",
        body: JSON.stringify(loginUser),
        headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((data) => data.json())
          .then(data => {
            setUser(data.userDetail)
          if(data){
            localStorage.setItem("Authorization", data.token)
            localStorage.setItem("email", data.userDetail.email)
            if (data.msg === `Login Successfully`) {
              if(loginUser.role === 'Admin'){
                setTimeout(() =>{
                  navigate('/bookmyshow/movies/admin')
                },3000)
              }else if(loginUser.role === 'User'){
                setTimeout(() =>{
                  navigate('/bookmyshow/movies')
                },3000)
              }else{
                toast.error('Invalid Credentials', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  })
              }
            }
          }})
      .catch(err => console.log(err))
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
        src={bms}
        />
        <h4>Login to Your Account</h4>
        <form  onSubmit = {handleSubmit}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>

        <TextField 
        id="outlined-basic" 
        label="Enter Your Role" 
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

        <Button type="submit" sx={{backgroundColor:"#f84464",padding:"15px"}} variant="contained">Login</Button>
        <ToastContainer />
        </Box>
        </form>
        <h5 style={{margin:"15px"}}>Forgot Password <span style={{color:"#f84464",cursor:"pointer"}}>Click here</span></h5>
        <h5 style={{margin:"10px"}}>Don't have an Account <span style={{color:"#f84464",cursor:"pointer"}} onClick={() => navigate('/users/signup')}>Click here to Register</span></h5>

</Paper>
  </Box>
  </>
}

export default Login
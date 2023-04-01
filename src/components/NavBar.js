import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { MyContext } from "../components/Context";
import bms from "../image/bms.png";



function NavBar() {

  let {user} = useContext(MyContext)

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const token = localStorage.getItem("Authorization")

 let navigate = useNavigate();

 let logOut = () => {
  localStorage.removeItem("Authorization")
  localStorage.removeItem("email")
  navigate('/users/login')
 }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{backgroundColor:"#333545"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
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
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem sx={{display:'flex',flexDirection:{xs:'column'},gap:2}} onClick={handleCloseNavMenu}>
                {
                  token ? <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/bookmyshow/movies')}>Movies</Typography> : null
                }
                {
                  token ?  <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/bookmyshow/movies/query')}>Queries</Typography> : null
                }

                {
                  token ? null :  <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/users/signup')}>Signup</Typography>
                }
                  {
                    token ? <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={logOut}>Logout</Typography>
                    :
                    <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/users/login')}>Login</Typography>
                  }
                  {
                    token && <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={logOut}>{user?.fullName}</Typography>
                  }
                  
                </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
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
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white',display: { xs: 'none', md: 'flex' },flexDirection:{xs:'none',md:'row'},gap:4 }}
              >
                {
                  token ? <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/bookmyshow/movies')}>Movies</Typography> : null
                }
                {
                  token ?  <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/bookmyshow/movies/query')}>Queries</Typography> : null
                }

                {
                  token ? null :  <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/users/signup')}>Signup</Typography>
                }
                 
                  {
                    token ? <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={logOut}>Logout</Typography>
                    :
                    <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate('/users/login')}>Login</Typography>
                  }
                                    {
                    token && <Typography sx={{fontSize:"14px",fontWeight:500}} onClick={logOut}>{user?.fullName}</Typography>
                  }
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
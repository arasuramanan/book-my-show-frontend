import './App.css';
import {Routes,Route} from 'react-router-dom'
import Movies from './components/Movies';
import Movie from './components/Movie';
import Theater from './components/Theater';
import Bookings from './components/Bookings';
import Login from './components/Login';
import Signup from './components/Signup';
import Query from './components/Query';
import Payment from './components/Payment';
import Admin from './components/Admin';
import AdminaddMovies from './components/AdminaddMovies';
import AdmineditMovie from './components/AdmineditMovie';
import SeatBooking from './components/SeatBooking';
// import connect from './components/global/connect';


function App() {

  return <>
  <Routes>
  <Route path='/' element={<Signup/>}/>
  <Route path='/users/signup' element={<Signup/>}/>
  <Route path='/users/login' element={<Login/>}/>
  <Route path='/bookmyshow/movies/admin' element={<Admin/>}/>
  <Route path='/bookmyshow/movies/add' element={<AdminaddMovies/>}/>
  <Route path='/bookmyshow/movies/edit/:id' element={<AdmineditMovie/>}/>
    <Route path='/bookmyshow/movies' element={<Movies/>}/>
    <Route path='/bookmyshow/movies/query' element={<Query/>}/>
    <Route path='/bookmyshow/movies/:id' element={<Movie/>}/>
    <Route path='/bookmyshow/movies/:id/theater' element={<Theater/>}/>
    <Route path='/bookmyshow/movies/:id/theater/:theaterId' element={<Bookings/>}/>
    <Route path='/bookmyshow/movies/:id/theater/:theaterId/:showId/seatbooking' element={<SeatBooking/>}/>
    <Route path='/bookmyshow/movies/:id/theater/:theaterId/:showId/seatbooking/:selected/:total' element={<Payment/>}/>
  </Routes>
  
  </>
}

export default App;

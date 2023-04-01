import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SeatPicker from "react-seat-picker";
import NavBar from './NavBar';

function SeatBooking() {

    let { id,theaterId,showId} = useParams()
    let navigate = useNavigate()

    let [movie,setMovie] = useState({})
    let [show,setShow] = useState([])
    let [theater,setTheater] = useState([])
    const [selected, setSelected] = useState([]);

    const token = localStorage.getItem("Authorization")

    const getMovie = () => {
        fetch(`http://localhost:5002/bookmyshow/movies/${id}`,
        {
            method:"GET",
            headers:{
              Authorization:localStorage.getItem("Authorization")
              
          }
    })
        .then((data) => data.json())
        .then((mv) => setMovie(mv))
        }
        useEffect(() => {getMovie()},[id])

        useEffect(() => {
        if(movie){
          setTheater(movie.theaters)
        }
        
        }, [movie])

        useEffect(() => {
          if(movie){
            setShow(movie.shows)
          }
          }, [movie])

      let totalPrice = movie.price * selected.length
    
      const rows = [
        [
          { "id": "1", "number": "A1" },
          { "id": "2", "number": "A2" },
          { "id": "3", "number": "A3" },
          { "id": "4", "number": "A4" },
          { "id": "5", "number": "A5" },
          { "id": "6", "number": "A6" },
          { "id": "7", "number": "A7" },
          { "id": "8", "number": "A8", "isReserved": true },
          null,
          { "id": "9", "number": "A9" },
          { "id": "10", "number": "A10" }
        ],
        [
          { "id": "11", "number": "B1" },
          { "id": "12", "number": "B2" },
          { "id": "13", "number": "B3", "isReserved": true },
          { "id": "14", "number": "B4" },
          { "id": "15", "number": "B5" },
          { "id": "16", "number": "B6" },
          { "id": "17", "number": "B7" },
          { "id": "18", "number": "B8" },
          null,
          { "id": "19", "number": "B9" },
          { "id": "20", "number": "B10" }
        ],
        [
          { "id": "21", "number": "C1" },
          { "id": "22", "number": "C2" },
          { "id": "23", "number": "C3" },
          { "id": "24", "number": "C4" },
          { "id": "25", "number": "C5" },
          { "id": "26", "number": "C6" },
          { "id": "27", "number": "C7" },
          { "id": "28", "number": "C8" },
          null,
          { "id": "29", "number": "C9" },
          { "id": "30", "number": "C10", "isReserved": true }
        ],
        [
          { "id": "31", "number": "D1" },
          { "id": "32", "number": "D2" },
          { "id": "33", "number": "D3", "isReserved": true },
          { "id": "34", "number": "D4" },
          { "id": "35", "number": "D5" },
          { "id": "36", "number": "D6" },
          { "id": "37", "number": "D7" },
          { "id": "38", "number": "D8" },
          null,
          { "id": "39", "number": "D9" },
          { "id": "40", "number": "D10" }
        ],
        [
          { "id": "41", "number": "E1" },
          { "id": "42", "number": "E2" },
          { "id": "43", "number": "E3" },
          { "id": "44", "number": "E4" },
          { "id": "45", "number": "E5" },
          { "id": "46", "number": "E6" },
          { "id": "47", "number": "E7" },
          { "id": "48", "number": "E8" },
          null,
          { "id": "49", "number": "E9" },
          { "id": "50", "number": "E10" }
        ],
        [
          { "id": "51", "number": "F1" },
          { "id": "52", "number": "F2" },
          { "id": "53", "number": "F3" },
          { "id": "54", "number": "F4" },
          { "id": "55", "number": "F5" },
          { "id": "56", "number": "F6" },
          { "id": "57", "number": "F7" },
          { "id": "58", "number": "F8" },
          null,
          { "id": "59", "number": "F9" },
          { "id": "60", "number": "F10" }
        ],
        [
          { "id": "61", "number": "G1" },
          { "id": "62", "number": "G2" },
          { "id": "63", "number": "G3" },
          { "id": "64", "number": "G4" },
          { "id": "65", "number": "G5" },
          { "id": "66", "number": "G6" },
          { "id": "67", "number": "G7", "isReserved": true },
          { "id": "68", "number": "G8" },
          null,
          { "id": "69", "number": "G9" },
          { "id": "70", "number": "G10" }
        ],
        [
          { "id": "71", "number": "H1" },
          { "id": "72", "number": "H2" },
          { "id": "73", "number": "H3" },
          { "id": "74", "number": "H4" },
          { "id": "75", "number": "H5" },
          { "id": "76", "number": "H6", "isReserved": true },
          { "id": "77", "number": "H7" },
          { "id": "78", "number": "H8" },
          null,
          { "id": "79", "number": "H9" },
          { "id": "80", "number": "H10" }
        ],
        [
          { "id": "81", "number": "I1" },
          { "id": "82", "number": "I2" },
          { "id": "83", "number": "I3" },
          { "id": "84", "number": "I4" },
          { "id": "85", "number": "I5" },
          { "id": "86", "number": "I6" },
          { "id": "87", "number": "I7", "isReserved": true },
          { "id": "88", "number": "I8" },
          null,
          { "id": "89", "number": "I9" },
          { "id": "90", "number": "I10" }
        ],
        [
          { "id": "91", "number": "J1" },
          { "id": "92", "number": "J2" },
          { "id": "93", "number": "J3" },
          { "id": "94", "number": "J4" },
          { "id": "95", "number": "J5" },
          { "id": "96", "number": "J6" },
          { "id": "97", "number": "J7", "isReserved": true },
          { "id": "98", "number": "J8" },
          null,
          { "id": "99", "number": "J9" },
          { "id": "100", "number": "J10" }
        ]
      ];
      
      const addSeatCallback = ({ row, number, id }, addCb) => {
        setSelected((prevItems) => [...prevItems, number]);
        addCb(row, number, id);
      };
    
      const removeSeatCallback = ({ row, number, id }, removeCb) => {
        setSelected((list) => list.filter((item) => item !== number));
        removeCb(row, number);
      };

  return <>
  <NavBar/>
    <Box sx={{backgroundColor:"#1a1a1a"}}>
  <Box sx={{padding:"30px 0px",width:"70%",margin:"0px auto"}}>
   <h6 style={{fontSize:"18px",color:"whitesmoke",margin:15}}>{movie.name}</h6>
   <h6 style={{fontSize:"18px",color:"whitesmoke",margin:15}}>Today, 23 Nov | {movie.type}</h6>
   <p style={{color:"white",margin:15}}>{theater && theater.length > 0 ? theater.find((e,i) => e.theaterid === theaterId)?.theatername : ''}</p>
   <p style={{color:"white",margin:15,fontWeight:600}}>{show && show.length > 0 ? show.find(e => e.showid === showId).show : ''}</p>

  </Box>
  </Box>

<Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",margin:"20px 0px"}}>
<SeatPicker
        addSeatCallback={addSeatCallback}
        removeSeatCallback={removeSeatCallback}
        rows={rows}
        maxReservableSeats={10}
      />

{selected.length !== 0 ? (
        <>
<Box sx={{width:"70%",display:"flex",justifyContent:"space-between",margin:"0px auto"}}>
<h1 style={{fontSize:"16px",margin:"20px 0px 10px 0px"}}>SEAT:{selected.toString()}</h1>
                            <h1 style={{fontSize:"16px",margin:"20px 0px 10px 0px"}}>
                price:{totalPrice}
              </h1>
</Box>
<Box sx={{width:"70%",margin:"20px auto"}}>
<Button type="submit" sx={{backgroundColor:"#f84464",width:"100%"}} variant="contained" onClick={() => navigate(`/bookmyshow/movies/${movie.id}/theater/${theaterId}/${showId}/seatbooking/${selected}/${totalPrice}`)}>Next</Button>
</Box>  
        </>
      ) : null}
</Box>
    
  </>
}

export default SeatBooking
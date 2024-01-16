import React, { useState, useEffect } from 'react'
import Map from './components/Map'
import PharmacieList from "./components/PharmacieLIst";
import Loader from './components/Loader'
import Header from './components/Header'
import VilleComponent from './components/VilleComponent'; // Ensure correct path
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Buttom from "./components/Buttom";
import SearchBox from "./components/SearchBox";
import RightSide from "./components/RightSide";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {Icon} from "@iconify/react";
import eventData, {icon} from "leaflet";


function App() {
  const [curent_position , setCurent_position] = useState()
  const [selected_PH , setSelected_PH] = useState("0")
  const [ selected_zone , setSelected_Zone] = useState("0")
  const [pharmacytData, setPharmacyData] = useState([])
  const [pharmacytNuit, setPharmacyNuit] = useState([])
  const [pharmacytJour, setPharmacyJour] = useState([])
  const [loading, setLoading] = useState(false)
  const [ville , setVille] = useState([])
    const choosePosition = (center) => {
        setCurent_position(center);
      };
     
      const chooseZone = (id) => {
        setSelected_Zone(id);
      };
      const choosePH = (id) => {
        setSelected_PH(id);
      };
  
  
  useEffect(() => {
    const fetchPharmacy = async () => {
      const res = await fetch('http://localhost:9090/zones/pharmacies/'+selected_zone)
      const result = await res.json()
      setPharmacyData(result)
      
    }
    const fetchPharmacyJour = async () => {
      const res = await fetch('http://localhost:9090/pharmacieDeGardes/getActual/jour/'+selected_zone)
      const result = await res.json()
      setPharmacyJour(result)
    }
    const fetchPharmacyNuit = async () => {
      const res = await fetch('http://localhost:9090/pharmacieDeGardes/getActual/nuit/'+selected_zone)
      const result = await res.json()
      setPharmacyNuit(result)
      console.log(result)
    }
    const fetchVille = async () => { 
      const res = await fetch('http://localhost:9090/villes/all')
      const result = await res.json()
      setVille(result)
    }
    if(selected_zone!="0")
    {
      fetchPharmacy()
    }
   
    fetchVille()
    fetchPharmacyJour()
    fetchPharmacyNuit()
    
  }, [selected_zone] )
  const [position, setPosition] = useState(null)
  useEffect(() => {

    if(selected_PH !=0 && position!=null){
      setLoading(false)
    }

  })
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        choosePosition(e.latlng)
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        console.log(selected_PH)
      },
    })

    return position === null ? null : (
        <Marker  position={position}>
          <Popup>Vous Etes La</Popup>
        </Marker>
    )
  }

  return (
      <>
        <Header/>
        <Main>
          <RightSide>
            <Map
                selected_PH={selected_PH}
                choosePH={choosePH}
                eventData={pharmacytData}
                choosePosition={choosePosition}
                curent_position={curent_position}
                pharmacytNuit={pharmacytNuit}
                pharmacytJour={pharmacytJour}
            />
          </RightSide>
          <div className="col-lg-6">
            <div className="row">

              <SearchBox ville={ville} chooseZone={chooseZone}/>

            </div>
            <div className="row">
              <div>

                <PharmacieList pharmacies={pharmacytData}/>


              </div>
            </div>

          </div>






          {/* <PharmaciesList pharmacies={pharmacies}/> */}





        </Main>
        <Buttom/>




      </>

  )
      ;
}

export default App;

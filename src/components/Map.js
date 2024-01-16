import { MapContainer, LayerGroup ,  TileLayer , LayersControl , useMapEvents , Marker ,Popup} from 'react-leaflet'

import {useEffect, useState} from 'react'
import Routing from './Routing'
import { icon } from "leaflet"
import { Icon } from '@iconify/react'

const ICON1 = icon({
  iconUrl: "https://github.com/ayouboifikEnsaj/pharma-maps/blob/main/65a54e1232b6e4000f209492%20(1).png?raw=true",
  iconSize: [40, 40],
})
const ICOND = icon({
  iconUrl: "https://github.com/ayouboifikEnsaj/pharma-maps/blob/main/65a54eea32b6e4000920bfbd.png?raw=true",
  iconSize: [40, 40],
})
const ICONN = icon({
  iconUrl: "https://github.com/ayouboifikEnsaj/pharma-maps/blob/main/65a54eea32b6e4000920bfbd.png?raw=true",
  iconSize: [40, 40],
})
const ICONU = icon({
  iconUrl: "https://icon-library.com/images/2018/2112015_marker-circle-map-marker-circle-png-png-download.png",
  iconSize: [40, 40],
})

const Map = ({choosePH,eventData,choosePosition,curent_position,selected_PH,pharmacytJour,pharmacytNuit}) => {
  const [loading, setLoading] = useState(true)
  const [position, setPosition] = useState(null)
    const [photoData, setPhotoData] = useState(null);
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
            <Marker  position={position} icon={ICONU}>
              <Popup>Vous Etes La</Popup>
            </Marker>
          )
      }
      


    const markers = eventData.map((ev, index) => {
      const lat = ev.lat
      const lng =  ev.log
      const url = "http://localhost:8090/get/imagep/" + ev.id
        return <Marker icon={ICON1}  key={index} position={[ ev.lat , ev.log]} >
             <Popup>
               <h2><Icon icon="healthicons:pharmacy"  />{ev.nom}</h2>
               <img style={ {width : "16rem"}} src={url} alt='pharmacy'></img>
                <h3> adresse : {ev.adresse} </h3>
                <button onClick={() => choosePH({lat , lng})}><Icon icon="entypo:location" />Localiser</button>
                </Popup>
            </Marker >
    })
    const markersJour = pharmacytJour.map(async (ev, index) => {
        const lat = ev.lat
        const lng = ev.log

        const url = "http://localhost:8090/pharmacies/get/imagep/" + ev.id

        return <Marker icon={ICOND} key={index} position={[ev.lat, ev.log]}>
            <Popup>
                <h2><Icon icon="healthicons:pharmacy"/>{ev.nom}</h2>
                <img style={{width: "16rem"}}  alt='pharmacy'></img>
                <h3> adresse : {ev.adresse} </h3>
                <button onClick={() => choosePH({lat, lng})}><Icon icon="entypo:location"/> Localiser</button>
            </Popup>
        </Marker>
    })
  const markersNuit = pharmacytNuit.map(async (ev, index) => {
      const lat = ev.lat
      const lng = ev.log
      const url = "http://localhost:8090/get/imagep/" + ev.id
      return <Marker icon={ICONN} key={index} position={[ev.lat, ev.log]}>
          <Popup>
              <h2><Icon icon="healthicons:pharmacy"/>{ev.nom}</h2>
              <img style={{width: "16rem"}}
                   alt='pharmacy'></img>
              <h3> adresse : {ev.adresse} </h3>
              <button onClick={() => choosePH({lat, lng})}><Icon icon="entypo:location"/> Localiser</button>
          </Popup>
      </Marker>
  })


  return (
    <div className='maps' >
      <MapContainer center={[ 33.189283 , -8.503153]} zoom={14} scrollWheelZoom={false}
                    style={{ width: 850, height: 700 }} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
    <LocationMarker />
    <LayersControl position="topright">
          <LayersControl.Overlay checked  name="Toute les pharmacies">
          <LayerGroup>
            {markers}
          </LayerGroup>
          </LayersControl.Overlay>
      <LayersControl.Overlay   name="les pharmacies Garde Nuits">
      <LayerGroup>
        {markersNuit}
       </LayerGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay   name="les pharmacies Garde Jour">
      <LayerGroup>
        {markersJour}
       </LayerGroup>
      </LayersControl.Overlay>
      </LayersControl>

    { !loading ? <Routing source={curent_position} destination={selected_PH} /> : <></>}
    </MapContainer>
    </div>
  )
}

export default Map




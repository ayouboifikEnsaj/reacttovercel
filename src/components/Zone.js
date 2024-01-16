import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';

const Zone = ({ville,chooseZone}) => {

  const wrapperFunction = (ev) => {
    //do something
    chooseZone(ev);
    //do something
    setTt(ev);
    //do something
  }
   



  const [zones , setZones] = useState([])
  const [tt , setTt] = useState()
  useEffect(() => {
    const fetchZones = async () => {
      
      const res = await fetch('http://localhost:9090/villes/zones/'+ville)
      const result = await res.json()
      setZones(result)
    }
    if(ville!=="0") {
      fetchZones()
      setTt("0")

    }
    

  },[ville])
  const zone = zones.map((ev, index) => {
      return <option value={ev.id} >
          {ev.nom}
      </option>
      //onChange={() => setLocationInfo({ id: ev.id, lat: ev.lat })}
    
  })  

    return (
      <>
          <h3 id='zonet'> zone :</h3>
           <Form.Select size="lg" name="zones" id="zone-select" value={tt} onChange={e=>wrapperFunction(e.target.value)} >
              <option value="0">--Veillez Choissir une Zone--</option>
              {zone}
          </Form.Select>
          
      </>
     
    )


  
}
export default Zone

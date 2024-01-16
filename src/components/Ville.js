import {useState} from 'react'
import Zone from './Zone'
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Ville = ({ville,chooseZone}) => {
    const [selected_ville , setSelected_ville] = useState("0")
    const villes = ville.map((ev, index) => {
        return <option value={ev.id} nom={ev.nom} >
            {ev.nom}
        </option>
        //onChange={() => setLocationInfo({ id: ev.id, lat: ev.lat })}
        
    })  
  return (
    <Container>
        <Row>
            <Col>
                <h3 id='zonet'> Ville :</h3>
                <Form.Select size="lg" name="villes" id="ville-select"
                             onChange={e => setSelected_ville(e.target.value)}>
                    <option value="0">--Veillez Choissir une ville--</option>
                    {villes}
                </Form.Select>

            </Col>
            <Col>
                <Zone ville={selected_ville} chooseZone={chooseZone}  />
        </Col>
        </Row>

    </Container>

)
}

export default Ville

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function Buttom() {
    return (

        <Navbar fixed="bottom" bg="secondary" variant="dark" className="text-center">

                <Navbar.Brand className="mx-auto">
                    <p>&copy; 2023 ISMAIL-AYOUB</p>
                </Navbar.Brand>

        </Navbar>

    );
}

export default Buttom;
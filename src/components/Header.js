import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt="Image"
                        src="https://i.pinimg.com/originals/57/1a/e3/571ae39ce1b3360b0cf852322b413bdb.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}

                    Pharmacie Client
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
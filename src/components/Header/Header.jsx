import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
    let navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
    }

    const account = useSelector(state => state.user.account)
    const isauthenticated = useSelector(state => state.user.isauthenticated)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                {/* <Navbar.Brand href="#home">Page OF Phuc</Navbar.Brand> */}
                <NavLink to="/" className='navbar-brand'>Home</NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/user">User</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link> */}

                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/user" className='nav-link'>User</NavLink>

                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>

                    </Nav>
                    <Nav>

                        {isauthenticated ? <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item  onClick={()=>handleClick()}>Login</NavDropdown.Item>
                            <NavDropdown.Item  >
                                Logout
                            </NavDropdown.Item>
                            <NavDropdown.Item  >User Info</NavDropdown.Item>

                        </NavDropdown>

                            :


                            <>

                                <button className='btn-login' onClick={() => handleClick()}> Login </button>
                                <button className='btn-signup' onClick={() => navigate("/register")}>Sign up</button>
                            </>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import logo from './logo.png';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark"  expand="lg" fixed="top"  >
            <Navbar.Brand  as={Link} to="/" >
                <img 
    
                    src={logo} width="78px"
                    className="d-inline-block align-top"
                    alt="Logo FullStackEletro"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/loja" to="/loja" >Nossas lojas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contato" to="/contato">Fale Conosco</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu)

export default Menu;
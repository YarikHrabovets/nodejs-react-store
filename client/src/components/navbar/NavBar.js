import React, { useContext } from 'react'
import { Context } from '../../index'
import { Container, Nav, Navbar, Button, Image } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import ProfileImage from '../../images/profile.jpg'
import Logo from '../../images/logo.png'
import { SHOP_ROUTE, LOGIN_ROUTE, CART_ROUTE, INDEX_ROUTE } from '../../utils/constants'
import styles from './NavBar.module.css'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark" className={styles.navbar}>
            <Container fluid className="d-flex flex-column flex-sm-row">
                <Navbar.Brand href={INDEX_ROUTE}><Image height="55px" src={Logo} /></Navbar.Brand>
                <Nav>
                    <Nav.Link href={SHOP_ROUTE} className="d-flex gap-1 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                        </svg>
                        <p className="my-auto fs-5">Наші товари</p>
                    </Nav.Link>
                </Nav>
                {user.isAuth ? 
                    <Nav>
                        <Nav.Link href={CART_ROUTE}><Image height="40px" src={ProfileImage} roundedCircle /></Nav.Link>
                    </Nav>
                    :
                    <Nav className="gap-5">
                        <Button variant="outline-light" onClick={() => navigate(LOGIN_ROUTE)}>Авторизуватися</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar
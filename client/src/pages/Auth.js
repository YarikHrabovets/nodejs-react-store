import React, { useContext, useState } from 'react'
import { Container, Form, Row, Col, Button, Alert } from 'react-bootstrap'
import AuthImg from '../images/auth-img.jpg'
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/constants'
import { NavLink , useLocation, useNavigate } from 'react-router-dom'
import { registration, login } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { INDEX_ROUTE } from '../utils/constants'

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState('')

    const authorize = async () => {
        try {
            setIsError(false)

            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setAuth(true)
            navigate(INDEX_ROUTE)
       } catch (e) {
            setIsError(true)
            setMessage(e.response.data.message)
       }
    }

    return (
        <Container fluid>
            <Row>
                <Col sm="6">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <div className="mt-5">
                            <span className="h1 fw-bold mb-0">{isLogin ? "Авторизуватися" : "Реєстрація"}</span>
                        </div>
                        <Form className="flex-column justify-content-center h-custom-2 w-75 pt-3">
                            {isError && <Alert variant='danger' className='w-100 text-center'>{message}</Alert>}
                            <Form.Control 
                                className="mb-3 w-100" 
                                placeholder="Введіть ваш email..."
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type='email'
                                />
                            <Form.Control 
                                className="mb-3 w-100" 
                                placeholder="Введіть ваш пароль..."
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type='password'
                                />
                            <Button 
                                variant="outline-success" 
                                className="mb-4 px-5 w-100"
                                onClick={authorize}
                            >
                                {isLogin ? "Увійти" : "Зареєструватися"}
                            </Button>
                        </Form>
                        {isLogin ?
                            <p className="d-flex">Немає акаунта? <NavLink to={REGISTRATION_ROUTE} className="link-primary ps-2">Реєстрація тут!</NavLink></p>
                            :
                            <p className="d-flex">Маєш акаунт? <NavLink to={LOGIN_ROUTE} className="link-primary ps-2">Увійти тут!</NavLink></p>
                        }
                    </div>
                </Col>
                <Col sm="6" className="d-none d-sm-block px-0" style={{
                        background: `url(${AuthImg}) no-repeat`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: '100vh'
                    }}
                ></Col>
            </Row>
        </Container>
    )
})

export default Auth
 
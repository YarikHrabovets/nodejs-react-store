import React, { useContext } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Context } from '../index'
import ProfileImage from '../images/profile.jpg'
import { useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/constants'

const Profile = () => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setAuth(false)
        localStorage.setItem('token', '')
        navigate(LOGIN_ROUTE)
    }

    return (
        <div className='container rounded shadow p-3 mb-5'>
            <h2 className='text-center'>Персональна сторінка</h2>
            <hr />
            <div className='d-flex justify-content-center mt-3 mb-5'>
                <Image className='shadow' height='150px' src={ProfileImage} roundedCircle />
            </div>
            <div className='d-flex justify-content-between'>
                <div className='d-block lh-1'>
                    <p className='fs-5'><span className='fw-bold'>Пошта:</span> {user.user.email}</p>
                    <p className='fs-5'><span className='fw-bold'>Роль:</span> {user.user.role}</p>
                </div>
                <div className='my-auto'>
                    {user.user.role === 'ADMIN' && <Button variant='outline-info' className='me-2' onClick={() => navigate(ADMIN_ROUTE)}>Адмін панель</Button>}
                    <Button variant='outline-danger' onClick={() => logOut()}>Вийти з акаутну</Button>
                </div>
            </div>
        </div>
    )
}

export default Profile
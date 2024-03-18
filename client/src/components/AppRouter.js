import React, { useContext } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { authRoutes, adminRoutes, publicRoutes } from '../routes'
import { INDEX_ROUTE } from '../utils/constants'
import { Context } from '../index'
import Footer from './footer/Footer'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE } from '../utils/constants'

const AppRouter = () => {
    const { user } = useContext(Context)
    const url = useLocation().pathname
    const isFooter = url !== LOGIN_ROUTE && url !== REGISTRATION_ROUTE && url !== ADMIN_ROUTE
    
    return (
        <>
            <div style={{flex: '1 1 auto'}}>
                <Routes>
                    {user.isAuth && authRoutes.map(({ path, Component }) => 
                        <Route key={path} path={path} Component={Component} exact />
                    )}
                    {user.user.role === 'ADMIN' && adminRoutes.map(({ path, Component }) => 
                        <Route key={path} path={path} Component={Component} exact />
                    )}
                    {publicRoutes.map(({ path, Component }) => 
                        <Route key={path} path={path} Component={Component} exact />
                    )}
                    <Route path='*' element={<Navigate to={INDEX_ROUTE} />} />
                </Routes>
            </div>
            {isFooter && <Footer />}
        </>
    )
}

export default AppRouter
 
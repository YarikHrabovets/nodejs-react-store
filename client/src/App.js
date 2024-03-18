import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import AppRouter from './components/AppRouter'
import NavBar from './components/navbar/NavBar'
import { Context } from './index'
import { check } from './http/userAPI'
import { Spinner, Alert } from 'react-bootstrap'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    check()
    .then(data => {
      setError(null)
      user.setUser(data)
      user.setAuth(true)
    })
    .catch(e => {
      setError(e.response.data.message)
    })
    .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className='position-absolute top-50 start-50 translate-middle'><Spinner animation={'border'}/></div>
  }

  return (
    <BrowserRouter>
      <NavBar />
      {error && <Alert className='w-100' variant='danger' dismissible>{error}</Alert>}
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
 
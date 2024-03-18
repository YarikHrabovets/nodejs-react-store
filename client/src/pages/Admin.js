import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import ModalType from '../components/modals/ModalType'
import ModalBrand from '../components/modals/ModalBrand'
import ModalProduct from '../components/modals/ModalProduct'

const Admin = () => {
    const [typeShow, setTypeShow] = useState(false)
    const [brandShow, setBrandShow] = useState(false)
    const [productShow, setProductShow] = useState(false)
    
    return (
        <Container className='mt-5 text-center bg-light shadow-lg p-3 rounded'>
            <h2>Адмін панель</h2>
            <Button onClick={() => setTypeShow(true)} variant='outline-info' size='lg' className='d-block w-100 mt-5'>Додати вид товару</Button>
            <Button onClick={() => setBrandShow(true)} variant='outline-info' size='lg' className='d-block w-100 mt-3'>Додати бренд товару</Button>
            <Button onClick={() => setProductShow(true)} variant='outline-info' size='lg' className='d-block w-100 mt-3'>Додати товар</Button>
            
            <ModalType show={typeShow} onHide={() => setTypeShow(false)} />
            <ModalBrand show={brandShow} onHide={() => setBrandShow(false)} />
            <ModalProduct show={productShow} onHide={() => setProductShow(false)} />
        </Container>
    )
}

export default Admin
 
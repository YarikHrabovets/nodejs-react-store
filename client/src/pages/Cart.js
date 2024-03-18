import React, { useContext, useEffect, useState } from 'react'
import Profile from '../components/Profile'
import { Container, ListGroup, Alert } from 'react-bootstrap'
import { fetchCart } from '../http/cartAPI'
import { Context } from '../index'
import CartItem from '../components/CartItem'

const Cart = () => {
    const { user } = useContext(Context)
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetchCart(user.user.id).then(data => setCart(data))
    }, [])

    return (
        <div className='mt-5 px-5'>
            <Profile />
            <Container className='mt-3'>
                <h2 className='text-center'>Кошик</h2>
                <hr />
                <ListGroup as='ul' className='mt-3'>
                    {cart.length !== 0
                        ? 
                        cart.map(cartProduct => 
                            <ListGroup.Item action as='li' key={cartProduct.id}>
                                <CartItem cartProduct={cartProduct}/>
                            </ListGroup.Item>
                        )  
                        : <Alert variant='warning'>Немає жодного товару</Alert>
                    }
                </ListGroup>
            </Container>
        </div>
    )
}

export default Cart
 
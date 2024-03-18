import React, { useEffect, useState } from 'react'
import { Image, Form, Button, InputGroup, Alert } from 'react-bootstrap'
import { fetchOneProduct } from '../http/productAPI'
import { delFromCart, updateCart } from '../http/cartAPI'

const CartItem = ({cartProduct}) => {
    const[product, setProduct] = useState({})
    const[quantity, setQuantity] = useState(cartProduct.quantity)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchOneProduct(cartProduct.productId).then(data => setProduct(data))
    }, [])

    const remove = async () => {
        try {
            await delFromCart(cartProduct.cartId, cartProduct.productId)
            window.location.reload(false)
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    const update = async () => {
        try {
            await updateCart(cartProduct.cartId, cartProduct.productId, quantity)
            window.location.reload(false)
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    const currencyFormat = (num) => {
		return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

    return (
        <div className='d-block d-md-flex align-items-center justify-content-between'>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Image src={process.env.REACT_APP_API_URL + product.img} alt={product.name} style={{height: 50}} />
            <h5>{product.name}</h5>
            <p className='my-auto'>&#8372;{currencyFormat(product.price * quantity)}</p>
            <div className='d-block d-md-flex gap-5'>
                <Form className='d-block d-md-flex'>
                    <InputGroup>
                        <Form.Control
                            type='number'
                            value={quantity}
                            onChange={e => e.target.value > 0 && setQuantity(e.target.value)}
                        />
                        <Button
                            variant='outline-dark'
                            onClick={update}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                            </svg>
                        </Button>
                    </InputGroup>
                </Form>
                <Button
                    className='px-5'
                    variant='outline-danger'
                    onClick={remove}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder-minus" viewBox="0 0 16 16">
                        <path d="m.5 3 .04.87a2 2 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2m5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19q-.362.002-.683.12L1.5 2.98a1 1 0 0 1 1-.98z"/>
                        <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}

export default CartItem
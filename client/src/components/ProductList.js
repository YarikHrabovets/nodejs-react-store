import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import Row from 'react-bootstrap/Row'
import ProductItem from './productitem/ProductItem'
import { Alert } from 'react-bootstrap'

const ProductList = observer(() => {
    const { products } = useContext(Context)
    
    if (products.products.length === 0) {
        return (
            <Alert variant='warning' className='mt-5'>
                На разі немає товарів по цьому фільтру
            </Alert>
        )
    }
    
    return (
        <Row>
            {products.products.map(product => 
                <ProductItem key={product.id} product={product} />
            )}
        </Row>
    )
})

export default ProductList
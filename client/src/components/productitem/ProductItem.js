import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../utils/constants'
import styles from './ProductItem.module.css'

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    return (
        <Col md={6} lg={4} xl={3} className="mt-5">
            <Card className={styles.cardHeight}>
                <Card.Img variant="top" src={process.env.REACT_APP_API_URL + product.img} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <hr></hr>
                    <Card.Text>{product.description?.substring(0, 100) + "..."}</Card.Text>
                    <div className="position-absolute bottom-0 start-50 translate-middle w-75">
                        <Button 
                            variant="primary"
                            className="w-100"
                            onClick={() => navigate(`${PRODUCT_ROUTE}/${product.id}`)}
                        >
                            Дивитися
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductItem
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Container, Form, Image, Row, InputGroup, Alert } from 'react-bootstrap'
import Comments from '../components/Comments'
import { fetchOneProduct, fetchOneBrand, fetchOneType } from '../http/productAPI'
import { fetchComments } from '../http/commentAPI'
import { addToCart } from '../http/cartAPI'
import { Context } from '../index'
import { CART_ROUTE } from '../utils/constants'

const Product = () => {
	const [product, setProduct] = useState({})
	const [brand, setBrand] = useState('')
	const [type, setType] = useState('')
	const [commentList, setCommentList] = useState([])
	const [quantity, setQuantity] = useState(1)
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const { user } = useContext(Context)
	const { id } = useParams()

	useEffect(() => {
		fetchOneProduct(id).then(data => {
			setProduct(data)
			fetchOneBrand(data.brandId).then(brand => setBrand(brand.name))
			fetchOneType(data.typeId).then(type => setType(type.name))
			fetchComments(data.id).then(data => setCommentList(data))
		})
	}, [id])

	const currencyFormat = (num) => {
		return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	const addProduct = async () => {
		try {
			await addToCart(user.user.id, product.id, quantity)
			navigate(CART_ROUTE)
		} catch (e) {
			setError(e.response.data.message)
		}
	}

	return (
		<Container className='mt-5'>
			{error && <Alert variant='danger'>{error}</Alert>}
			<Row>
				<Col md={4}>
					<Image src={process.env.REACT_APP_API_URL + product.img} fluid />
				</Col>
				<Col md={8}>
					<h2>{product.name}</h2>
					<hr/>
					<div className="lh-1 mb-5">
						<p><span className="fw-bold">Бренд: </span>{brand}</p>
						<p><span className="fw-bold">Тип: </span>{type}</p>
					</div>
					<p>{product.description}</p>
					<p>Ціна за одиницю: <span style={{fontWeight: 'bold'}}>{product.price}грн</span></p>
					{user.isAuth 
						? 
						<Form className="mt-3">
							<InputGroup className="mb-3">
								<InputGroup.Text>&#8372;</InputGroup.Text>
        						<InputGroup.Text>{currencyFormat(quantity * product.price)}</InputGroup.Text>
								<Form.Control 
									placeholder="Введіть кількість..."
									type='number'
									value={quantity}
									onChange={e => e.target.value > 0 && setQuantity(e.target.value)}
								/>
							</InputGroup>
							<Button
								variant='outline-success'
								className='w-100'
								onClick={addProduct}
							>
								Додати до кошика
							</Button>
						</Form>
						:
						<Button
							variant='outline-success'
							className='w-100'
							disabled 
							style={{ pointerEvents: 'none' }}
						>
							Додати до кошика(Функція недоступна)
					</Button>
					}
				</Col>
			</Row>
			<Comments productId={product.id} commentList={commentList} />
		</Container>
	)
}

export default Product
 
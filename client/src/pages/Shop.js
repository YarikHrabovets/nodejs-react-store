import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchTypes, fetchBrands, fetchProducts } from '../http/productAPI'
import ShopPagination from '../components/ShopPagination'
import ResetFilters from '../components/ResetFilters'

const Shop = observer(() => {
    const { products } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => products.setTypes(data))
        fetchBrands().then(data => products.setBrands(data))
        fetchProducts(null, null, products.page, products.limit).then(data => {
            products.setProducts(data.rows)
            products.setTotalProducts(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(products.selectedType.id, products.selectedBrand.id, products.page, products.limit).then(data => {
            products.setProducts(data.rows)
            products.setTotalProducts(data.count)
        })
    }, [products.selectedType, products.selectedBrand, products.page])

    return (
        <Container className="mt-5">
            <Row>
                <Col md={3}>
                    <TypeBar />
                    <ResetFilters />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <ProductList />
                    <ShopPagination />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop
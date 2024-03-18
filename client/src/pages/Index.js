import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import Banner from '../images/banner.jpg'
import { fetchLastProduct } from '../http/productAPI'
import ProductItem from '../components/productitem/ProductItem'

const Index = () => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetchLastProduct().then(data => setProduct(data))
    }, [])

    return (
        <Container className="mt-5">
            <Image className="shadow-lg mb-5" src={Banner} alt="Banner image" fluid rounded />
            <div className="d-flex flex-column flex-md-row gap-5">
                <div className="shadow p-5 w-100 w-md-50 bg-light bg-gradient">
                    <h2>Відкрийте для себе Різноманіття Смаку!</h2>
                    <p>У нашому магазині солодощів ви знайдете безмежну мозаїку смаків, яка вразить ваші смакові рецептори. Чому обирати нас?</p>
                    <ul>
                        <li>Широкий Вибір</li>
                        <li>Висока Якість</li>
                        <li>Подарункові Варіанти</li>
                        <li>Зручна Доставка</li>
                        <li>Доглянуте Обслуговування Клієнтів</li>
                    </ul>
                </div>
                <div className="shadow p-5 w-100 w-md-50 bg-light bg-gradient">
                    <h2>Радість Солодкого Життя</h2>
                    <p>У нашому магазині солодощів ми віримо в радість солодкого життя. Що робить нас особливими?</p>
                    <ul>
                        <li>Найсвіжіші Продукти</li>
                        <li>Широкий Вибір Здорових Варіантів</li>
                        <li>Креативні Смаки</li>
                        <li>Ексклюзивні Пропозиції</li>
                        <li>Команда Експертів</li>
                    </ul>
                </div>
            </div>
            <h2 className="mt-5 text-center fw-bold">Останій доданий товар</h2>
            <div className="d-flex justify-content-center">
                <ProductItem product={product} />
            </div>
        </Container>
    )
}

export default Index
import React from 'react'
import styles from './Footer.module.css'
import { INDEX_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/constants'

const Footer = () => {
    const urls = [
        {name: 'Головна', path: INDEX_ROUTE}, {name: 'Продукти', path: SHOP_ROUTE}, 
        {name: 'Авторизація', path: LOGIN_ROUTE}, {name: 'Реєстрація', path: REGISTRATION_ROUTE}
    ]

    return (
        <footer className="text-white bg-dark font-small mt-5 pt-5">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-8 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Наш магазин <span className="fw-bold">Morrou</span></h5>
                        <p>
                            Ласкаво просимо до нашого магазину солодощів, де ваші найсолодші фантазії 
                            стають реальністю! У нашому закладі ви знайдете найширший асортимент солодощів, 
                            які задовольнять смак кожного клієнта, від малечі до дорослих.
                        </p>
                        <p>Приходьте до нас і насолоджуйтеся миттєвим задоволенням солодкого життя!</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-0"/>
                    <div className="col-md-4 mb-md-0 mb-3 text-md-start">
                        <h5 className="text-uppercase ms-md-5">Мапа сайту</h5>
                        <ul className="list-unstyled ms-md-5">
                            {urls.map(url =>
                                <li key={url.path}><a className="text-decoration-none" href={url.path}>{url.name}</a></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className="footer-copyright text-center text-white-50 py-3">
                &copy; {new Date().getFullYear()} All rights reserved
            </div>

        </footer>
    )
}

export default Footer
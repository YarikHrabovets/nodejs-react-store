import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import { Pagination } from 'react-bootstrap'

const ShopPagination = observer(() => {
    const { products } = useContext(Context)
    const pageCount = Math.ceil(products.totalProducts / products.limit)
    const pages = []

    for (let i = 1; i <= pageCount; i++) pages.push(i) 

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item 
                    key={page}
                    active={products.page === page}
                    onClick={() => products.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default ShopPagination
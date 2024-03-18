import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import { Card } from 'react-bootstrap'

const BrandBar = observer(() => {
    const { products } = useContext(Context)

    return (
        <div className="d-flex overflow-scroll"> 
            {products.brands.map(brand => 
                <Card
                    style={{cursor: "pointer", minWidth: 100}}
                    border={brand.id === products.selectedBrand.id ? "secondary" : ""}
                    onClick={() => products.setSelectedBrand(brand)}
                    className="p-2 me-3"
                    key={brand.id}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    )
})

export default BrandBar
import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import ListGroup from 'react-bootstrap/ListGroup'

const TypeBar = observer(() => {
    const { products } = useContext(Context)

    return (
        <ListGroup className="shadow-sm bg-body mb-5 position-sticky" style={{top: 100}}>
            {products.types.map(type => 
                <ListGroup.Item 
                    variant="light"
                    style={{cursor: "pointer"}}
                    active={type.id === products.selectedType.id}
                    onClick={() => products.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar
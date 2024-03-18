import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../index'

const ResetFilters = () => {
    const { products } = useContext(Context)

    if (products.products.length === 0) {
        return <></>
    }

    return (
        <Button 
            variant='outline-dark'
            className='w-100 mb-3 position-sticky'
            style={{top: 200}}
            onClick={() => {
                products.setSelectedType({})
                products.setSelectedBrand({})
            }}
        >
            Очистити фільтри
        </Button>
    );
};

export default ResetFilters
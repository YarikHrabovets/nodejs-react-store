import React, { useContext, useState, useEffect } from 'react'
import { Modal, Form, Button, Dropdown } from 'react-bootstrap'
import { Context } from '../../index'
import { fetchBrands, fetchTypes, createProduct } from '../../http/productAPI'
import { observer } from 'mobx-react-lite'

const ModalProduct = observer(({show, onHide}) => {
    const { products } = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [desc, setDesc] = useState('')

    useEffect(() => {
        fetchTypes().then(data => products.setTypes(data))
        fetchBrands().then(data => products.setBrands(data))
    }, [])

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price.toString())
        formData.append('img', file)
        formData.append('brandId', products.selectedBrand.id)
        formData.append('typeId', products.selectedType.id)
        formData.append('description', desc)

        createProduct(formData).then(data => onHide())
    }

    return (
        <Modal
        show={show}
        onHide={onHide}
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="custom-modal-styling-title">
                    Додати товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <div className='mt-3 mb-3 d-flex gap-2'>
                        <Dropdown>
                            <Dropdown.Toggle>{products.selectedType.name || 'Виберіть тип продукту'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {products.types.map(type =>
                                    <Dropdown.Item 
                                        key={type.id}
                                        onClick={() => products.setSelectedType(type)}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle>{products.selectedBrand.name || 'Виберіть бренд продукту'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {products.brands.map(brand =>
                                    <Dropdown.Item 
                                        key={brand.id}
                                        onClick={() => products.setSelectedBrand(brand)}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                   </div>
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введіть назву'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введіть ціну'
                        type='number'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Виберіть зображення'
                        type='file'
                        onChange={selectFile}
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Опис товару'
                        as="textarea" 
                        rows={5} 
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Назад</Button>
                <Button variant='outline-success' onClick={addProduct}>Додати</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default ModalProduct
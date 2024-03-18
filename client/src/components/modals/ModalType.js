import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { createType } from '../../http/productAPI'

const ModalType = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const addType = () => {
        createType(value).then(data => setValue(''))
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="custom-modal-styling-title">
                    Додати вид товару
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder='Введіть назву'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Назад</Button>
                <Button variant='outline-success' onClick={addType}>Додати</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalType
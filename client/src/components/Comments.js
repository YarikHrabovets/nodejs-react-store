import React, { useContext, useState } from 'react'
import { Alert, Button, Container, Form, ListGroup } from 'react-bootstrap'
import CommentName from './CommentName'
import { addComment } from '../http/commentAPI'
import { Context } from '../index'

const Comments = ({productId, commentList}) => {
    const { user } = useContext(Context)
    const [comment, setComment] = useState('')
    const [error, setError] = useState('')

    const addCommentFromUser = async () => {
        try {
            if (comment.length > 20) {
                await addComment(user.user.id, productId, comment)
                window.location.reload(false)
            }
        } catch (e) {
            setError(e.response.data.message)
        }
    }

    return (
        <Container className='border mt-5 p-3 rounded'>
            <h3 className='mb-3'>Коментарі</h3>
            {error && <Alert variant='danger'>{error}</Alert>}
            {user.isAuth
                &&
                <Form>
                    <Form.Control 
                        placeholder='Відгук...'
                        as='textarea'
                        rows={3}
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                    <Button
                        className='mt-2'
                        onClick={addCommentFromUser}
                    >
                        Відправити
                    </Button>
                </Form>
            }
            <ListGroup as='ul' className='mt-3'>
                {commentList.length !== 0
                    ?
                    commentList.map(item => 
                        <ListGroup.Item as='li' className='lh-1' key={item.id}>    
                            <CommentName id={item.userId} />
                            <div className='d-flex justify-content-between gap-3'>
                                <p>{item.comment}</p>
                                <p>{new Intl.DateTimeFormat('uk-Uk').format(new Date(item.createdAt))}</p>
                            </div>
                        </ListGroup.Item>
                    )
                    :
                    <Alert variant='warning'>Для цього продукту немає коментарів</Alert>
                }
            </ListGroup>
        </Container>
    )
}

export default Comments
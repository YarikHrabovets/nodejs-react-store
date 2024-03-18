import React, { useEffect, useState } from 'react'
import { getUserEmail } from '../http/userAPI'

const CommentName = ({id}) => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        getUserEmail(id).then(data => setEmail(data))
    }, [])

    return (
        <p className='fw-bold'>
            {email}
        </p>
    )
}

export default CommentName
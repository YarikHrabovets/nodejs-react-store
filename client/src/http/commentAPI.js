import { $authHost } from './index'

export const fetchComments = async (productId) => {
    const { data } = await $authHost.get(`api/comment/get/${productId}`)
    return data
}

export const addComment = async (userId, productId, comment) => {
    const { data } = await $authHost.post('api/comment/add', {userId, productId, comment})
    return data
}
import { $authHost } from './index'

export const addToCart = async (userId, productId, quantity) => {
    const { data } = await $authHost.post('api/cart/add', {userId, productId, quantity})
    return data
}

export const fetchCart = async (userId) => {
    const { data } = await $authHost.get(`api/cart/get/${userId}`)
    return data
}

export const delFromCart = async (cartId, productId) => {
    const { data } = await $authHost.post('api/cart/del', {cartId, productId})
    return data
}

export const updateCart = async (cartId, productId, quantity) => {
    const { data } = await $authHost.post('api/cart/update', {cartId, productId, quantity})
    return data
}
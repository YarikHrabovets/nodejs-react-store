import { $host, $authHost } from './index'

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', {name: type})
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const fetchOneType = async (id) => {
    const { data } = await $host.get(`api/type/${id}`)
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', {name: brand})
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

export const fetchOneBrand = async (id) => {
    const { data } = await $host.get(`api/brand/${id}`)
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (typeId, brandId, page, limit = 5) => {
    const { data } = await $host.get('api/product', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get(`api/product/id/${id}`)
    return data
}

export const fetchLastProduct = async () => {
    const { data } = await $host.get('api/product/last')
    return data
}
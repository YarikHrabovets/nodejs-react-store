import { makeAutoObservable } from 'mobx'

export default class ProductsStore {
    constructor() {
        this._types = []
        this._brands = []
        this._products = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalProducts = 0
        this._limit = 4
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types= types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalProducts(totalProducts) {
        this._totalProducts = totalProducts
    }

    setLimit(limit) {
        this._limit = limit
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalProducts() {
        return this._totalProducts
    }

    get limit() {
        return this._limit
    }
}
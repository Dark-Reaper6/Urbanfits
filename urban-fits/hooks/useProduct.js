import { create } from 'zustand'
import toaster from "@/utils/toast_function";
import axios from "axios";
import getUser_LS from '@/utils/getUserfromLS';

const useProduct = create((set, get) => ({

    products: [],
    productInfo: null,
    productLoading: false,
    totalProducts: 0,
    selectedProducts: [],
    setSelectedProducts: (newArray) => set(() => ({ selectedProducts: newArray })),
    setProductInfo: (info) => set(() => ({ productInfo: info })),

    getProducts: async (page = 1, category_id = null) => {
        set(() => ({
            productLoading: true
        }))
        try {
            if (category_id) {
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/bycategory?id=${category_id}&page=${page}`)
                set(() => (
                    {
                        products: data.products,
                        totalProducts: data.totalProducts
                    }
                ))
            }
            else {
                const { data } = await axios.get(`${process.env.HOST}/api/products/get/many?page=${page}`)
                set(() => (
                    {
                        products: data.products,
                        totalProducts: data.totalProducts
                    }
                ))
            }
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    },

    getOneProduct: async (product_id) => {
        set(() => ({
            productLoading: true
        }))
        try {
            const { data } = await axios.get(`${process.env.HOST}/api/products/get/one?id=${product_id}`)
            set(() => ({
                productLoading: false
            }))
            return data.product
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    },

    createProduct: async (productToCreate) => {
        const user = getUser_LS()
        if (!user) return

        set(() => ({
            productLoading: true
        }))
        try {
            const { data } = await axios.post(`${process.env.HOST}/api/products/createproduct?id=${user._id}`, productToCreate)
            set(() => ({
                productLoading: false
            }))
            return data.product
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    },

    updateProduct: async (id, updatedProduct) => {
        const user = getUser_LS()
        if (!user) return

        set(() => ({
            productLoading: true
        }))
        try {
            const { data } = await axios.put(`${process.env.HOST}/api/products/updateproducts?user_id=${user._id}&id=${id}`, updatedProduct)
            set(() => ({
                productLoading: false,
                productInfo: data.product
            }))
            toaster("success", data.msg)
            return data.product
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    },

    deleteProduct: async (productsToDelete) => {
        const user = getUser_LS()
        if (!user) return

        set(() => ({
            productLoading: true
        }))
        try {
            const { data } = await axios.put(`${process.env.HOST}/api/products/delete?id=${user._id}`, productsToDelete)
            await get().getProducts(1)
            toaster(data.deletedCount < 1 ? "info" : "success", data.msg)
        } catch (error) {
            console.log(error)
            toaster("error", error.response.data.msg)
        }
        return set(() => ({
            productLoading: false
        }))
    }

}))

export default useProduct
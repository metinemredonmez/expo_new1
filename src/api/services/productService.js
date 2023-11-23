// api/services/productService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const getAllProducts = async () => {
    try {
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.getAllProducts
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProduct = async (productId) => {
    try {
        const response = await axios.get(
            `${apiConfig.baseUrl}${endpoints.getProduct}?productId=${productId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.createProduct,
            productData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateProduct = async (productId, productData) => {
    try {
        const response = await axios.put(
            `${apiConfig.baseUrl}${endpoints.updateProduct}?productId=${productId}`,
            productData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(
            `${apiConfig.baseUrl}${endpoints.deleteProduct}?productId=${productId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

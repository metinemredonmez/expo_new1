// api/services/categoryService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const getCategory = async (categoryId) => {
    try {
        const response = await axios.get(
            `${apiConfig.baseUrl}${endpoints.getCategory}?categoryId=${categoryId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllCategories = async () => {
    try {
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.getAllCategories
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createCategory = async (categoryData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.createCategory,
            categoryData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateCategory = async (categoryId, categoryData) => {
    try {
        const response = await axios.put(
            `${apiConfig.baseUrl}${endpoints.updateCategory}?categoryId=${categoryId}`,
            categoryData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const response = await axios.delete(
            `${apiConfig.baseUrl}${endpoints.deleteCategory}?categoryId=${categoryId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

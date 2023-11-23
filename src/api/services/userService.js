// api/services/userService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const createUser = async (userData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.createUser,
            userData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(
            `${apiConfig.baseUrl}${endpoints.updateUser}?userId=${userId}`,
            userData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(
            `${apiConfig.baseUrl}${endpoints.deleteUser}?userId=${userId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const activateUser = async (userId) => {
    try {
        const response = await axios.post(
            `${apiConfig.baseUrl}${endpoints.activateUser}?userId=${userId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deactivateUser = async (userId) => {
    try {
        const response = await axios.post(
            `${apiConfig.baseUrl}${endpoints.deactivateUser}?userId=${userId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const activatePagesProduct = async (userId) => {
    try {
        const response = await axios.post(
            `${apiConfig.baseUrl}${endpoints.activatePagesProduct}?userId=${userId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deactivatePagesProduct = async (userId) => {
    try {
        const response = await axios.post(
            `${apiConfig.baseUrl}${endpoints.deactivatePagesProduct}?userId=${userId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRolesForUser = async (userId) => {
    try {
        const response = await axios.get(
            `${apiConfig.baseUrl}${endpoints.getRolesForUser}?userId=${userId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const changeLanguage = async (languageData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.changeLanguage,
            languageData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const changePassword = async (passwordData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.changePassword,
            passwordData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPassword = async (resetPasswordData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.resetPassword,
            resetPasswordData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUser = async (userId) => {
    try {
        const response = await axios.get(
            `${apiConfig.baseUrl}${endpoints.getUser}?userId=${userId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.getAllUsers
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

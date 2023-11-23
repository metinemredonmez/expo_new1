// api/services/authService.js

import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const isTenantAvailable = async (tenancyName) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.isTenantAvailable,
            { tenancyName: tenancyName }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.register,
            userData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.login,
            { username, password }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserInfo = async () => {
    try {
        // Kullanıcı bilgilerini almak için uygun bir API endpoint'i kullanılmalıdır
        // Bu örnek için, "userInfo" endpoint'i kullanılmıştır, gerçek bir API endpoint'i ile değiştirilmelidir
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.userInfo,
            {
                headers: {
                    Authorization: `Bearer ${YOUR_AUTH_TOKEN}`, // Giriş yapmış bir kullanıcı için token ekleyin
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

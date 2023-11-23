// api/services/tokenAuthService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const authenticate = async (authData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.authenticate,
            authData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

// api/services/sessionService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const getCurrentLoginInformations = async () => {
    try {
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.getCurrentLoginInformations
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

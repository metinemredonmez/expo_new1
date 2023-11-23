// api/services/configurationService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const changeUiTheme = async (themeData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.changeUiTheme,
            themeData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

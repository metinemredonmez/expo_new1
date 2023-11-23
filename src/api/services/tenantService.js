// api/services/tenantService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const createTenant = async (tenantData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.createTenant,
            tenantData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteTenant = async (tenantId) => {
    try {
        const response = await axios.delete(
            `${apiConfig.baseUrl}${endpoints.deleteTenant}?tenantId=${tenantId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTenant = async (tenantId) => {
    try {
        const response = await axios.get(
            `${apiConfig.baseUrl}${endpoints.getTenant}?tenantId=${tenantId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllTenants = async () => {
    try {
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.getAllTenants
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateTenant = async (tenantId, tenantData) => {
    try {
        const response = await axios.put(
            `${apiConfig.baseUrl}${endpoints.updateTenant}?tenantId=${tenantId}`,
            tenantData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

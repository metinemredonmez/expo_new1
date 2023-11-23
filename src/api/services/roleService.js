// api/services/roleService.js
import axios from "axios";
import { apiConfig, endpoints } from "../config";

export const createRole = async (roleData) => {
    try {
        const response = await axios.post(
            apiConfig.baseUrl + endpoints.createRole,
            roleData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRoles = async () => {
    try {
        const response = await axios.get(apiConfig.baseUrl + endpoints.getRoles);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateRole = async (roleId, roleData) => {
    try {
        const response = await axios.put(
            `${apiConfig.baseUrl}${endpoints.updateRole}?roleId=${roleId}`,
            roleData
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteRole = async (roleId) => {
    try {
        const response = await axios.delete(
            `${apiConfig.baseUrl}${endpoints.deleteRole}?roleId=${roleId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllPermissions = async () => {
    try {
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.getAllPermissions
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRoleForEdit = async (roleId) => {
    try {
        const response = await axios.get(
            `${apiConfig.baseUrl}${endpoints.getRoleForEdit}?roleId=${roleId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRole = async (roleId) => {
    try {
        const response = await axios.get(
            `${apiConfig.baseUrl}${endpoints.getRole}?roleId=${roleId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAllRoles = async () => {
    try {
        const response = await axios.get(
            apiConfig.baseUrl + endpoints.getAllRoles
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

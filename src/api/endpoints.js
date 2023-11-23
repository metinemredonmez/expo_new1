// api/endpoints.js
export const endpoints = {
    // Account
    isTenantAvailable: "/api/services/app/Account/IsTenantAvailable",
    register: "/api/services/app/Account/Register",

    // Category
    getCategory: "/api/services/app/Category/Get",
    getAllCategories: "/api/services/app/Category/GetAll",
    createCategory: "/api/services/app/Category/Create",
    updateCategory: "/api/services/app/Category/Update",
    deleteCategory: "/api/services/app/Category/Delete",

    // Configuration
    changeUiTheme: "/api/services/app/Configuration/ChangeUiTheme",

    // Product
    getAllProducts: "/api/services/app/Product/GetAll",
    getProduct: "/api/services/app/Product/Get",
    createProduct: "/api/services/app/Product/Create",
    updateProduct: "/api/services/app/Product/Update",
    deleteProduct: "/api/services/app/Product/Delete",

    // Role
    createRole: "/api/services/app/Role/Create",
    getRoles: "/api/services/app/Role/GetRoles",
    updateRole: "/api/services/app/Role/Update",
    deleteRole: "/api/services/app/Role/Delete",
    getAllPermissions: "/api/services/app/Role/GetAllPermissions",
    getRoleForEdit: "/api/services/app/Role/GetRoleForEdit",
    getRole: "/api/services/app/Role/Get",
    getAllRoles: "/api/services/app/Role/GetAll",

    // Session
    getCurrentLoginInformations: "/api/services/app/Session/GetCurrentLoginInformations",

    // Tenant
    createTenant: "/api/services/app/Tenant/Create",
    deleteTenant: "/api/services/app/Tenant/Delete",
    getTenant: "/api/services/app/Tenant/Get",
    getAllTenants: "/api/services/app/Tenant/GetAll",
    updateTenant: "/api/services/app/Tenant/Update",

    // TokenAuth
    authenticate: "/api/TokenAuth/Authenticate",

    // User
    createUser: "/api/services/app/User/Create",
    updateUser: "/api/services/app/User/Update",
    deleteUser: "/api/services/app/User/Delete",
    activateUser: "/api/services/app/User/Activate",
    deactivateUser: "/api/services/app/User/DeActivate",
    activatePagesProduct: "/api/services/app/User/ActivatePagesProduct",
    deactivatePagesProduct: "/api/services/app/User/DeActivatePagesProduct",
    getRolesForUser: "/api/services/app/User/GetRoles",
    changeLanguage: "/api/services/app/User/ChangeLanguage",
    changePassword: "/api/services/app/User/ChangePassword",
    resetPassword: "/api/services/app/User/ResetPassword",
    getUser: "/api/services/app/User/Get",
    getAllUsers: "/api/services/app/User/GetAll",
};

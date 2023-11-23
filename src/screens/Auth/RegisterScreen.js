// RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { registerUser, isTenantAvailable, login } from "../../api/services/authService";

const RegisterScreen = (navigation) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [tenantName, setTenantName] = useState("");

    const handleRegister = async () => {
        try {
            // Kiracı adı kontrolü
            const isTenantAvailableResult = await isTenantAvailable(tenantName);

            if (isTenantAvailableResult && isTenantAvailableResult.success) {
                // Kiracı adı kullanılabilirse, kullanıcı kaydını gerçekleştir
                const userData = {
                    userName: username,
                    password: password,
                    emailAddress: email,
                    // diğer kullanıcı bilgileri...
                };

                const registerResult = await registerUser(userData);

                if (registerResult.success) {
                    console.log("Register Success:", registerResult);

                    // Kullanıcı kaydı başarılıysa, oturum aç
                    const loginResult = await login(username, password);

                    if (loginResult.success) {
                        console.log("Login Success:", loginResult);
                        // Oturum açıldıktan sonra istediğiniz sayfaya yönlendirme yapabilirsiniz.
                    } else {
                        console.error("Login Error:", loginResult.error);
                    }
                } else {
                    console.error("Register Error:", registerResult.error);
                }
            } else {
                console.log("Tenant is not available!");
            }
        } catch (error) {
            console.error("Registration Error:", error);
        }
    };

    return (
        <View>
            <Text>Register Screen</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Tenant Name"
                value={tenantName}
                onChangeText={(text) => setTenantName(text)}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

export default RegisterScreen;

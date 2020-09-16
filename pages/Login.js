import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as userApi from '../api/users';

function Login() {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });

    const [isClick, setIsClick] = useState(false);

    const LoginAction = async () => {
        setIsClick(true);

        if (userInfo.email && userInfo.password) {
            const users = await userApi.getUsers();
            users.filter(user => {
                return user.email === userInfo.email && user.password === userInfo.password
            })
            if (matchData.length) {
                Alert.alert("성공, 로그인 성공")
            } else {
                Alert.alert("실패, 로그인 실패")
            }
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={require("../assets/logo.png")}
                    style={{ width: 100, height: 100 }}
                />
                <Text style={{ padding: 30 }}>Login please...</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.textbox}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    keyboardType="email-address"
                    onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
                />
                {isClick && userInfo.email == "" ?
                    <Text style={styles.warning}>Email을 입력해주세요.</Text> :
                    null}
                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.textbox}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    keyboardType="email-address"
                    onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
                />
                {isClick && userInfo.password == "" ?
                    <Text style={styles.warning}>Password을 입력해주세요.</Text> :
                    null}
                <TouchableOpacity style={styles.button} onPress={LoginAction}>
                    <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textbox: {
        backgroundColor: "silver",
        color: "white",
        width: 300,
        height: 40,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    text: {
        width: 300,
        fontWeight: "700",
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 16
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: "#1c313a",
        marginVertical: 10,
        borderRadius: 25
    },
    buttontext: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
        marginTop: 10
    },
    warning: {
        color: "red",
        padding: 5
    }
})

export default Login;
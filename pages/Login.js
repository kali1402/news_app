import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Login() {
    return (
        <>
            <View style={styles.container}>
                <Text>Login please...</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Login;
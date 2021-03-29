import { Container } from 'native-base';
import React from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import Login from './Login/Sigin';

const LoginApp = () =>
{
    return (
        <Container>
            <View><Login/></View>
        </Container>
    );
}
export default LoginApp;
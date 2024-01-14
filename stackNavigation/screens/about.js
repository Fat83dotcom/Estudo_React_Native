import * as React from 'react';
import { View, Text, Button } from 'react-native';

function AboutScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>About Screen</Text>
            <Text>Fernando é analista/desenvolvedor</Text>
            <Text>fullstack Python</Text>
            <Text></Text>
            <Button title='Home' onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default AboutScreen;
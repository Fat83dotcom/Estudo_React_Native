import * as React from 'react';
import { View, Text, Button, VirtualizedList, StyleSheet, StatusBar } from 'react-native';

const DATA = ['Python', 'Django', 'PostgreSQL'];

const getItems = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    // id: 1,
    title: `${data[index]}`
});

const getItemsCount = (data) => DATA.length;

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

function HomeScreen({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Text>Fernando desenvolvedor FullStack</Text>
            <VirtualizedList
                data={DATA}
                initialNumToRender={1}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.key}
                getItemCount={getItemsCount}
                getItem={getItems}
            />
            <Text></Text>
            <Button title='About' onPress={() => navigation.navigate('About')} />
            <Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    item: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#00dfff',
        height: 50,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 10,
    },
    title: {
        fontColor: '#000000',
        fontSize: 22,
    },
});

export default HomeScreen;
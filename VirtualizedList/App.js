import React from 'react';
import { View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = ['Gudulinha', 'Manteguinha', 'Guduxinho', 'Pepiscoide', 'Bumbelo', 'Tiguim'];

const getItems = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  // id: 1,
  title: `Item ${index + 1} -> ${data[index]}`
});

const getItemsCount = (data) => DATA.length;

const Item = ({ title }) => (
  <View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  return (
  <View style={styles.container}>
    <VirtualizedList
    data={DATA}
    initialNumToRender={1}
    renderItem={({ item }) => <Item title={item.title} />}
    keyExtractor={item => item.key}
    getItemCount={getItemsCount}
    getItem={getItems}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#00dfff',
    height: 100,
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

export default App;

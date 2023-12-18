import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View, ScrollView, Image
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Manteguinha
        </Text>
      </View>
      <ScrollView >
        <View >
          <Text style={styles.text_longer}>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse
            cillum dolore eu   fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse
            cillum dolore eu   fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse
            cillum dolore eu   fugiat nulla
            pariatur. 
          </Text>
        </View>
      </ScrollView>
      
      <Text>
        <Image />
      </Text>
      <View>
        <Text>Hello World!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_longer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    color: '#fff',
  },

});

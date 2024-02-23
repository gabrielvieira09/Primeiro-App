import { StyleSheet, View,} from 'react-native';
import Header from "./src/components/Header";
import Storys from "./src/components/Storys";

export default function App() {
  return (
    <View 
      style={{
        marginVertical: 32
      }}
    >
      <Header />
      <Storys />
    </View>
  );
}

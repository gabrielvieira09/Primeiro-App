import { StyleSheet, View,} from 'react-native';
import Header from "../components/Header";
import Storys from "../components/Storys";

export default function Home() {
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

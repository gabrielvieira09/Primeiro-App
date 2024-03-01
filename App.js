import { StyleSheet, View } from 'react-native';
import Faustao from "./src/assets/faustao.jpg";
import InfoProfile from './src/components/InfoProfile';
import MyPosts from './src/components/MyPosts';

export default function App() {
  return (
    <View>
      <InfoProfile
        image={Faustao}
        publi={950}
        followers={5000}
        following={2}
      />
      <MyPosts />
    </View>
  );
}

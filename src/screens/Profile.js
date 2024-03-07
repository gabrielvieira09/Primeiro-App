import { StyleSheet, View } from 'react-native';
import Faustao from "../assets/faustao.jpg";
import InfoProfile from '../components/InfoProfile';
import MyPosts from '../components/MyPosts';

export default function Profile() {
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

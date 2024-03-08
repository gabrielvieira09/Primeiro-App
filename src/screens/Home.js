import { ScrollView, StyleSheet, View,} from 'react-native';
import Header from "../components/Header";
import Storys from "../components/Storys";
import Post from "../components/Post/index.js"
import cellbit from "../assets/cellbit.jpg"
import cellbit_post from "../assets/Posts/cellbit_post.jpg"

export default function Home() {
  return (
    <ScrollView 
      style={{
        marginVertical: 32
      }}
    >
      <Header />
      <Storys />
      <Post 
        profileImage={cellbit}
        postImage={cellbit_post}
        profileName='Cellbit da Silva'
        description='Passe o céu e passe a Terra, o RPG nuncá morrerá...'
      />
      <Post 
        profileImage={cellbit}
        postImage={cellbit_post}
        profileName='Cellbit da Silva'
        description='Passe o céu e passe a Terra, o RPG nuncá morrerá...'
      />
      <Post 
        profileImage={cellbit}
        postImage={cellbit_post}
        profileName='Cellbit da Silva'
        description='Passe o céu e passe a Terra, o RPG nuncá morrerá...'
      />
    </ScrollView>
  );
}

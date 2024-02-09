import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import logo from './assets/Logo.png';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
      <Image style={{width:150, height:50}} source={logo} />

      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity >
        <Feather style={{marginRight: 25}} name="heart" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 style={{}} name="facebook-messenger" size={24} color="black" />
      </TouchableOpacity>
      </View>
      </View>
      <ScrollView 
        contentContainerStyle={{gap:8}}
        horizontal
        style={{flexDirection:"row", marginHorizontal:5}}
        showsHorizontalScrollIndicator={false}
      >
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVhWMq2JqgwAOEtO2mZKLtf1LvXQTU4OJk1L9ZHUBR3xB3hYDDrTO4lYAZ3susU41DYE&usqp=CAU" }} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bNuIftxgdPb71YXJwFFN4aN2riIVlR7P5A&usqp=CAU"}} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://pbs.twimg.com/media/Dw_nA5HWwAEyjLs.jpg"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O6IELzGx8vgr3GMMbdQZPjEmr15HiLf7bkpzGuRSNVyBmtHSmGAnz7VGbdcenD29Kf8&usqp=CAU"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFZwvxuqa8PxdPUHulkukEhP9naJR4W1MgGpVtwo2-99jOVhrckgsEd-PQW74BZQ6CIg&usqp=CAU"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-K4C3ffyTyRx8ZlzhP8EP7eFHNgqYL9V8r0Oluw18gNCTE9rVh_finlsK66V8HElhjQ&usqp=CAU"}} />
          </TouchableOpacity>          
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 17.5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
});

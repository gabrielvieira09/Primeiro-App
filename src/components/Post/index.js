import { StyleSheet, View, Image, Text} from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

export default function Post({
    profileImage,
    postImage,
    profileName,
    description,
}) {
  return (
    <View style={styles.container}>
        <View style={styles.post}>
            <View style={styles.primeiro}>
                <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={profileImage} />
                <Text style={{flex:1, marginLeft:15, fontSize:18}}>{profileName}</Text>
                <Entypo name='dots-three-vertical' size={25} color="black"/>
            </View>
            <Image style={{width:'95%', marginVertical:10}} source={postImage} />
            <View style={styles.segundo}>
                <View style={{flexDirection:'row', flex:1}}>
                    <AntDesign name='hearto' size={25} color="black"/>
                    <Ionicons name='chatbubble-outline' size={25} color="black"/>
                    <FontAwesome name='paper-plane-o' size={25} color="black"/>
                </View>
                <View>
                    <Feather name='bookmark' size={25} color="black"/>
                </View>
            </View>
            <Text style={{fontSize:15, width:'95%'}}>{description}</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        alignItems:'center'
    },
    post: {
        width:'95%',
        backgroundColor:'white',
        marginVertical:25,
        alignItems:'center'
    },
    primeiro: {
        width:'95%',
        flexDirection:'row',
        marginTop:10,
        marginHorizontal:5,
        justifyContent:'space-between',
        alignItems:'center'
    },
    segundo: {
        flexDirection:'row',
        width:'95%'
    }
})

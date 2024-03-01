import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { View, Image, StyleSheet, TouchableOpacity} from "react-native";
import Faustao from '../../assets/faustao_feed.jpg'

export default function MyPost(){
    return(
        <View style={styles.container}>
            <View style={styles.icones}>
                <MaterialIcons name="grid-on" size={35} color="black" />
                <MaterialCommunityIcons name="movie-open-play-outline" size={35} color="gray" />
                <MaterialCommunityIcons name="account-outline" size={35} color="gray" />
            </View>
            <View style={styles.imagens}>
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
                <Image style={{ width: "33.3%", height: 200, borderWidth:1, borderColor: "#aaa"}} source={Faustao} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icones: {
        flexDirection:'row',
        marginTop:15,
        marginHorizontal:25,
        justifyContent:'space-around',
        marginBottom:15
    },
    imagens: {
        flexDirection:'row',
        flexWrap:'wrap',
        padding:2
    }
})
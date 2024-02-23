import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import logo from '../../assets/Logo.png';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
    return (

        <View style={styles.container}>
            <Image style={{ width: 150, height: 50 }} source={logo} />

            <View style={styles.icons}>
                <TouchableOpacity >
                    <Feather style={{ marginRight: 25 }} name="heart" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 style={{}} name="facebook-messenger" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )

  
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 17.5,
        marginBottom: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    icons: {
        flexDirection:'row',
    },  
});
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';

export default function InfoProfile({
    image,
    publi,
    followers,
    following,
}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={image} />
            </TouchableOpacity>
            <View style={styles.views}>
                <Text style={{fontWeight:'bold'}}>{publi}</Text>
                <Text>Publicações</Text>
            </View>
            <View style={styles.views}>
                <Text style={{fontWeight:'bold'}}>{followers}</Text>
                <Text>Seguidores</Text>
            </View>
            <View style={styles.views}>
                <Text style={{fontWeight:'bold'}}>{following}</Text>
                <Text>Seguindo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 40,
        marginLeft: 10,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    views: {
        alignItems:'center',
        marginHorizontal:15
    }
})
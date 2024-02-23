import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import faustao from "../../assets/faustao.jpg";
import ronaldinho from "../../assets/ronaldinho.jpg";
import descabelada from "../../assets/descabelada.jpg";
import cellbit from "../../assets/cellbit.jpg";
import vindiesel from "../../assets/vindiesel.jpg";

export default function Storys() {
    return (
        <ScrollView 
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
          <TouchableOpacity>
        <Image style={styles.story} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVhWMq2JqgwAOEtO2mZKLtf1LvXQTU4OJk1L9ZHUBR3xB3hYDDrTO4lYAZ3susU41DYE&usqp=CAU" }} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image style={styles.story} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8bNuIftxgdPb71YXJwFFN4aN2riIVlR7P5A&usqp=CAU"}} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Image style={styles.story} source={{uri:"https://pbs.twimg.com/media/Dw_nA5HWwAEyjLs.jpg"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={styles.story} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4O6IELzGx8vgr3GMMbdQZPjEmr15HiLf7bkpzGuRSNVyBmtHSmGAnz7VGbdcenD29Kf8&usqp=CAU"}} />
          </TouchableOpacity>          
          <TouchableOpacity>
        <Image style={styles.story} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFZwvxuqa8PxdPUHulkukEhP9naJR4W1MgGpVtwo2-99jOVhrckgsEd-PQW74BZQ6CIg&usqp=CAU"}} />
          </TouchableOpacity>                 
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap:8, 
        flexDirection:"row", 
        marginHorizontal:5},

    story:{width:100, height:100, borderRadius:50, borderWidth:3, borderColor: "black"}
}) 
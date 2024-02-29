import { StyleSheet, Image, ScrollView } from 'react-native';
import Story from "../Story";
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
        <Story image={faustao} />
        <Story image={ronaldinho} />
        <Story image={descabelada} />
        <Story image={cellbit} />
        <Story image={vindiesel} />               
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        gap:8, 
        flexDirection:"row", 
        marginHorizontal:5},
}) 
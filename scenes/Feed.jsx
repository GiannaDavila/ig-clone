import { ScrollView,  } from "react-native";
import styles from "../styles.js";
import Post from "../components/post";
import photolist from "../photolist.js";

export default function Feed({ navigation }){
    return (
        <ScrollView style={styles.feed}>
            {photolist.map(photo => (
                <Post post={photo} navigation={navigation} key={photo.id}/>
            ))}
        </ScrollView>
    )
}
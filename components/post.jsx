import { Card, Text, Avatar, Icon } from "@rneui/base";
import { View, ActivityIndicator, Image } from 'react-native'
import styles from "../styles.js";

export default function Post({ post }){
    return(
        <View style={styles.card}>
            <View style={styles.cardHeader}>
            <Avatar source={{ uri: post.profilePhoto }} rounded />
            <Text style={styles.userName}>{post.username}</Text>
            </View>
            <Image source={{ uri: post.photoURL}} style={styles.image}
            PlaceholderContent={<ActivityIndicator/>}/>
            <Text style={styles.description}>{post.description}</Text>
        </View>
    )
}
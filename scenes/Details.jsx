import Post from '../components/post'
import styles from '../styles'
import photolist from '../photolist'
import { View } from 'react-native'

export default function Details({ route: { params: { itemId } }, navigation }) {
    const post = photolist.find(photo => photo.id === itemId)
    return(
        <View style={styles.feed}>
        <Post post={post} navigation={navigation}/>
        </View>
    )
}
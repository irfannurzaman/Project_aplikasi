import React from 'react'
import { View , StyleSheet} from 'react-native'


const drawHorizontal = ({drawColor, drawWiith, drawTop }) => {
    const type = {drawColor, drawWiith, drawTop}
    return <View style={styles.draw(type)}/>
}

export default drawHorizontal


const styles = StyleSheet.create({
    draw :(type) => ({
            borderBottomColor: type.drawColor, 
            borderBottomWidth: parseInt(type.drawWiith), 
            marginTop: parseInt(type.drawTop)
        }) 
})
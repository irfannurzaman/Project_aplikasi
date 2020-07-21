import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../../components/atoms'

const Description = ({itemCategory}) => {
    return(
    <View>
        <View>
          <Text style={styles.text}>{(itemCategory.category.length < 70 ? 
            itemCategory.category : `${itemCategory.category.substr(0, 70)}...` )}</Text>
        </View>
        <View>
          <Text style={styles.text}>Rp : 12.000</Text>
          <Text style={styles.text}>Rp : 12.000</Text>
          <Text style={styles.text}>Rp : 12.000</Text>
          <Text style={styles.text}>Rp : 12.000</Text>
          <Text style={styles.text}>Rp : 12.000</Text>
        </View>
        {/* <View style={styles.onRow(itemCategory)}>
          <View style={styles.action}>
            <Button title="Beli"/>
          </View>
          <View style={styles.keranjang}>
            <Button title="Tambah Keranjang"/>
          </View>
          <View style={styles.message}>
            <Button title="mes"/>
          </View>
        </View> */}
    </View>
    ) 
}
export default Description


const styles = StyleSheet.create({
    text: {
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    onRow: (itemCategory) => ({flex: 1, flexDirection: 'row', marginTop: itemCategory.category.length < 40 ? 50 : 20 }),
    action: {
        marginLeft: 10,
        width: 110,
        height: 80
      },
    keranjang: {
      marginLeft: 10,
      width: 210,
      height: 80
    },
    message: {
      marginLeft: 10,
      width: 50,
      height: 80
    }
})
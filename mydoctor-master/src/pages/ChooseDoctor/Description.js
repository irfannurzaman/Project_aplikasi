import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrawHorizontal } from '../../components/atoms'

const Description = ({itemCategory}) => {
    return(
    <View>
        <View>
          <Text style={styles.text}>{(itemCategory.category.length < 70 ? 
            itemCategory.category : `${itemCategory.category.substr(0, 70)}...` )}</Text>
        </View>
        <View>
          <Text style={styles.price}>Rp : 12.000</Text>
          <DrawHorizontal 
          drawColor = '#d0d9ce'
          drawWiith = '1'
          drawTop = '10'
          />
          <Text style={styles.text}>Deskripsi Produk</Text>
          <Text style={{ marginHorizontal: 20, marginVertical: 10, fontSize: 15}}>
            Garansi Produk 100% CUKUP KIRIM FOTO Karena kami toko sangat konsisten dalam kualitas
            jangan ketinggalan untuk membeli produk kami. kami sangat terpercaya
            Garansi Produk 100% CUKUP KIRIM FOTO Karena kami toko sangat konsisten dalam kualitas
            jangan ketinggalan untuk membeli produk kami. kami sangat terpercaya
            Garansi Produk 100% CUKUP KIRIM FOTO Karena kami toko sangat konsisten dalam kualitas
            jangan ketinggalan untuk membeli produk kami. kami sangat terpercaya
          </Text>
          <View style={{height: 17, backgroundColor: '#F2F2F4'}}></View>
        </View>
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
    price: {
      marginHorizontal: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red', 
      marginTop: 10
    },
    Discripsi: {
     marginTop: 3,
     color: 'red',
     fontSize: 20,
     fontWeight: 'bold'
    }
})
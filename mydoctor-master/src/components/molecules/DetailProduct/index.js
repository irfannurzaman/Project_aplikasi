import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native'
import { DrawHorizontal, Button } from '../../atoms'

const DetailProduct = ({itemCategory, titleButton, navigation}) => {
    return (
        <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
            <View style={{width: '100%',flexDirection: 'row'}}>
                <TouchableOpacity style={{marginHorizontal: 10}}>
                    <Text style={{fontSize: 20}}>X</Text>
                </TouchableOpacity>
                <View style={{marginLeft: 110}}>
                      <Text style={{fontSize: 20}}>Detail Product</Text>
                </View>
            </View>
            <View style={{borderWidth: 0.2, borderColor: '#838784', width: '100%'}}></View>
            <View style={{height:150, width: '100%', flexDirection: 'row', elevation: 5}}>
                <View style={{flex:4, marginHorizontal: 10, marginVertical: 10}}>
                  <Image style={{width: '100%', height:'100%'}} source={itemCategory.image}></Image>
                </View>
                <View style={{flex: 8}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>{itemCategory.category}</Text>
                </View>
            </View>
            <DrawHorizontal 
            drawColor = '#d0d9ce'
            drawWiith = '1'
            drawTop = '0'
            />
            {/* <View style={{height: 17, backgroundColor: '#F2F2F4'}}></View> */}
            <View style={{height:70, width: '100%', flexDirection: 'row', justifyContent:'space-between'}}>
              <View style={{height: '100%', width: 100, justifyContent: 'center'}}>
                <Text style={{fontSize: 15, color:'#807e78', left: 10, bottom: 10}}>Jumlah</Text>
              </View>
              <View style={{height: '100%', width: 200, flexDirection: 'row', justifyContent: 'center'}}>
                <View style={{
                  marginTop: 20, 
                  height: 30, 
                  width: 30, 
                  borderRadius: 30, 
                  borderWidth: 0.5, 
                  borderColor: '#838784'}}></View>
                <View 
                  style={{
                  marginTop: 20, 
                  height: 30, 
                  width: 60, 
                  borderBottomColor: '#838784', 
                  borderBottomWidth:1,
                  justifyContent: 'center',
                  alignItems: 'center'
                  }}>
                    <Text style={{fontSize: 15}}>20</Text>
                </View>
                <View style={{marginTop: 20,
                  height: 30, 
                  width: 30, 
                  borderRadius: 30, 
                  borderWidth: 0.5, 
                  borderColor: '#838784'}}></View>
              </View>
            </View>

            <View style={{borderWidth: 0.2, borderColor: '#838784', width: '100%'}}></View>

                <View style={{ borderBottomColor:'#838784' , height: 70, borderBottomWidth: 0.5, width: '100%' }}>
                  <Text style={{marginTop: 10, marginLeft: 10, fontSize: 15, color: '#807e78'}}>Pesan</Text>
                  <TextInput style={{marginLeft: 10}}></TextInput>
                </View>

            <View style={styles.row}>
                <View style={{marginHorizontal: 20, marginTop: 5}}>
                  <Text style={styles.text1}>Total Harga</Text>
                  <Text style={styles.text1}>Rp: 12.000</Text>
                </View>
                <View style={styles.keranjang}>
                    <View style={styles.yes}>
                        <Button title={titleButton}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DetailProduct

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginLeft: 10,
        marginTop: -10
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        bottom: 0,
        position: 'absolute',
        borderTopWidth: 0.2,
        borderTopColor: '#838784'
      
    },
    keranjang: {
        flex: 1,
        alignItems: 'flex-end',
        height: 90,
    },
    yes: {
        marginHorizontal: 20,
        width: 180,
        height: 80,
        marginTop: 10
    },
    text1: {
      fontSize: 15,
      color: '#838784',
      marginTop: 5
    }
})


      // <View>
        {/* <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity >
            <Text style={{fontSize: 20, marginRight: 110, marginLeft: 20}}>X</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, marginLeft: 140}}>Detail Product</Text>
        <View style={{marginTop: 5}}>
            <DrawHorizontal 
            drawColor = '#d0d9ce'
            drawWiith = '1'
            drawTop = '10'
            />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}> 
          <Image style={{
          height: 100, 
          width: 100, 
          marginTop: 10, 
          marginLeft: 10}} 
          source={itemCategory.image}/>
        </View>
          <Text style={{fontSize: 15, marginLeft: 130, fontWeight: 'bold', marginTop: 10}}>
          {(itemCategory.category.length < 70 ? 
          itemCategory.category : `${itemCategory.category.substr(0, 70)}...` )}
          </Text>
          <View style={{height: 20, backgroundColor: '#F2F2F4', marginTop: 80}}></View>
          <Text style={{marginTop: 10, marginLeft: 10}}>Jumlah</Text>
          <View style={{flex: 1, alignItems: 'flex-end', marginHorizontal: 30}}> 
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{
                borderRadius: 50, 
                height: 30, 
                width: 30, 
                borderStyle: 'solid', 
                borderColor: 'red',
                backgroundColor: 'white',
                borderWidth: 1}}>
                  <Text style={styles.text}>-</Text>
              </View>
              <View style={{width: 40, height: 30, borderBottomWidth: 1, borderBottomColor: 'red'}}></View>
              <View style={{
                borderRadius: 50, 
                height: 30, 
                width: 30, 
                borderStyle: 'solid', 
                borderColor: 'red',
                backgroundColor: 'white',
                borderWidth: 1}}>
                <Text style={styles.text}>+</Text>
              </View>
            </View>
            </View>
            <View style={{marginTop: 30}}>
              <DrawHorizontal 
              drawColor = '#d0d9ce'
              drawWiith = '1'
              drawTop = '10'
              />
            </View>
            <Text style={{marginTop: 10, marginLeft:10}}>Catatan Untuk Penjual</Text>
            <View style={{marginTop: 30}}>
              <DrawHorizontal 
              drawColor = '#d0d9ce'
              drawWiith = '1'
              drawTop = '10'
              /> */}
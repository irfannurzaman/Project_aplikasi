// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {Button} from '../../components';
// import {IcMaps, IconMessage_icon} from '../../assets';

// const Description = ({itemCategory, navigation}) => {
//   const data = [
//     {
//       image: IcMaps,
//     },
//     {
//       image: IcMaps,
//     },
//     {
//       image: IcMaps,
//     },
//     {
//       image: IcMaps,
//     },
//   ];

//   return (
//     <View>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           marginTop: 20,
//         }}>
//         <Text style={styles.text}>
//           {itemCategory.category.length < 70
//             ? itemCategory.category
//             : `${itemCategory.category.substr(0, 70)}...`}
//         </Text>
//         <Text style={styles.price}>Rp : 12.000</Text>
//       </View>
//       <View>
//         <Text style={{marginHorizontal: 20, marginVertical: 10, fontSize: 15}}>
//           Rasa Kopi yang sangat terasa
//         </Text>
//       </View>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           marginHorizontal: 20,
//           marginTop: 10,
//           height: 60,
//         }}>
//         <View
//           style={{
//             height: 100,
//             width: 'auto',
//             flexDirection: 'row',
//           }}>
//           <View style={{width: 50}}>
//             <Button />
//           </View>
//           <View
//             style={{
//               marginHorizontal: 20,
//               justifyContent: 'center',
//               height: 45,
//             }}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}> 2 </Text>
//           </View>
//           <View style={{width: 50}}>
//             <Button />
//           </View>
//         </View>
//         <View>
//           <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 10}}>
//             Rp: 24.000
//           </Text>
//         </View>
//       </View>
//       <View
//         style={{
//           width: 'auto',
//           height: 50,
//           marginHorizontal: 20,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}>
//         {data.map(items => {
//           return (
//             <View style={styles.select}>
//               <Image style={{width: 50, height: 50}} source={items.image} />
//             </View>
//           );
//         })}
//       </View>
//       <View
//         style={{
//           height: 70,
//           width: 'auto',
//           marginTop: 20,
//           justifyContent: 'space-between',
//           marginHorizontal: 20,
//           flexDirection: 'row',
//         }}>
//         <TouchableOpacity
//           style={{
//             height: 47,
//             width: 100,
//             borderWidth: 0.5,
//             borderRadius: 50,
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//           onPress={() => navigation.navigate('Chatting')}>
//           <Image
//             style={{height: 30, width: 30, marginTop: 5}}
//             source={IconMessage_icon}
//           />
//         </TouchableOpacity>
//         <View
//           style={{
//             backgroundColor: '#0facb8',
//             height: 45,
//             width: 200,
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}
//         >
//           <Text style={{color: 'white', fontSize: 25}}>Beli</Text>
//         </View>
//       </View>
//     </View>
//   );
// };
// export default Description;

// const styles = StyleSheet.create({
//   text: {
//     marginHorizontal: 20,
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   price: {
//     marginHorizontal: 20,
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#0facb8',
//   },
//   Discripsi: {
//     marginTop: 3,
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   select: {
//     height: '100%',
//     width: 70,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#bfbaba',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

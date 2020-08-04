import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import { DetailProduct } from '../../molecules'


const ButtonSheet = ({refRBSheet, itemCategory, titleButton}) => {
    return(
        <View>
            <RBSheet
                  ref={refRBSheet}
                  closeOnDragDown={true}
                  closeOnPressMask={false}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent",
                    },
                    draggableIcon: {
                      backgroundColor: "#bebec2"
                    },
                    container: {
                      height: 350,
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25
                    }
                  }}
                >
                <DetailProduct itemCategory={itemCategory} titleButton={titleButton}/>
            </RBSheet>
        </View>
    )
}

export default ButtonSheet
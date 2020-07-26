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
                      backgroundColor: "#000"
                    },
                    container: {
                      height: 600,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20
                    }
                  }}
                >
                <DetailProduct itemCategory={itemCategory} titleButton={titleButton}/>
            </RBSheet>
        </View>
    )
}

export default ButtonSheet
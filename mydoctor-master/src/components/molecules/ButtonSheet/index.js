import React from 'react'
import { View, Text } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";


const ButtonSheet = ({refRBSheet}) => {
    return(
        <View>
             <RBSheet
                  ref={refRBSheet}
                  closeOnDragDown={true}
                  closeOnPressMask={false}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent"
                    },
                    draggableIcon: {
                      backgroundColor: "#000"
                    }
                  }}
                >
                  <View>
                    <Text>TES</Text>
                  </View>
            </RBSheet>
        </View>
    )
}

export default ButtonSheet
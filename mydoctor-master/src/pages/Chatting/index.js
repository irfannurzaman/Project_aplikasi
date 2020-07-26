import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, ChatItem, InputChat } from '../../components'
import { fonts, colors, getData, showError, getChatTime, setDateChat } from '../../utils'
import { Fire } from '../../config'

const Chatting = ({navigation, route}) => {
    // const dataDoctor = route.params
    const [chatContent, setChatContent] = useState('')
    const [user, setUser] = useState({})
    const [chatData, setChatData] = useState([])

    useEffect(() => {
    //     getDataUserFromLocal()
    //     const chatID = `${user.uid}_${dataDoctor.data.uid}`
    //     const urlFirebase = `chatting/${chatID}/allChat/`
    //     Fire.database().ref(urlFirebase).on('value', (snapshot) => {
    //         if (snapshot.val()) {
    //             const dataSnapshot = snapshot.val()
    //             const allDataChat = []
    //             Object.keys(dataSnapshot).map(key => {
    //                 const dataChat = dataSnapshot[key]
    //                 const newDataChat = []
    //                 Object.keys(dataChat).map(itemChat => {
    //                     newDataChat.push({
    //                         id: itemChat,
    //                         data: dataChat[itemChat]
    //                     })
    //                 })
    //                 allDataChat.push({
    //                     id: key,
    //                     data: newDataChat
    //                 })
    //             })
    //             setChatData(allDataChat)
    //         }
    //     })
    }, [])

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res)
        })
    }

    const chatSend = () => {
        const today = new Date()
        const data = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent
        }
        // const chatID = `${user.uid}_${dataDoctor.data.uid}`
        const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`
        const urlMessageUser = `messages/${user.uid}/${chatID}`
        // const urlMessageDoctor = `messages/${dataDoctor.data.uid}/${chatID}`
        const dataHistoryChatForUser = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            // uidPartner: dataDoctor.data.uid,
        }
        const dataHistoryChatForDoctor = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: user.uid,
        }

        Fire.database()
            .ref(urlFirebase)
            .push(data)
            .then(() => {
                setChatContent('')
                Fire.database().ref(urlMessageUser).set(dataHistoryChatForUser)
                Fire.database().ref(urlMessageDoctor).set(dataHistoryChatForDoctor)
            }).catch(err => {
                showError(err.message)
            })
    }

    return (
        <View style={styles.page}>
            <Header type="dark-profile" navigation={navigation}/>
            <View style={styles.content}>
                <ScrollView 
                      showsVerticalScrollIndicator={false}
                      ref={scroll => {
                        this.scroll = scroll;
                      }}
                      onContentSizeChange={() => this.scroll.scrollToEnd()}>
                    {chatData.map(chat => {
                        return (
                            <View key={chat.id}>
                                <Text style={styles.chatDate}>{chat.id}</Text>
                                {chat.data.map(itemChat => {
                                    const isMe = itemChat.data.sendBy === user.uid
                                    // return <ChatItem key={itemChat.id} isMe={isMe} text={itemChat.data.chatContent} date={itemChat.data.chatTime} photo={!isMe && {uri: dataDoctor.data.photo}} />
                                })}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <InputChat value={chatContent} onChangeText={value => setChatContent(value)} onPress={chatSend} />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    },
    page:{
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        flex: 1
    }
})

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';
import {List, TabBar} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {DummyDoctor3, DummyDoctor1, DummyDoctor2} from '../../assets';
import {Fire} from '../../config';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);
  const leftValue = useState(new Animated.Value(0))[0]

  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async snapshot => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];
        const promises = await Object.keys(oldData).map(async key => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {historyChat.map(chat => {
            const dataDoctor = {
              id: chat.detailDoctor.uid,
              data: chat.detailDoctor,
            };
            return (
              <List
                key={chat.id}
                profile={{uri: chat.detailDoctor.photo}}
                // name={chat.detailDoctor.fullName}
                desc={chat.lastContentChat}
                onPress={() => navigation.navigate('Chatting', dataDoctor)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
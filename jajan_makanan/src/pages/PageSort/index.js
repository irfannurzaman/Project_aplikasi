import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {SearchIcon, ButtonBack, RatedDoctor} from '../../components';
import {ILkopi, Ceker, Seblak, Bakso, PecelLele} from '../../assets';

const PageSort = ({navigation}) => {
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  useEffect(() => {
    getCategoryDoctor();
  }, [navigation]);
  const getCategoryDoctor = async () => {
    const data = [
      {
        id: 1,
        category: 'Kopi Dingin',
        price: '15.000',
        image: ILkopi,
        alamat: 'Desa Kebanggan',
        kec: 'Moga',
        distance: '10KM',
        discription: 'kopi dengan rasa yang nikmat',
      },
      {
        id: 2,
        category: 'Ceker Setan',
        price: '10.000',
        image: Ceker,
        alamat: 'Desa Gendoang',
        kec: 'Moga',
        distance: '4KM',
        discription: 'Pedas yang menggila',
      },
      {
        id: 3,
        category: 'Seblak Ceker',
        price: '9.000',
        image: Seblak,
        alamat: 'Randudongkal',
        kec: 'Randudongkal',
        distance: '10KM',
        discription: 'Pedas yang menggila',
      },
      {
        id: 4,
        category: 'Bakso Lobster',
        price: '50.000',
        image: Bakso,
        alamat: 'Sima',
        kec: 'Moga',
        distance: '1KM',
        discription: 'Rasa Yang nikmat',
      },
      {
        id: 5,
        category: 'Pecel Lele',
        price: '20.000',
        image: PecelLele,
        alamat: 'MOga',
        kec: 'Moga',
        distance: '6KM',
        discription: 'Lele segar dg varian sambel',
      },
    ];
    setCategoryDoctor(data);
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 100,
          width: '100%',
          flexDirection: 'row',
        }}>
        <View style={{width: 60}}>
          <ButtonBack
            type="icon-only"
            icon="back-dark"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{height: 75, width: 250, marginLeft: -10}}>
          <SearchIcon auto={true} sort={'sort'} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.wrapperSection1}>
          {categoryDoctor.map(item => {
            return (
              <RatedDoctor
                item={item}
                onPress={() => navigation.navigate('ItemsProduct', item)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PageSort;

const styles = StyleSheet.create({});

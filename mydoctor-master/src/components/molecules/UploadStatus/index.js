import React, {useState} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {Camera} from '../../../assets';
import ImagePicker from 'react-native-image-picker'

const UploadStatus = ({}) => {
  const [photo, setPhoto] = useState('');
  const [photoForDB, setPhotoForDB] = useState('');
  const getImage = () => {
    ImagePicker.launchImageLibrary(
    //   {quality: 0.5, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showError('oops, sepertinya anda tidak memilih foto nya?');
        } else {
          const source = {uri: response.uri};
          setPhoto(source);
          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
        }
      },
    );
  };

  return (
    <TouchableOpacity
      onPress={getImage}
      style={{
        marginTop: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{height: 40, width: 40}}
        source={Camera}
      />
    </TouchableOpacity>
  );
};

export default UploadStatus;

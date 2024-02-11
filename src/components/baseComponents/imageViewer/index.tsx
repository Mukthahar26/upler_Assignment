import React, {useState} from 'react';
import {View} from 'react-native';

import {ImageIcon} from '../../../utilities/iconPaths';
import {isFieldEmpty} from '../../../utilities/utils';
import styles from './styles';
import Loader from '../loader';
import FastImage, {ImageStyle} from 'react-native-fast-image';
import {flightImagesList} from '../../../constants/constants';

type Props = {
  uri: string;
  style?: ImageStyle;
};

const ImageViewer = ({uri, style}: Props) => {
  const [loading, setLoading] = useState(true);

  const onLoad = () => setLoading(false);

  return !isFieldEmpty(uri) ? (
    <>
      {loading && <Loader />}
      <FastImage
        style={[styles.thumbnail, style] as ImageStyle}
        onLoad={onLoad}
        source={{
          uri: uri,
          priority: FastImage.priority.normal,
        }}
      />
    </>
  ) : (
    <View style={styles.imageIcon}>
      <ImageIcon />
    </View>
  );
};

export default ImageViewer;

import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

const Splas_Loading = () => {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require('../../assets/splasscreen_json/loading.json')}
        autoPlay
        loop
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Splas_Loading;

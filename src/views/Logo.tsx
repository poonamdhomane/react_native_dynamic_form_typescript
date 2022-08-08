import React from 'react';
import {Image} from 'react-native';

const Logo = ({height = 50, width = 250}: {height?: number; width: number}) => {
  return (
    <Image
      source={require('../../assets/logo.png')}
      width={width}
      height={height}
      style={{width: width, height: height}}
    />
  );
};

export default Logo;

import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import EIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import F5Icon from 'react-native-vector-icons/FontAwesome5';

MCIcon.loadFont();
MIcon.loadFont();
EIcon.loadFont();
IIcon.loadFont();
FIcon.loadFont();
// F5Icon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

export const MaterialIcon = ({size, name, color}: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} />
);

export const EntypoIcon = ({size, name, color}: IconProps) => (
  <EIcon name={name} size={IconSizes[size]} color={color} />
);

export const IonIcon = ({size, name, color}: IconProps) => (
  <IIcon name={name} size={IconSizes[size]} color={color} />
);

export const FontAwesomeIcon = ({size, name, color}: IconProps) => (
  <FIcon name={name} size={IconSizes[size]} color={color} />
);

// export const FontAwesome5Icon = ({size, name, color}: IconProps) => (
//   <F5Icon name={name} size={IconSizes[size]} color={color} />
// );

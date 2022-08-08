import {
  ColorTheme,
  SpacingTheme,
  Theme,
} from '../../components/theme/Theme.interface';
import {AnimationTheme, FontTheme} from '../theme';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  // primary: '#03a9f4',
  // onPrimary: '#fff',
  // primaryDark: '#0288d1',
  // surface: '#fff',
  // onSurface: '#000',
  // background: '#dedede',
  surface: '#D79B03',
  primary: '#042729',
  primary2: '#02868E',
  background: '#f5f5f5',
  backgroundOverlay: '#fff',
  textColor: '#000000',
  placeholder: '#3D3D3D3D',
  accent: '#dedede',
};

const DEFAULT_LIGHT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};

const DEFAULT_LIGHT_FONT_THEME: FontTheme = {
  fontSize: 14,
  font: 'Nunito-Regular',
};

const DEFAULT_LIGHT_ANIMATION_THEME: AnimationTheme = {
  scale: 1.0,
};
export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  colors: DEFAULT_LIGHT_COLOR_THEME,
  spacing: DEFAULT_LIGHT_SPACING_THEME,
  fonts: DEFAULT_LIGHT_FONT_THEME,
  animation: DEFAULT_LIGHT_ANIMATION_THEME,
};

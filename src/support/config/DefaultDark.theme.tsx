import {
  ColorTheme,
  SpacingTheme,
  Theme,
  FontTheme,
  AnimationTheme,
} from '../theme/index';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
  surface: '#FBC02D',
  primary: '#242222',
  background: '#000000',
  textColor: '#fff',
  accent: '#757575',
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
};
const DEFAULT_DARK_FONT_THEME: FontTheme = {
  fontSize: 14,
  font: 'Nunito-Regular',
};

const DEFAULT_DARK_ANIMATION_THEME: AnimationTheme = {
  scale: 0,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: Theme = {
  id: DEFAULT_DARK_THEME_ID,
  colors: DEFAULT_DARK_COLOR_THEME,
  spacing: DEFAULT_DARK_SPACING_THEME,
  fonts: DEFAULT_DARK_FONT_THEME,
  animation: DEFAULT_DARK_ANIMATION_THEME,
};

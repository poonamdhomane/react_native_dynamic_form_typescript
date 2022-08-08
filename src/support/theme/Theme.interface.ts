export interface ColorTheme {
  primary: string;
  primary2: string;
  surface: string;
  background: string;
  backgroundOverlay: string;
  textColor: string;
  accent: string;
  placeholder: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
}

export interface FontTheme {
  fontSize: number;
  font: string;
  // double: number;
}

export interface AnimationTheme {
  scale: number;
  // double: number;
}

export interface Theme {
  id: string;
  colors: ColorTheme;
  spacing: SpacingTheme;
  fonts: FontTheme;
  animation: AnimationTheme;
}

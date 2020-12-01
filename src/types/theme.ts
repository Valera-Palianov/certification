export interface IStyleVariables {
  [key: string]: string
}

export interface ITheme {
  colors: IStyleVariables
  breakpoints: IStyleVariables
}
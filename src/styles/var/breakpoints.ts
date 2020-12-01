import { IStyleVariables } from '@/types/theme'

export const sm = 576
export const md = 768
export const lg = 992
export const xl = 1200

const breakpoints: IStyleVariables = {
  // For above
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',

  // For below
  smB: '575.98px',
  mdB: '767.98px',
  lgB: '991.98px',
  xlB: '1199.98px',
}

export default breakpoints

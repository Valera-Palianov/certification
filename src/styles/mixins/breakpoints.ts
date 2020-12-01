import { css, FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components'
import breakpoints from '@styles/var/breakpoints'

type breakpoint = string | number
type BreakpointArgsType = string | FlattenInterpolation<ThemeProps<DefaultTheme>>
type BreakpointMixinType = (style: BreakpointArgsType) => FlattenInterpolation<ThemeProps<DefaultTheme>>

export const above = (breakpoint: breakpoint): BreakpointMixinType => {
  let px = ''
  if (typeof breakpoint === 'string') {
    px = breakpoints[breakpoint] ? breakpoints[breakpoint] : breakpoint
  } else {
    px = `${breakpoint}px`
  }
  return (style: BreakpointArgsType) => {
    return css`
      @media (min-width: ${px}) {
        ${style}
      }
    `
  }
}

export const below = (breakpoint: breakpoint): BreakpointMixinType => {
  let px = ''
  if (typeof breakpoint === 'string') {
    px = breakpoints[`${breakpoint}B`] ? breakpoints[`${breakpoint}B`] : breakpoint
  } else {
    px = `${breakpoint}px`
  }
  return (style: BreakpointArgsType) => {
    return css`
      @media (max-width: ${px}) {
        ${style}
      }
    `
  }
}
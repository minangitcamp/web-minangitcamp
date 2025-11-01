"use client"

import useBreakpointBase from "use-breakpoint"

const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export function useBreakPoint() {
  return useBreakpointBase(BREAKPOINTS)
}

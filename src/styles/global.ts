import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray800',
    color: '$gray300',
  },
})

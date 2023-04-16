import { styled } from 'src/styles/stitches.config'

export const Tag = styled('div', {
  padding: '4px 16px',
  color: '$purple100',
  borderRadius: '$full',
  border: '2px solid $purple100',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  fontSize: '$lg',

  variants: {
    selected: {
      true: {
        color: '$white',
        backgroundColor: '$purple200',
        borderColor: '$purple200',

        '&:hover': {
          borderColor: '$purple100',
        },
      },
    },
  },
})

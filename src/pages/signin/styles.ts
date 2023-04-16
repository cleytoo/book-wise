import { styled } from 'src/styles/stitches.config'

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const WelcomeText = styled('h2', {
  fontSize: '$2xl',
  color: '$gray100',
  fontWeight: '$bold',
})
export const Subtitle = styled('p', {
  color: '$gray200',
})

export const Box = styled('div', {})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  height: '56px',
  borderRadius: '8px',
  backgroundColor: '$gray600',
  color: '$gray200',
  border: '2px solid $gray600',
  transition: 'all 0.1s ease-in-out',
  cursor: 'pointer',
  fontSize: '$lg',
  fontFamily: '$default',

  '&:hover': {
    borderColor: '$purple100',
  },
})

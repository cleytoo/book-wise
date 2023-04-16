import { styled } from 'src/styles/stitches.config'

import Link from 'next/link'

export const Wrapper = styled('div', {
  display: 'flex',
  height: '100vh',
  maxWidth: 1440,
  width: '100%',
  margin: '0 auto',
  padding: '20px',
  gap: 20,
})

export const Sidebar = styled('div', {
  minWidth: 232,

  borderRadius: 12,
  backgroundColor: '$gray700',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 28,
  paddingTop: 40,
})

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 15,
  marginTop: 40,
})

export const ButtonLogin = styled('button', {
  cursor: 'pointer',
  fontFamily: '$default',
  marginTop: 'auto',
  backgroundColor: 'transparent',
  color: '$gray200',
  fontWeight: '$bold',
  fontSize: '$lg',
  border: '2px solid transparent',
  padding: '8px 16px',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  gap: 10,

  transition: 'all 0.1s ease-in-out',

  '&:hover': {
    borderColor: '$green100',
  },

  svg: {
    width: 22,
    height: 22,
    color: '$green100',
  },
})

export const NavLink = styled(Link, {
  textDecoration: 'none',
  color: '$gray400',
  fontSize: '$sm',
  padding: '8px 16px',
  width: 160,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  transition: 'all 0.1s ease-in-out',

  '&:hover': {
    color: '$gray100',
  },

  svg: {
    width: 22,
    height: 22,
    marginRight: 20,
  },

  variants: {
    active: {
      true: {
        '&::before': {
          content: '',
          display: 'block',
          position: 'absolute',
          left: 0,
          top: '-9',
          width: 4,
          height: 20,
          borderRadius: 4,
          backgroundColor: '$green100',
        },
      },
    },
  },
})

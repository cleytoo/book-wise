import { styled } from 'src/styles/stitches.config'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowX: 'hidden',
})

export const ExplorerHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',
    alignItems: 'center',

    h2: {
      fontSize: '$2xl',
      color: '$gray100',
    },

    svg: {
      marginRight: '0.5rem',
      height: '2rem',
      width: '2rem',
      color: '$green100',
    },
  },
})

export const ExplorerInput = styled('label', {
  display: 'flex',
  alignItems: 'center',

  height: '3rem',
  width: '27rem',
  border: '1px solid $gray500',
  borderRadius: '4px',
  padding: '0.875rem  1.25rem',

  input: {
    all: 'unset',
    width: '100%',
    color: '$gray300',

    '&::placeholder': {
      color: '$gray400',
      opacity: 0.5,
    },
  },

  svg: {
    height: '1.25rem',
    width: '1.25rem',
    color: '$gray500',
  },
})

export const CategoriesWrapper = styled('div', {
  display: 'flex',
  gap: '1rem',
  marginTop: '40px',
  overflowX: 'auto',
  padding: '1rem',

  '&::-webkit-scrollbar': {
    height: '10px',
    backgroundColor: '$gray700',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    // boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '10px',
  },
})

export const BookWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(318px, 1fr))',
  gap: '20px',
  overflowY: 'auto',
  marginTop: '48px',
  paddingRight: '1rem',

  '&::-webkit-scrollbar': {
    width: '10px',
    backgroundColor: '$gray700',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    // boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray600',
    borderRadius: '10px',
  },
})

export const BookCard = styled('div', {
  height: '184px',
  borderRadius: '8px',
  padding: '16px 20px',
  backgroundColor: '$gray700',
  border: '2px solid $gray700',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  display: 'flex',
  gap: '20px',

  '&:hover': {
    border: '2px solid $green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',

    strong: {
      lineHeight: '22px',
    },
    span: {
      fontSize: '$sm',
      color: '$gray400',
    },
  },
})

// 14px and 20 px to rem = 0.875rem and 1.25rem

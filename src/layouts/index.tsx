import Image from 'next/image'
import { ButtonLogin, NavLink, Sidebar, Box, Wrapper } from './styles'

import BookwiseLogo from '../../public/logo.svg'
import { SignIn, ChartLineUp, Binoculars, User } from '@phosphor-icons/react'
import { useRouter } from 'next/router'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  const currentPath = router.pathname

  return (
    <Wrapper>
      <Sidebar>
        <Image src={BookwiseLogo} alt="book wise logo" height={40} />
        <Box>
          <NavLink href="/home" active={currentPath === '/home'}>
            <ChartLineUp />
            Início
          </NavLink>
          <NavLink href="/explorer" active={currentPath === '/explorer'}>
            <Binoculars />
            Explorar
          </NavLink>
          <NavLink href="/perfil" active={currentPath === '/perfil'}>
            <User />
            Perfil
          </NavLink>
        </Box>
        <ButtonLogin>
          Fazer login
          <SignIn weight="bold" />
        </ButtonLogin>
      </Sidebar>
      {children}
    </Wrapper>
  )
}

import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

import { Box, Button, Content, Subtitle, WelcomeText, Wrapper } from './styles'

import BookwiseLogo from '../../../public/logo.svg'
import GoogleIncon from '../../../public/google.svg'
import GithubIcon from '../../../public/github.svg'
import GuestIcon from '../../../public/guest.svg'

export default function SignIn() {
  const session = useSession()

  console.log(session)

  return (
    <Wrapper>
      <Content>
        <Image src={BookwiseLogo} alt="book wise logo" />
        <Box css={{ marginTop: '40px', alignSelf: 'baseline' }}>
          <WelcomeText>Boas vindas!</WelcomeText>
          <Subtitle>Faça seu login ou acesse como visitante.</Subtitle>
        </Box>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$4',
            marginTop: '40px',
            width: 380,
          }}
        >
          <Button onClick={() => signIn('google')}>
            <Image src={GoogleIncon} alt="google icon" />
            Entrar com Google
          </Button>
          <Button onClick={() => signIn('github')}>
            <Image src={GithubIcon} alt="github icon" />
            Entrar com Github
          </Button>
          <Button>
            <Image src={GuestIcon} alt="guest icon" />
            Entrar como visitante
          </Button>
        </Box>
      </Content>
    </Wrapper>
  )
}

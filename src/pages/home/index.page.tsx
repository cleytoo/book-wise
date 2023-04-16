import { Layout } from 'src/layouts'
import { Wrapper } from './styles'

function Home() {
  return <Wrapper>Home</Wrapper>
}

Home.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>

export default Home

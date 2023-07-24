import { styled } from 'styled-components'
import FileUploader from './components/FileUploader'
import TransactionsTable from './components/TransactionsTable'

const Section = styled.div`
  min-height: 100vh;
`

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 1200px;
  padding: 8px;
`

const Navbar = styled.nav`
  background-color: #181717e1;
  padding: 16px;
`

const Logo = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 500;
`

const App = () => {
  return (
    <Section>
      <Navbar>
        <Logo>Affiliate Transactions</Logo>
      </Navbar>
      <Container>
        <FileUploader />
        <TransactionsTable />
      </Container>
    </Section>
  )
}

export default App

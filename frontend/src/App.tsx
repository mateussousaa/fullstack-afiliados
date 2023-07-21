import { styled } from 'styled-components'
import FileUploader from './components/FileUploader'

const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 8px;
  min-height: 100vh;
`

const onFileUpload = () => {}

function App() {
  return (
    <Container>
      <FileUploader onFileUpload={onFileUpload} />
    </Container>
  )
}

export default App

import './App.css'
import Form from './components/Form'
import FontControlBox from './components/FontControlBox'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <section className="form-wrapper">
        <Form />
        <Footer />
      </section>
      <FontControlBox />
    </>
  )
}

export default App

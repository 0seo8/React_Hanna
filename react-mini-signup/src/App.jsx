import './App.css'
import Form from './components/Form'
import FrontControlBox from './components/FrontControlBox'
import Footer from './components/Footer'
import Modal from './components/Modal'
function App() {
  return (
    <>
      <section className="form-wrapper">
        <Form />
        <Footer />
      </section>
      <FrontControlBox />
      <Modal />
    </>
  )
}

export default App

import { createContext, useState } from 'react'
import './App.css'
import Form from './components/Form'
import FrontControlBox from './components/FrontControlBox'
import Footer from './components/Footer'
import Modal from './components/Modal'

const initialFormData = {
  id: '',
  pw: '',
  confirmPw: '',
}
export const FormContext = createContext({
  formData: initialFormData,
  setFormData: () => {},
})

function App() {
  const [formData, setFormData] = useState(initialFormData)
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <section className="form-wrapper">
        <Form />
        <Footer />
      </section>
      <FrontControlBox />
      <Modal />
    </FormContext.Provider>
  )
}

export default App

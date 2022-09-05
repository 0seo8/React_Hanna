import { createContext, useState, useRef } from 'react'
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
  const modalRef = useRef()
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <section className="form-wrapper">
        <Form modalRef={modalRef} />
        <Footer />
      </section>
      <FrontControlBox />
      {/* 모달에 ref를 만들어 form에게 제어권을 넘겨줍니다 */}
      <Modal ref={modalRef} />
    </FormContext.Provider>
  )
}

export default App

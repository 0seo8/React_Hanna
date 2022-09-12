import { useState, useEffect } from 'react'

import styled from 'styled-components'
import ToggleThemeButton from './component/ToggleThemeButton'
import Hero from './component/Hero'
import ResultContainer from './component/ResultContainer'
import Footer from './component/Footer'
import getWallpapers from './api/getWallpapers'
import './App.css'

const Container = styled.div`
  position: relative;
  background-color: var(--primary);
  min-height: 100vh;
`

function App() {
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const data = await getWallpapers({
        q: query,
      })
      setData(data)
    }
    fetch()
    //query가 업데이트 될 때 마다 fetch가 될 수 있도록 설정
  }, [query])

  return (
    <>
      <Container>
        <Hero setQuery={setQuery} />
        <ResultContainer data={data} />
        <Footer />
        <ToggleThemeButton />
      </Container>
    </>
  )
}

export default App

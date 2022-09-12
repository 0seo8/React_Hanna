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
  const [order, setOrder] = useState('popular')
  const [orientation, setOrientation] = useState('all')

  useEffect(() => {
    const fetch = async () => {
      const data = await getWallpapers({
        q: query,
        orientation,
        order,
      })
      setData(data)
    }
    fetch()
    //query가 업데이트 될 때 마다 fetch가 될 수 있도록 설정
  }, [query, orientation, order])

  return (
    <>
      <Container>
        <Hero
          setQuery={setQuery}
          setOrder={setOrder}
          setOrientation={setOrientation}
        />
        <ResultContainer data={data} />
        <Footer />
        <ToggleThemeButton />
      </Container>
    </>
  )
}

export default App

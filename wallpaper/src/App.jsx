import { useState, useEffect, useRef } from 'react'

import styled from 'styled-components'
import ToggleThemeButton from './component/ToggleThemeButton'
import ImageContainer from './component/Image/ImageContainer'
import Footer from './component/Footer'
import getWallpapers from './api/getWallpapers'
import Title from './component/Title'
import './App.css'
import EmptyResult from './component/EmptyResult'
import Search from './component/Search/Search'

const Container = styled.div`
  position: relative;
  background-color: var(--primary);
  min-height: 100vh;
`

const Header = styled.div`
  background-color: var(--secondary);
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 120px 32px 16px 32px;
`

function App() {
  const [data, setData] = useState({ total: 0, totalHits: 0, hits: [] })
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('popular')
  const [orientation, setOrientation] = useState('all')
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(20)
  const target = useRef(null)

  const numOfPages = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0

  useEffect(() => {
    const fetch = async () => {
      const data = await getWallpapers({
        q: query,
        orientation,
        order,
        page,
        per_page: perPage,
      })
      if (page === 1) {
        setData(data)
      } else {
        setData((prevData) => ({
          ...prevData,
          hits: [...prevData.hits, ...data.hits],
        }))
      }
    }
    fetch()
    //query가 업데이트 될 때 마다 fetch가 될 수 있도록 설정
  }, [query, orientation, order, page, perPage])

  //1.검색결과 없을 때 로딩중X, 검색 결과가 없습니다.

  //2. 모두다 검색 시 로딩중X

  const callback = ([entries]) => {
    //보일 때만 console.log가 찍히는 걸 확인할 수 있습니다.
    if (entries.isIntersecting) {
      setPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    if (!target.current) return
    const observer = new IntersectionObserver(callback, {
      threshold: 1,
    })
    observer.observe(target.current)
  }, [])

  useEffect(() => {
    setPage(1)
  }, [query, orientation, order, perPage])

  return (
    <>
      <Container>
        <Header>
          <Title />
          <Search
            setQuery={setQuery}
            setOrder={setOrder}
            setOrientation={setOrientation}
            setPerPage={setPerPage}
          />
        </Header>
        <ImageContainer
          data={data}
          page={page}
          setPage={setPage}
          numOfPages={numOfPages}
        />
        {page !== numOfPages && (
          <div ref={target}>{<EmptyResult isLoading={data.totalHits} />}</div>
        )}
        <Footer />
        <ToggleThemeButton />
      </Container>
    </>
  )
}

export default App

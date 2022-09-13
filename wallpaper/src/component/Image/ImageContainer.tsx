import styled from 'styled-components'
import React, { useState, Suspense } from 'react'
import ImageCard from './ImageCard'
import Pagination from '../Pagination'

const ImageModal = React.lazy(() => import('./ImageModal'))

const Container = styled.div`
  max-width: 1830px;
  margin: 8px auto;
  padding-right: 8px;
`

const ResultsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

const ImageContainer = ({ data, page, setPage, numOfPages }) => {
  const [currentImgDetail, setCurrentImgDetail] = useState(null)
  return (
    <Container>
      <Suspense fallback={<h1>로딩중...</h1>}>
        {currentImgDetail && (
          <ImageModal
            currentImgDetail={currentImgDetail}
            setCurrentImgDetail={setCurrentImgDetail}
          />
        )}
      </Suspense>
      {data.hits?.length > 0 && (
        <Pagination page={page} setPage={setPage} numOfPages={numOfPages} />
      )}
      <ResultsWrapper>
        {data.hits?.length > 0 &&
          data.hits?.map((imgData) => (
            <ImageCard
              key={imgData.id}
              imgData={imgData}
              onClick={() => setCurrentImgDetail(imgData)}
            />
          ))}
      </ResultsWrapper>
    </Container>
  )
}

export default ImageContainer

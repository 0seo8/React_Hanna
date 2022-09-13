import styled from 'styled-components'
import DummyData from '../assets/dummyData'
import ImageCard from './ImageCard'
import ImageModal from './ImageModal'
import Pagination from './Pagination'
import EmptyResult from './EmptyResult'
import getWallpapers from '../api/getWallpapers'
import { useState } from 'react'

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

const ResultContainer = ({ data, page, setPage, numOfPages }) => {
  const [currentImgDetail, setCurrentImgDetail] = useState(null)
  return (
    <Container>
      {/* ImgCard 클릭 시 해당 이미지의 정보로 ImageModal이 나타나야 합니다. */}
      {currentImgDetail && (
        <ImageModal
          currentImgDetail={currentImgDetail}
          setCurrentImgDetail={setCurrentImgDetail}
        />
      )}
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

export default ResultContainer

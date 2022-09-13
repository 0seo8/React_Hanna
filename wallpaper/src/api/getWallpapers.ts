import request from './request'
import { IParamObj } from '../types'
const { VITE_PIXABAY } = import.meta.env
const BASE_URL = 'https://pixabay.com/api'

const defaultParam = {
  key: VITE_PIXABAY,
  safesearch: 'true',
}
const getWallpapers = async (paramObj: IParamObj) => {
  const params = new URLSearchParams({
    ...defaultParam,
    ...paramObj,
  }).toString()
  const result = await request(`${BASE_URL}/?${params}`)
  return result
}

export default getWallpapers

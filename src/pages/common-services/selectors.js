import { STATE_REDUCER_KEY } from 'common/constants'
import { useSelector } from 'react-redux'

export const useHeroCarSlug = () =>
  useSelector((state) => state[STATE_REDUCER_KEY].heroCarSlug)

export const useHeroModel = () =>
  useSelector((state) => state[STATE_REDUCER_KEY].heroModel)
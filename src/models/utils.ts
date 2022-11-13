/* eslint @typescript-eslint/no-var-requires: "off" */
import { MovieTile } from './interfaces'

export const sortBy = (data: MovieTile[]): MovieTile[] => {
  return data.sort((a, b) => {
    if (a.release_year > b.release_year) {
      return 1
    }
    if (a.release_year < b.release_year) {
      return -1
    }
    return 0
  })
}

export const moviePath = (img: string): string => require(`../assets/${img}`).default

import React, { ReactElement, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

export default function MovieContros ({ genres, selected, count, sortSelected }: { genres: string[], selected: string, count: number, sortSelected: string }): ReactElement {
  const router = useRouter()
  const sortOpts = ['Release Date', 'Rating', 'Popular']
  const [selectedGenre, setSelectedGenre] = useState(genres[0])
  const [openBox, setOpenBox] = useState(false)
  const [selectedSort, setSelectedSort] = useState(sortOpts[0])
  const [selectedSortDisplay, setSelectedSortDisplay] = useState('')

  const goTo = (search: string): void => {
    const basePath = router.asPath.split('?')[0]
    void router.push(`${basePath}${search}`)
  }

  const handleClick = (selected: string): void => {
    const genre = selected !== 'all' ? selected.toLocaleLowerCase() : ''
    const selectedSortByQuery = `?sortBy=${selectedSort}`
    const selectedGenreQuery = genre !== '' ? `&genre=${genre}` : ''
    goTo(selectedSortByQuery + selectedGenreQuery)
  }

  const handleSortSelected = (selected: string): void => {
    let selectedSortBy = ''
    switch (selected) {
      case 'Release Date':
        selectedSortBy = 'release_date'
        break
      case 'Rating':
        selectedSortBy = 'vote_average'
        break
      case 'Popular':
        selectedSortBy = 'vote_count'
        break
      default:
        selectedSortBy = selected
    }

    const selectedSortByQuery = `?sortBy=${selectedSortBy}`
    const selectedGenreQuery = selectedGenre !== '' ? `&genre=${selectedGenre}` : ''
    setOpenBox(false)
    goTo(selectedSortByQuery + selectedGenreQuery)
  }

  useEffect(() => {
    setSelectedGenre(selected)
    setSelectedSort(sortSelected)

    switch (sortSelected) {
      case 'release_date':
        setSelectedSortDisplay('Release Date')
        break
      case 'vote_average':
        setSelectedSortDisplay('Rating')
        break
      case 'vote_count':
        setSelectedSortDisplay('Popular')
        break
      default:
        setSelectedSortDisplay(sortSelected)
    }
  }, [selected, sortSelected])

  return (
    <div className='controls'>
      <div className="genre-selector">
        {genres.map((x, i) => <button onClick={() => handleClick(x)} className={selectedGenre === x ? 'selected' : ''} key={i}>{x}</button>)}
      </div>
      <div className='sort-selector'>
        <span>Sort By:</span> <button onClick={() => setOpenBox(!openBox)}>{selectedSortDisplay}</button>
        {
          openBox && <ul className='sort-options'>
            {
              sortOpts.map((x, i) => <li key={i}><button onClick={() => handleSortSelected(x)}>{x}</button></li>)
            }
          </ul>
        }
      </div>
      <p className='result-count'><b>{count}</b> movies found</p>
    </div>
  )
}
MovieContros.defaultProps = {
  count: 0, genres: [], selected: '', sortSelected: ''
}
MovieContros.propTypes = {
  count: PropTypes.number.isRequired, genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

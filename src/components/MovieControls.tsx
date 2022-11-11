import React, { ReactElement, useState } from 'react'
import PropTypes from 'prop-types'

export default function MovieContros ({ genres, count, onGenreSelected }: { genres: string[], count: number, onGenreSelected: Function }): ReactElement {
  const sortOpts = ['Release Date', 'Rating']
  const [selectedGenre, setSelectedGenre] = useState(genres[0])
  const [openBox, setOpenBox] = useState(false)
  const [selectedSort, setSelectedSort] = useState(sortOpts[0])

  const handleClick = (value: string): void => {
    setSelectedGenre(value)
    onGenreSelected(value)
  }

  const handleSortSelected = (selected: string): void => {
    setSelectedSort(selected)
    setOpenBox(false)
  }
  return (
        <div className='controls'>
            <div className="genre-selector">
                {genres.map((x, i) => <button onClick={() => handleClick(x)} className={selectedGenre === x ? 'selected' : ''} key={i}>{x}</button>)}
            </div>
            <div className='sort-selector'>
                <span>Sort By:</span> <button onClick={() => setOpenBox(!openBox)}>{selectedSort}</button>
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
  count: 0, genres: []
}
MovieContros.propTypes = {
  count: PropTypes.number.isRequired, genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

import React, { ReactElement, useRef } from 'react'

export default function Search ({ onSearch }: { onSearch: Function }): ReactElement {
  const searchInput = useRef(null)
  const search = (): void => {
    if (searchInput.current != null) {
      const value = (searchInput.current as HTMLInputElement).value
      onSearch(value)
    }
  }
  return (
        <div className="search-box">
            <h3>Find your movie</h3>
            <div className="search-input">
                <input ref={searchInput} placeholder="What do you want to search?" />
                <button className="btn" onClick={() => search()} >Search</button>
            </div>
        </div>
  )
}

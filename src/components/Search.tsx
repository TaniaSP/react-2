import React, { ReactElement, useEffect, useState, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'

export default function Search ({ query }: { query: string }): ReactElement {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  const search = (): void => {
    void router.push(`/search${searchValue !== '' ? `/${searchValue}` : ''}`)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      search()
    }
  }

  useEffect(() => {
    setSearchValue(query)
  }, [query])
  return (
    <div className="search-box">
      <h3>Find your movie</h3>
      <div className="search-input">
        <input value={searchValue} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setSearchValue(e.target.value)} placeholder="What do you want to search?" />
        <button className="btn" onClick={() => search()} >Search</button>
      </div>
    </div>
  )
}

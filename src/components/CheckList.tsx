import React, { useState } from 'react'

interface Opt {
  value: string
  checked: boolean
}

export default function CheckList (): JSX.Element {
  const DEFAULT_GENRES = ['Crime', 'Documentary', 'Horror', 'Comedy']
  const opts: Opt[] = DEFAULT_GENRES.map(x => ({ checked: false, value: x }))
  const [selected, setSelected]: [selected: Opt[], setSeleected: Function] = useState(opts)
  const [isOpen, setIsOpen] = useState(false)
  const updateSelcted = (item: string): void => {
    const opts: Opt[] = selected.map((x: Opt) => ({
      ...x,
      checked: x.value === item ? !x.checked : x.checked
    }))
    setSelected(opts)
  }

  return (
        <div className="list-droprown">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'open' : ''}>Select Genre</button>
            {isOpen && <ul className="cheeckbox-list">
                {selected.map((x: Opt) => <li key={x.value}> <input type="checkbox" checked={x.checked} onChange={() => updateSelcted(x.value)} /> <span>{x.value}</span></li>)}
            </ul>}
        </div>
  )
}

import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import useComponentVisible from '../services/hooks'
interface Opt {
  value: string
  checked: boolean
}

export default function CheckList ({ value, onSelected }: { value: string[], onSelected: Function }): JSX.Element {
  const { ref, isComponentVisible } = useComponentVisible(true)

  const DEFAULT_GENRES = ['Adventure', 'Comedy', 'Drama', 'Science Fiction', 'War', 'Romance', 'Horror', 'Action', 'Thriller', 'Mystery', 'Fantasy', 'Animation', 'Family', 'Music', 'Crime', 'Western', 'History']

  const opts: Opt[] = DEFAULT_GENRES.map(x =>
    ({ checked: value.find(v => v === x) !== undefined, value: x })
  )
  const [isOpen, setIsOpen] = useState(false)

  const updateSelcted = (item: string): void => {
    const updated: Opt[] = opts.map((x: Opt) => ({
      ...x,
      checked: x.value === item ? !x.checked : x.checked
    }))
    onSelected(updated.filter(x => x.checked).map(x => x.value))
  }

  useEffect(() => {
    if (!isComponentVisible) {
      setIsOpen(false)
    }
  }, [isComponentVisible])

  const fullSelection = useMemo(() => value.length > 0 ? value.join(', ') : 'Select Genre', [value])

  return (
    <div className="list-droprown">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'open' : ''} title={fullSelection}>{fullSelection}</button>
      {isOpen && <ul ref={ref} className="checkbox-list">
        {opts.map((x: Opt, i: number) => <li key={x.value}> <label htmlFor={`check${i}`}> <input id={`check${i}`} type="checkbox" checked={x.checked} onChange={() => updateSelcted(x.value)} />{x.value}</label></li>)}
      </ul>}
    </div>
  )
}

CheckList.defaultProps = {
  value: []
}
CheckList.propTypes = {
  value: PropTypes.array
}

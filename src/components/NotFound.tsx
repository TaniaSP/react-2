import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound (): ReactElement {
  return (<>
        <h1>Not Found go <Link to='/'>home</Link></h1>
    </>)
}

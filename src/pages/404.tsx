import React, { ReactElement } from 'react'
import Link from 'next/link'
export default function NotFound (): ReactElement {
  return (<>
    <h1>Not Found go <Link href='/'>home</Link></h1>
  </>)
}

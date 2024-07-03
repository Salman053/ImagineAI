import { SignedIn, } from '@clerk/nextjs'

import React  from 'react'

const Home = () => {
  return (
    <>
      <SignedIn>
      <p>
        Home Page
      </p>
      </SignedIn>
    </>
  )
}

export default Home
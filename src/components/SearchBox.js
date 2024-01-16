import React from 'react'
import Ville from './Ville'

const SearchBox = ({ville,chooseZone}) => {
  return (
    <>
      <Ville ville={ville} chooseZone={chooseZone}  />
    </>
  )
}

export default SearchBox

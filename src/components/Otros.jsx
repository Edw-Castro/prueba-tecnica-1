import { useCatImage } from './hooks/useCatImage.js'
import React from 'react'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'cat' })
  console.log(imageUrl)

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}

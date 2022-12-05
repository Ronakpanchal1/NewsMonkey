import React from 'react'
import spinner from '../loader.gif'

export default function Spinner() {
  return (
    <div className='text-center  mt-4'>
      <img src={spinner} alt="Loading...." className='my-5' />
    </div>
  )
}

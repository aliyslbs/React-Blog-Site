import React from 'react'
import Navi from './Navi'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Dashboard'

export default function HomePage() {
  return (
    <div>
        <Navi></Navi>
        <ToastContainer></ToastContainer>
        <div className='centered'>welcome to far from</div>
    </div>
  )
}

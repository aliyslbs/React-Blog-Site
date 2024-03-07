import React from 'react'
import { useSelector } from 'react-redux'
import AdminLogin from './AdminLogin'
import { ToastContainer } from 'react-toastify'
import Admin from './Admin'

export default function AdminDashboard() {

    const isSuperUserAuthenticated = useSelector(state => state.superUserAuth.isSuperUserAuthenticated)

  return (
    <div>
        <ToastContainer position='top-right'></ToastContainer>
        {isSuperUserAuthenticated ? <Admin/> : <AdminLogin/>}      
    </div>
  )
}

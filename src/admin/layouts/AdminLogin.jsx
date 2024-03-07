import React, { useEffect, useState } from 'react'
import SuperUserService from '../../services/superUserService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { superUserLogin } from '../../store/actions/superUserAuthAction'

export default function AdminLogin() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [superUserName, setSuperUserName] = useState()
  const [superUserPassword, setSuperUserPassword] = useState()
  const [superUser ,setSuperUser] = useState()

  const handleSubmit = () =>{
    if(superUserPassword === superUser.superUserPassword){      
      dispatch(superUserLogin())      
      toast.success(`admin ${superUser.superUserName} logged in successfully`)
      navigate("/a")
    }else{
      toast.error("admin name or password is incorrect")
    }
  }

  useEffect (() => {
    let superUserService = new SuperUserService()
    superUserService.getBySuperUserName(superUserName).then(result => setSuperUser(result.data))
  },[superUserName])
  

  return (
    <div>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>First Name</label>
          <input type="text" name="adminName" onChange={e => setSuperUserName(e.target.value)} placeholder="admin name"/>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input type="text" name="adminPassword" onChange={e => setSuperUserPassword(e.target.value)} placeholder="admin password"/>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  )
}


import React, { useState } from 'react'
import { FormField, Button, Form } from 'semantic-ui-react'
import CategoryService from '../../services/categoryService'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AddCategory() {
  const navigate = useNavigate()
  const [categoryName, setCategoryName] = useState()

  const handleSubmit = () => {
    const category = {
      categoryName: categoryName
    }
    console.log(category)
    const categoryService = new CategoryService()
    categoryService.categoryAdd(category).then()
    toast.success(`category named ${category.categoryName} was added successfully`)
    navigate("/a/categoryManagement")
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Category Name</label>
          <input onChange={e => setCategoryName(e.target.value)} placeholder='enter category name' />
        </FormField>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

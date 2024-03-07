import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoryService from '../../services/categoryService'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

export default function UpdateCategory() {

    const {categoryId} = useParams()
    const navigate = useNavigate()

    const [category, setCategory] = useState()

    const [updatedCategoryName, setUpdatedCategoryName] = useState()

    const handleSubmit = () => {
      const categoryId = category.categoryId
      const updatedCategory = {
        categoryName : updatedCategoryName
      }

      const categoryService = new CategoryService()
      categoryService.updateCategory(categoryId, updatedCategory).then(toast.success("category updated successfully"))      
      navigate("/a/categoryManagement")
    }

    useEffect(() => {
      const categoryService = new CategoryService()
      categoryService.getByCategoryId(categoryId).then(result => setCategory(result.data))
    })

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Category Name</Form.Label>
          <Form.Control defaultValue={category?.categoryName} onChange={e => setUpdatedCategoryName(e.target.value)} type="text" placeholder="Enter article title" />
        </Form.Group>
        <Button  onClick={handleSubmit} variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  )
}

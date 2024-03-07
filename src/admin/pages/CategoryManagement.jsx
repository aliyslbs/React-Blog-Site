import React, { useEffect, useState } from 'react'
import CategoryService from '../../services/categoryService'
import { Button, Menu, MenuItem, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function CategoryManagement() {

  const navigate = useNavigate()

  const [categories, setCategories] = useState([])

  useEffect(() => {
    let categoryService = new CategoryService()
    categoryService.getAllCategory().then(result => setCategories(result.data))
  }, [])

  const handleAddCategory = () => { navigate("/a/categoryManagement/addCategory") }

  const handleDeleteCategory = (categoryId, categoryName) => {
    let categoryService = new CategoryService()
    categoryService.deleteByCategoryId(categoryId).then(toast.info(`category named ${categoryName} deleted successfully`))
  }

  const handleUpdateCategory = (categoryId) => {
    navigate(`/a/categoryManagement/updateCategory/${categoryId}`)
  }

  return (
    <div>
      <Menu>
        <MenuItem name='addCategory'>
          <Button color='green' onClick={() => handleAddCategory()}>Add Category</Button>
        </MenuItem>
      </Menu>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>category name</TableHeaderCell>
            <TableHeaderCell>update</TableHeaderCell>
            <TableHeaderCell>delete</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            categories.map(category => (
              <TableRow>
                <TableCell>{category.categoryName}</TableCell>
                <TableCell><Button onClick={() => handleUpdateCategory(category.categoryId)} color="blue" className='small'>update</Button></TableCell>
                <TableCell><Button onClick={() => handleDeleteCategory(category.categoryId, category.categoryName)} color='red' className='small'>delete</Button></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

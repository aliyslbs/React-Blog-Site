import React, { useEffect, useState } from 'react'
import CategoryService from '../services/categoryService'
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'

export default function CategoryList() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getAllCategory().then(result => setCategories(result.data))
    },[])

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Categories</TableHeaderCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        categories?.map(category => (
                            <TableRow key={category.categoryId}>
                                <TableCell>{category.categoryName}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

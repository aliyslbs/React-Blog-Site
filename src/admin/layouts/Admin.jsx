import React from 'react'
import { Grid, GridColumn, GridRow, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from 'semantic-ui-react'
import ArticleManagement from '../pages/ArticleManagement'
import AddArticle from '../pages/AddArticle'
import CategoryManagement from '../pages/CategoryManagement'
import AddCategory from '../pages/AddCategory'
import AuthorManagement from '../pages/AuthorManagement'
import AddAuthor from '../pages/AddAuthor'
import UserManagement from '../pages/UserManagement'
import SuperUserManagement from '../pages/SuperUserManagement'
import AddSuperUser from '../pages/AddSuperUser'
import SuperUserDetails from '../pages/SuperUserDetails'
import { Link, Route, Routes } from 'react-router-dom'
import UpdateArticle from '../pages/UpdateArticle'
import UpdateCategory from '../pages/UpdateCategory'
import UpdateAuthor from '../pages/UpdateAuthor'
import UpdateSuperUser from '../pages/UpdateSuperUser'

export default function Admin() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderCell className='centered'>Admin Panel</TableHeaderCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className='centered'><TableCell><Link to={"/a/articleManagemenent"}>Article Management</Link></TableCell></TableRow>
                                <TableRow className='centered'><TableCell><Link to={"/a/categoryManagement"}>Category Management</Link></TableCell></TableRow>
                                <TableRow className='centered'><TableCell><Link to={"/a/authorManagement"}>Author Management</Link></TableCell></TableRow>
                                <TableRow className='centered'><TableCell><Link to={"/a/userManagement"}>User Management</Link></TableCell></TableRow>
                                <TableRow className='centered'><TableCell><Link to={"/a/superUserManagement"}>Admins Management</Link></TableCell></TableRow>
                                <TableRow className='centered'><TableCell><Link to={"/a/superUserDetails"}>Admin Details</Link></TableCell></TableRow>
                            </TableBody>
                        </Table>
                    </GridColumn>
                    <GridColumn width={11}>
                        <Routes>
                            <Route path='articleManagemenent' Component={ArticleManagement} />
                            <Route path='articleManagemenent/addArticle' Component={AddArticle} />
                            <Route path='articleManagemenent/updateArticle/:articleId' Component={UpdateArticle} />
                            <Route path='categoryManagement' Component={CategoryManagement} />
                            <Route path='categoryManagement/addCategory' Component={AddCategory} />
                            <Route path='categoryManagement/updateCategory/:categoryId' Component={UpdateCategory} />
                            <Route path='authorManagement' Component={AuthorManagement} />
                            <Route path='authorManagement/addAuthor' Component={AddAuthor} />
                            <Route path='authorManagement/updateAuthor/:authorId' Component={UpdateAuthor} />
                            <Route path='userManagement' Component={UserManagement} />
                            <Route path='superUserManagement' Component={SuperUserManagement} />
                            <Route path='superUserManagement/addSuperUser' Component={AddSuperUser} />
                            <Route path='superUserManagement/updateSuperUser/:superUserId' Component={UpdateSuperUser} />
                            <Route path='superUserDetails' Component={SuperUserDetails} />
                        </Routes>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

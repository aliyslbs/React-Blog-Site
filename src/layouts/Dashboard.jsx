import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Author from './Author'
import Categories from './Categories'
import ArticleList from '../pages/ArticleList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import UserDetails from '../pages/UserDetails'
import Navi from './Navi'

export default function Dashboard() {
    return (
        <div>
            <Navi></Navi>
            <ToastContainer position='top-right' />
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Author></Author>
                    </GridColumn>
                    <GridColumn width={8}>
                        <Routes>
                            <Route path='/home' element={<ArticleList />} />
                            <Route path='/' element={<ArticleList />} />
                            <Route path='/userDetails' Component={UserDetails} />
                        </Routes>
                    </GridColumn>
                    <GridColumn width={4}>
                        <Categories></Categories>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}

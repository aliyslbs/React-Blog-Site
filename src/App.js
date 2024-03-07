import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './admin/layouts/AdminLogin';
import HomePage from './layouts/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserDetails from './pages/UserDetails';
import ArticleList from './pages/ArticleList';
import ArticleManagement from './admin/pages/ArticleManagement';
import CategoryManagement from './admin/pages/CategoryManagement';
import AddCategory from './admin/pages/AddCategory';
import UpdateCategory from './admin/pages/UpdateCategory';
import AuthorManagement from './admin/pages/AuthorManagement';
import AddAuthor from './admin/pages/AddAuthor';
import UpdateAuthor from './admin/pages/UpdateAuthor';
import AddArticle from './admin/pages/AddArticle';
import UpdateArticle from './admin/pages/UpdateArticle';
import UserManagement from './admin/pages/UserManagement';
import SuperUserManagement from './admin/pages/SuperUserManagement';
import AddSuperUser from './admin/pages/AddSuperUser';
import UpdateSuperUser from './admin/pages/UpdateSuperUser';
import SuperUserDetails from './admin/pages/SuperUserDetails';
import { ToastContainer } from 'react-toastify';
import AdminDashboard from './admin/layouts/AdminDashboard';

function App() {
  return (
    <div>
      <ToastContainer position='top-right'/>
      <Routes>
        <Route exact path='*' Component={HomePage} />

        <Route path="/admin" Component={AdminLogin}/>

        <Route path='/a' Component={AdminDashboard}>
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
        </Route>

        <Route path='farfrom' element={<Dashboard />}>
          <Route path='home' Component={<ArticleList />} />
          <Route path='userDetails' Component={UserDetails} />
        </Route>
        
        <Route path='/signIn' Component={SignIn} />
        <Route path='/signUp' Component={SignUp} />
      </Routes>
    </div>
  );
}

export default App;

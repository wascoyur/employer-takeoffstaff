import './App.css';
import {Admin, Resource, EditGuesser, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import React from "react";
import {UserList} from "./users";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import {PostEdit, PostCreate, PostList, PostFilter} from './Posts'
import Dashboard from "./Dashboard";

const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () =>{
  return(
    <Admin dashboard={Dashboard} dataProvider = {dataProvider}>
      <Resource
        icon={PostIcon}
        name="posts"
        list={PostList}
        edit={PostEdit}
        create ={PostCreate}
        filter = {PostFilter}
      />
      <Resource
        icon={UserIcon}
        name='users'
        list = {UserList}/>
    </Admin>
  )
}

export default App;

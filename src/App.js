import './App.css';
import {Admin, Resource, EditGuesser, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import React from "react";
import {UserList} from "./users";
// import {PostList} from "./PstList";
import {PostEdit, PostCreate, PostList} from './Posts'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () =>{
  return(
    <Admin dataProvider = {dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create ={PostCreate}/>
      <Resource name='users' list = {UserList}/>
    </Admin>
  )
}

export default App;

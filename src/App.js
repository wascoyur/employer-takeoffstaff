import './App.css';
import {Admin, Resource, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import React from "react";
import {UserList} from "./users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () =>{
  return(
    <Admin dataProvider = {dataProvider}>
      <Resource name='users' list = {UserList} edit={EditGuesser}></Resource>
    </Admin>
  )
}

export default App;

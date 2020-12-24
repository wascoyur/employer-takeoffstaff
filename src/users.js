import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from "./MyUrlField";
export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='username' />
      <EmailField source='email' />
      <TextField source='address.street' label='Address' />
      <TextField source='phone' />
      {/*<UrlField source='website' />*/}
      <MyUrlField source= 'website'/>
      <TextField source='company.name' label='Company' />
    </Datagrid>
  </List>
);
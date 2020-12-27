import React from 'react';
import {
  List,
  Datagrid, TextField, EmailField,
  UrlField, Create, SimpleForm,
  TextInput, Edit, ReferenceField, SimpleList, SelectInput, ReferenceInput
} from 'react-admin';
import MyUrlField from "./MyUrlField";
import {useMediaQuery} from "@material-ui/core";

export const UserList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  
  return (
    <List {...props}>
      {
        isSmall ? (
          <SimpleList
            primaryText={record => record.name}
            secondaryText={record => record.role}
            tertiaryText={record => record.password}
          />
        ) : (
          <Datagrid rowClick='edit'>
            <TextField source='id'/>
            <TextField source='name'/>
            <TextField source='role'/>
            <TextField source='username'/>
            <EmailField source='email'/>
            <TextField source='phone'/>
        </Datagrid>)
      }
    </List>
  )
}

export const UserCreate = props =>(
    <Create {...props}>
      <SimpleForm>
        <TextInput label="id" source="id"/>
        <TextInput label="Имя полное" source="name"/>
        <TextInput label="Псевдоним" source='username'/>
        <EmailField source='email'/>
        <TextInput source='address.street' label='Address'/>
        <TextInput source='phone'/>
        {/*<UrlField source='website' />*/}
        <MyUrlField source='website'/>
        <TextField source='company.name' label='Company'/>
      </SimpleForm>
    </Create>
  )

export const UserEdit = props =>(
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="id" source="id"/>
      <TextInput label="Имя полное" source="name"/>
      <TextInput label="Псевдоним" source='username'/>
      <TextInput label="Пароль" source='password'/>
      <TextInput source='email' label="почта"/>
      <TextInput source='address.street' label='Адрес'/>
      <TextInput source='phone'/>
      {/*<UrlField source='website' />*/}
      <MyUrlField source='website'/>
      <TextField source='company.name' label='Company'/>
    </SimpleForm>
  </Edit>
)
  

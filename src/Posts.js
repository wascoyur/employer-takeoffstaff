import React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
  Create,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  Filter
} from 'react-admin'

export const PostEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props =>{
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText= "name"/>
      </ReferenceInput>
      <TextInput source="title"/>
      <TextInput multiline source="body"/>
    </SimpleForm>
  </Create>
};

export const PostList = props => (
  <List filters={<PostFilter/>} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);

export const PostFilter = (props) =>(
  <Filter {...props}>
    <TextInput label="Ввести здесь" source="q" alwaysOn/>
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>)

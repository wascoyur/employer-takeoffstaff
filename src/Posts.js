import React from 'react';
import {useMediaQuery} from '@material-ui/core'
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
  Create,
  List,
  SimpleList,
  Datagrid,
  TextField,
  ReferenceField,
  Filter,
  EditButton
} from 'react-admin'

export const PostEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="Имя" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = props =>(
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title"/>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText= "name"/>
      </ReferenceInput>
      
      <TextInput multiline source="body"/>
    </SimpleForm>
  </Create>
);

export const PostList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="Head:User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}


export const PostFilter = (props) =>(
  <Filter {...props}>
    <TextInput label="Ввести здесь" source="q" alwaysOn/>
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name"/>
    </ReferenceInput>
  </Filter>)

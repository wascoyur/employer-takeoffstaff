import React from 'react';
import {SimpleList, List, Datagrid, TextField, ReferenceField, EditButton} from 'react-admin'
import {useMediaQuery} from "@material-ui/core";

export const RolesView = (props)=> {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List {...props}>
      {
        isSmall ? (
          <SimpleList
            primaryText={record => record.role}
          />
        ) : (
            <Datagrid>
              <TextField label="Роли" source="role"/>
            </Datagrid>
          )
      }
    </List>
  )
 }




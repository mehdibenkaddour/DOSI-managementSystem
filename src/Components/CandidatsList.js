import React from 'react';
import { ReferenceField,FilterButton,ExportButton,CreateButton,TopToolbar,List,NumberField,BooleanField,DateField ,EditButton, DeleteButton ,Filter, Datagrid, TextField, SearchInput, } from 'react-admin';

const ListActions = (props) => (
  <TopToolbar>
      <CreateButton/>
      <ExportButton/>
  </TopToolbar>
);

const CandidatsList = (props) => (
  <List {...props} title='List of Formations' actions={<ListActions/>}>
    <Datagrid>
      <TextField disabled source='noCandidat' />
      <TextField source='nom' />
      <TextField source='prenom' />
      <DateField source='dateNaissance' />
      <TextField source='email' />
      <DeleteButton basePath="/candidats" />
    </Datagrid>
  </List>
);

export default CandidatsList;
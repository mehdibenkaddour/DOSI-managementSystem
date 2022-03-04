import React from 'react';
import { FilterButton,ExportButton,CreateButton,TopToolbar,List,NumberField,BooleanField,DateField ,EditButton, DeleteButton ,Filter, Datagrid, TextField, SearchInput, } from 'react-admin';

const ListActions = (props) => (
  <TopToolbar>
      <CreateButton/>
      <ExportButton/>
  </TopToolbar>
);

const EnseignantsList = (props) => (
  <List {...props} title='Listes des enseignants' actions={<ListActions/>}>
    <Datagrid>
      <NumberField source="noEnseignant"/>
      <TextField disabled source='adresse' />
      <TextField source='emailPerso' />
      <TextField source='emailUbo' />
      <TextField source='mobile' />
      <TextField source='nom' />
      <TextField source='pays' />
      <TextField source='prenom' />
      <TextField source='sexe' />
      <TextField source='ville' />
      <NumberField source="telephone"/>
      <DeleteButton basePath="/enseignants" />
    </Datagrid>
  </List>
);
export default EnseignantsList;
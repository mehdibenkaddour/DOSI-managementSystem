import React from 'react';
import { FilterButton,ExportButton,CreateButton,TopToolbar,List,NumberField,BooleanField,DateField ,EditButton, DeleteButton ,Filter, Datagrid, TextField, SearchInput, } from 'react-admin';

const ListActions = (props) => (
  <TopToolbar>
      <CreateButton/>
      <ExportButton/>
  </TopToolbar>
);

const FormationsList = (props) => (
  <List {...props} title='List of Formations' actions={<ListActions/>}>
    <Datagrid>
      <TextField disabled source='codeFormation' />
      <TextField source='nomFormation' />
      <BooleanField source="doubleDiplome"/>
      <DateField source='debutAccreditation' />
      <DateField source='finAccreditation' />
      <NumberField source="n0Annee" label="Nombre D'année" sortByOrder='ASC'/>
      <EditButton basePath="/formations" />
      <DeleteButton basePath="/formations" />
    </Datagrid>
  </List>
);

export default FormationsList;
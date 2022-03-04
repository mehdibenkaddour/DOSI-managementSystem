import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  NumberInput,
} from 'react-admin';

const EnseignantCreate = (props) => (
  <Create {...props} title="Creation d'Enseignant'">
    <SimpleForm>
      <TextInput source='adresse' />
      <TextInput source='codePostal' />
      <TextInput source='emailPerso' />
      <TextInput source='emailUbo' />
      <TextInput source='mobile' />
      <NumberInput source='noEnseignant' label="Numero d'enseignant"/>
      <TextInput source="nom"/>
      <TextInput source="pays"/>
      <TextInput source="prenom"/>
      <TextInput source="sexe"/>
      <TextInput source="telephone"/>
      <TextInput source="type"/>
      <TextInput source="ville"/>
    </SimpleForm>
  </Create>
);

export default EnseignantCreate;
import React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  NumberInput,
} from 'react-admin';

const FormationCreate = (props) => (
  <Create {...props} title="Creation d'une Formation">
    <SimpleForm>
      <TextInput source='codeFormation' />
      <TextInput source='nomFormation' />
      <DateInput source='debutAccreditation' />
      <TextInput source='diplome' />
      <TextInput source="doubleDiplome"/>
      <DateInput source='finAccreditation' />
      <NumberInput source='n0Annee' label="Nombre d'année"/>
    </SimpleForm>
  </Create>
);

export default FormationCreate;
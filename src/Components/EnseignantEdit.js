import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  SelectInput,
} from 'react-admin';

const EnseignantEdit = (props) => (
  <Edit {...props} title="Edition d'ensignant">
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput disabled source='codeFormation' />
      <TextInput source='nomFormation' />
    </SimpleForm>
  </Edit>
);

export default EnseignantEdit;
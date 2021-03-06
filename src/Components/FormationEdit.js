import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  SelectInput,
} from 'react-admin';

const FormationEdit = (props) => (
  <Edit {...props} title="Edition d'une formation">
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput disabled source='codeFormation' />
      <TextInput source='nomFormation' />
    </SimpleForm>
  </Edit>
);

export default FormationEdit;
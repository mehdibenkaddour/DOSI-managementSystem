import logo from './logo.svg';
import './App.css';
import { fetchUtils,Admin, Resource } from 'react-admin';
import FormationsList from './Components/FormationsList';
import dataProviderService from './DataProvider/dataProviderService';
import FormationEdit from './Components/FormationEdit';
import FormationCreate from './Components/FormationCreate';
import EnseignantsList from './Components/EnseignantsList';
import EnseignantEdit from './Components/EnseignantEdit';
import EnseignantCreate from './Components/EnseignantCreate';
import CandidatsList from './Components/CandidatsList';


function App() {
  return (
    <Admin dataProvider={dataProviderService} >
      <Resource name='formations' list={FormationsList} edit={FormationEdit} create={FormationCreate}/>
      <Resource name='enseignants' list={EnseignantsList} edit={EnseignantEdit} create={EnseignantCreate}/>
      <Resource name='candidats' list={CandidatsList}/>
    </Admin>
  );
}

export default App;

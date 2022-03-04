import {CustomDataProviderFormation} from './dataProviderRessource/SpringRestProviderFormation.tsx';
import {CustomDataProviderEnseignant} from './dataProviderRessource/SpringRestProviderEnseignant.tsx';
import { CustomDataProviderCandidat } from './dataProviderRessource/SpringRestProviderCandidat.tsx';
import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    GET_MANY,
    GET_MANY_REFERENCE,
  } from 'react-admin';

  
  const dataProviders = [ 
    {
      dataProvider: CustomDataProviderFormation,
      resources: ['formations'],
    },
    {
      dataProvider: CustomDataProviderEnseignant,
      resources: ['enseignants'],
    },
    {
      dataProvider: CustomDataProviderCandidat,
      resources: ['candidats'],
    }

  ];
  
  export default (type, resource, params) => {
    const dataProviderMapping = dataProviders.find((dp) =>
      dp.resources.includes(resource));
  
    const mappingType = {
      [GET_LIST]: 'getList',
      [GET_ONE]: 'getOne',
      [GET_MANY]: 'getMany',
      [GET_MANY_REFERENCE]: 'getManyReference',
      [CREATE]: 'create',
      [UPDATE]: 'update',
      [UPDATE_MANY]: 'updateMany',
      [DELETE]: 'delete',
    };
  
    return dataProviderMapping.dataProvider[mappingType[type]](resource, params);
  };
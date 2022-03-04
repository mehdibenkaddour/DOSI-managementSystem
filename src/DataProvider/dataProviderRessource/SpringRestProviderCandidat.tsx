import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import { ErrorToast } from "../../utils/helper";

const apiUrl = "https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io";

const httpClient = (url, options = {}) => {
  
  return fetchUtils.fetchJson(url, options);
};
function dynamicSort(property : string, order : string){
  let sortOrder = 1;
  if (order === "DESC") {
      sortOrder = -1;
  }
  return function (a : any, b : any){
      let aProp = a[property];
      let bProp = b[property];
      if (!a.hasOwnProperty(property)) {
          aProp = ''
      }
      if (!b.hasOwnProperty(property)) {
          bProp = ''
      }
      const result = (aProp < bProp) ? -1 : (aProp > bProp) ? 1 : 0;
      return result * sortOrder;
  }
}

export const CustomDataProviderCandidat = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ headers, json }) => ({
      data: json.sort(dynamicSort(field, order)).map(obj=> ({ ...obj, id:obj.noCandidat})),
      total: json.length,
      //   data: json,
      //   total: json?.length,
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
      console.log(params);
      json.id= params.id;
      return {
        //   data: json?.results,
        data: json,
      };
    }),

  update: (resource, params) =>{
    return httpClient(`${apiUrl}/${resource}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ headers, json }) => {
    json.id = json.codeFormation;
    return ({
      data: json,
    })
  });
  },
  create: (resource, params) => {

    var contest_create_url = `${apiUrl}/${resource}`;
    const bodyData = {
      ...params.data,
      id:params.data.codeFormation
    };
    return httpClient(contest_create_url, {
      method: "POST",
      body: JSON.stringify(bodyData),
    })
      .then(({ json }) => {
        return { data: { ...params.data, id: json.codeFormaion } };
      })
      .catch((error) => {
        if (error.status < 400 || error.status >= 500)
          // alert(JSON.stringify(error.body.error.message.errors[0].message));
          ErrorToast({
            msg: JSON.stringify(error.body.error.message.errors[0].message),
          });
      });
  },

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    })
      .then(({ json }) => {
        if (!json?.success) {
          ErrorToast({
            msg: json?.error,
          });
          return json;
        }
        return { data: json };
      })
      .catch((error) => {
        if (error)
          ErrorToast({
            msg: error?.body?.error?.message?.errors[0]?.message,
          });
      }),
};
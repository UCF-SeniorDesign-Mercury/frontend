import { url, getHeaders } from './api_settings';

//Update User
export const updateUser = async (data: unknown): Promise<unknown> => {
  const header = await getHeaders();

  return new Promise(function(resolve,reject){
    fetch(url + '/users/update_user', {
      method: 'PUT',
      mode: 'cors',
      headers: header,
      body: JSON.stringify(data),
    })
      .then(async response => {
        console.log(response);
        if (response.status == 200 || response.status == 201) {          
          resolve('User Data Updated Successfully');
        }
        else {
          if (response.status == 400)
            reject('Status 400: Bad Request');
          else if (response.status == 401)
            reject('Status 401: Unauthorized - the provided token is not valid.');
          else if (response.status == 404)
            reject('Status 404: File not found.');
          else if (response.status == 415)
            reject('Status 415: Unsupported media type.');
          else if (response.status == 500)
            reject('Status 500: Internal API Error.');
          reject('Error. Please try again later.');
        }
      })
      .catch(err => console.log(err));
  });
};

//Register User
export const registerUser = async (descritption: string, display_name: string, phone: string, profile_picture: string): Promise<string> => {
  const data = {
    descritption: descritption,
    display_name: display_name,
    phone: phone,
    profile_picture: profile_picture,
  };
  console.log(JSON.stringify(data));

  const header = await getHeaders();

  return new Promise(function(resolve,reject){
    fetch(url + '/users/register_user', {
      method: 'POST',
      mode: 'cors',
      headers: header,
      body: JSON.stringify(data)
    })
      .then(async response => {
        console.log(response);
        if (response.status == 201) {          
          resolve('File Uploaded Successfully');
        }
        else {
          if (response.status == 400)
            reject('Status 400: Bad Request');
          else if (response.status == 401)
            reject('Status 401: Unauthorized - the provided token is not valid.');
          else if (response.status == 404)
            reject('Status 404: File not found.');
          else if (response.status == 415)
            reject('Status 415: Unsupported media type.');
          else if (response.status == 500)
            reject('Status 500: Internal API Error.');
          reject('Error. Please try again later.');
        }
      })
      .catch(err => console.log(err));
  });
};


//Get User
export const getUser = async (): Promise<unknown> => {
  const header = await getHeaders();

  return new Promise(function(resolve,reject){
    fetch(url + '/users/get_user', {
      method: 'GET',
      mode: 'cors',
      headers: header,
    })
      .then(async response => {
        console.log(response);
        if (response.status == 200) {          
          const data = await response.json();
          //console.log(data);
          resolve(data);
        }
        else {
          if (response.status == 400)
            reject('Status 400: Bad Request');
          else if (response.status == 401)
            reject('Status 401: Unauthorized - the provided token is not valid.');
          else if (response.status == 404)
            reject('Status 404: File not found.');
          else if (response.status == 415)
            reject('Status 415: Unsupported media type.');
          else if (response.status == 500)
            reject('Status 500: Internal API Error.');
          reject('Error. Please try again later.');
        }
      })
      .catch(err => console.log(err));
  });
};

//delete user

export const deleteUser = async (userID: string): Promise<string> => {
  const header = await getHeaders();

  return new Promise(function (resolve, reject) {
    fetch(url + '/users/delete_user/' + userID, {
      method: 'DELETE',
      mode: 'cors',
      headers: header,
    })
      .then(async response => {
        console.log(response);
        if (response.status == 200) {
          resolve('User Deleted Successfully');
        }
        else {
          if (response.status == 400)
            reject('Status 400: Bad Request');
          else if (response.status == 401)
            reject('Status 401: Unauthorized - the provided token is not valid.');
          else if (response.status == 404)
            reject('Status 404: User not found.');
          else if (response.status == 500)
            reject('Status 500: Internal API Error.');
          reject('Error. Please try again later.');
        }
      })
      .catch(err => console.log(err));
  });
};

//revoke role

export const revokeRole = async (email: string): Promise<string> => {
  const header = await getHeaders();

  return new Promise(function (resolve, reject) {
    fetch(url + '/users/revoke_role/' + email, {
      method: 'DELETE',
      mode: 'cors',
      headers: header,
    })
      .then(async response => {
        console.log(response);
        if (response.status == 200) {
          resolve('File Deleted Successfully');
        }
        else {
          if (response.status == 400)
            reject('Status 400: Bad Request');
          else if (response.status == 401)
            reject('Status 401: Unauthorized - the provided token is not valid.');
          else if (response.status == 404)
            reject('Status 404: File not found.');
          else if (response.status == 415)
            reject('Status 415: Unsupported media type.');
          else if (response.status == 500)
            reject('Status 500: Internal API Error.');
          reject('Error. Please try again later.');
        }
      })
      .catch(err => console.log(err));
  });
};

export const assignRole = async (email: string, level: string, rank: string, role: string): Promise<string> => {
  const data = {
    email: email,
    level: level,
    rank: rank,
    role: role,
  };
  console.log(JSON.stringify(data));

  const header = await getHeaders();

  return new Promise(function(resolve,reject){
    fetch(url + '/users/assign_role', {
      method: 'POST',
      mode: 'cors',
      headers: header,
      body: JSON.stringify(data)
    })
      .then(async response => {
        console.log(response);
        if (response.status == 200) {          
          resolve('User Role Uploaded Successfully');
        }
        else {
          if (response.status == 404)
            reject('Status 404: User not found.');
        }
      })
      .catch(err => console.log(err));
  });
};

export const getUsers = async (): Promise<unknown> => {
  const header = await getHeaders();

  return new Promise(function(resolve,reject){
    fetch(url + '/users/get_users/', {
      method: 'GET',
      mode: 'cors',
      headers: header,
    })
      .then(async response => {
        console.log(response);
        if (response.status == 200) {          
          const data = await response.json();
          //console.log(data);
          resolve(data);
        }
        else {
          if (response.status == 400)
            reject('Status 400: Bad Request');
          else if (response.status == 401)
            reject('Status 401: Unauthorized - the provided token is not valid.');
          else if (response.status == 404)
            reject('Status 404: File not found.');
          else if (response.status == 415)
            reject('Status 415: Unsupported media type.');
          else if (response.status == 500)
            reject('Status 500: Internal API Error.');
          reject('Error. Please try again later.');
        }
      })
      .catch(err => console.log(err));
  });
};
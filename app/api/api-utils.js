export const getData = async (url) => {
    try {
      const response = await fetch(url);
      if (response.status !== 200) {
        throw new Error("Ошибка получения данных");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  
  export const isResponseOk = (response) => {
    return !(response instanceof Error);
  }; 
  
  export const normalizeDataObject = (obj) => {
    let str = JSON.stringify(obj)
    
    str = str.replaceAll('_id', 'id');
    const newObj = JSON.parse(str)
    const result = { ...newObj, category: newObj.categories }
    return result;
  }
  export  const normalizeData = (data) =>{
    console.log(data)
    return data.map((item) =>{
        return normalizeDataObject(item)
    } )
  }
  
  export const getNormalizedGamesDataByCategory = async (url, category) => {
    try{
    const data = await getData(`${url}?categories.name=${category}`);
    if (!data.length){
      throw new Error("Нет игр в категории");
    }
    return isResponseOk(data) ? normalizeData(data) : data;
    }catch(error){
      return error
    }
    
  }; 
  
  export const  getNormalizedGameDataById = async (url, id) => {
    const data = await getData(`${url}/${id}`);
    return isResponseOk(data) ? normalizeDataObject(data) : data;
  };

export let authorize = async (url, data) =>{
  try{
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (response.status !== 200) {
      throw new Error("Ошибка авторизации");
    }
    const result = await response.json();
    return result;
  }catch(error){
    return error
  }
};

export let GetMe = async (url, jwt) => {
  try{
    let response =  await fetch(url, {
      method: "GET",
      headers: { Authorization: `Bearer ${jwt}` },
    });
    if (response.status !== 200){
      throw new Error("Ошибка получения данных"); 
    }
    let result = await response.json()
    return result
  }catch(error){
    return error
  }
};
export  function setJWT(jwt){
   localStorage.setItem("jwt", jwt)
};

export function getJWT(){
  return localStorage.getItem("jwt")
};

export function removeJWT(){
  localStorage.removeItem("jwt")
};
  
export const checkIfUserVoted = (game, userId) => {
  return game.users.find((user) => user.id === userId);
};

export let vote = async (url, jwt, usersArray ) =>{
  try{
    let response = await fetch(url, {
      method: "PUT",
      headers : {'Content-Type': 'application/json', 
      Authorization: `Bearer ${jwt}`},
      body: JSON.stringify({ users: usersArray }),
    })
    if (response.status !== 200) {
      throw new Error("Ошибка голосования");
    }
    const result = await response.json();
    return result;
  }catch(error){
    return error
  }

}
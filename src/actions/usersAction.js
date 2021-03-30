const addName = (users) => {
    return {
        type : 'ADD_NAME',
        payload: users
    }
  }
  const addEmail = (email) => {
    return {
        type : 'ADD_EMAIL',
        payload: email
    }
  }
  const addPassword = (password) => {
    return {
        type : 'ADD_PASSWORD',
        payload: password
    }
  }
  

  
  export {addName, addEmail, addPassword}
  
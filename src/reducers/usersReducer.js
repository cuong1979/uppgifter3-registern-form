const nameReducer = (state = '', action) => {
    switch (action.type){
        case 'ADD_NAME':
            return action.payload
            
            default:
                return state;
    }
  };
  const emailReducer = (state = '', action) => {
    switch (action.type){
        case 'ADD_EMAIL':
            return action.payload
            
            default:
                return state;
    }
  };
  const passwordReducer = (state = '', action) => {
    switch (action.type){
        case 'ADD_PASSWORD':
            return action.payload
            
            default:
                return state;
    }
  }
  
  export {nameReducer, emailReducer, passwordReducer}
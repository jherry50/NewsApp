// return bool is inverted to lessen code used when validating in components

const validators = {
    isRequired: (value = "", len = 1, max = 0, select = false) => {
      if (!select)    
        return max < 1 ? value.toString().length >= len ? true : false : value.toString().length >= len && value.toString().length <= max ? true : false;
  
      return value === 0 ? false : true;
    },
    isValidEmail: (value = "") => {
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return mailformat.test(value) === false ? false : true;
    },
    isLength: (value = 0) => {
        if(value.length >= 6){
          return true
        }else{
          return false
        }
      },
  }
  
  export default validators;
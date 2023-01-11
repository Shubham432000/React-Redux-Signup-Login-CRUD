const initialState = {
  Data: [],
};

const formValue = (state, payload) => {
  return {
    ...state,

    
    Data: [...state.Data, payload],
  };
};

const deletValue = (state, payload) => {
  const newList = state.Data.filter((item) => item.id !== payload);
  

  return {
    ...state,
    Data: newList,
  };
};

const editData = (state, payload) => {
  const updateList = state.Data.find((item) => item.id == payload);

  return {
    ...state,
    Data1: updateList,
  };
};

const updateValue = (state, payload) => {
  

  const newValue = state.Data.map((item) => {
    if (item.id == payload.id) {
      return payload;
    } else {
      return item;
    }
  });

  console.log("newvalue", newValue);
  console.log("newstate", state);
  return {
    ...state,
    Data: newValue,
  };
};

const formReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "FORMDATA":
      return formValue(state, action.payload);

    case "DELETDATA":
      return deletValue(state, action.payload);

    case "EDITDATA":
      return editData(state, action.payload);

    case "UPDATEVALUE":
      return updateValue(state, action.payload);

    default:
      return state;
  }
};
export default formReducer;

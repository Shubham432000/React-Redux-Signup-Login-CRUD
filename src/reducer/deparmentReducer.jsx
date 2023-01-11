const initialState = {
  Info: []
};

const depaData = (state, payload) => {
  return {
    ...state,
    Info: [...state.Info, payload]
  };
};

const depaDelet = (state, payload) => {
  const newList = state.Info.filter((item) => item.id !== payload);

  return {
    ...state,
    Info: newList
  };
};

const depaEdit = (state, payload) => {
  const updateList = state.Info.find((item) => item.id == payload);

  return {
    ...state,
    Info1: updateList
  };
};

const depaUpdate = (state, payload) => {
  const newData = state.Info.map((item) => {
    if (item.id == payload.id) {
      return payload;
    } else {
      return item;
    }
  });

  return {
    ...state,
    Info: newData
  };
};

const deparmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPDATA':
      return depaData(state, action.payload);
    case 'DEPDELET':
      return depaDelet(state, action.payload);

    case 'DEPEDIT':
      return depaEdit(state, action.payload);

    case 'DEPUPDATE':
      return depaUpdate(state, action.payload);

    default:
      return state;
  }
};

export default deparmentReducer;

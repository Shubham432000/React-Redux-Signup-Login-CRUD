const initialState = {
  Info: []
};

const deparmentData = (state, payload) => {
  return {
    ...state,
    Info: [...state.Info, payload]
  };
};

const deparmentDelete = (state, payload) => {
  const newList = state.Info.filter((item) => item.id !== payload);

  return {
    ...state,
    Info: newList
  };
};

const deparmentEdit = (state, payload) => {
  const updateList = state.Info.find((item) => item.id == payload);

  return {
    ...state,
    Info1: updateList
  };
};

const deparmentUpdate = (state, payload) => {
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
      return deparmentData(state, action.payload);
    case 'DEPDELET':
      return deparmentDelete(state, action.payload);

    case 'DEPEDIT':
      return deparmentEdit(state, action.payload);

    case 'DEPUPDATE':
      return deparmentUpdate(state, action.payload);

    default:
      return state;
  }
};

export default deparmentReducer;

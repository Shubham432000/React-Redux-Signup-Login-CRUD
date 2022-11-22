const initialState={
    Info:[]
}

const depaData =(state,payload)=>{
return{
    ...state,
    Info:[...state.Info,payload]
}
}

const deparmentReducer = (state=initialState,action) => {
    console.log("deparment",state)
    switch(action.type){
        case "DEPDATA":
  return depaData(state,action.payload)
  

  default:
    return state;
  
}
}

export default deparmentReducer;

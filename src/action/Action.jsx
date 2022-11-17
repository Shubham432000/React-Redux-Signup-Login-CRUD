
export const formData =(data)=>{
    return{
        type:"FORMDATA",
        payload:data
    }
}

export const deletData =(data)=>{
    return{
        type:"DELETDATA",
         payload:data
        
    }
}

export const editData =(data)=>{
    return{
        type:"EDITDATA",
         payload:data
        
    }
}

export const updateValue =(data)=>{
    return{
        type:"UPDATEVALUE",
         payload:data
        
    }
}

export const signUp =(data)=>{
    return{
        type:"SIGNUP",
        payload:data
    }
}

export const logIn =(data)=>{
    return{
        type:"LOGIN",
        payload:data
    }
}

export const logOut =()=>{
    return{
        type:"LOGOUT",
        
    }
}
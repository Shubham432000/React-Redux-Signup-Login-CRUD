

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

export const depaValue =(data)=>{
    return{
        type:"DEPDATA",
        payload:data
    }
}

export const depaDelet =(data)=>{
    return{
        type:"DEPDELET",
        payload:data
    }
}

export const depaEdit =(data)=>{
    return{
        type:"DEPEDIT",
        payload:data
    }
}

export const depaUpdate =(data)=>{
    return{
        type:"DEPUPDATE",
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
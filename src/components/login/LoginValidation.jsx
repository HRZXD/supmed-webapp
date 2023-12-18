function Validation(values) {
    let error = {}
    if(values.userID === ""){
        error.userID = "User ID must be provided"
    }else{
        error.userID = ""
    }
    
    if(values.password === ""){
        error.password = "Password must be provided"
    }else{
        error.password = ""
    }
    return error;
}
export default Validation;
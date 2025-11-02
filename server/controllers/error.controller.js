function handleError(req, res) {
    // Your code to handle
}

function getErrorMessage(errMsg){
    console.log(errMsg);
}

//Export the controller function
export default{
    handleError: handleError,
    getErrorMessage: getErrorMessage
}
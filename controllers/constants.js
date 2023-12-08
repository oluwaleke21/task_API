export const constants = {
    handleError: (err, res) => {
        // handle error message 
        const errorObj = {}
        err.errors.map(error => {
            errorObj[error.path] = error.message
        })
        return res.status(400)
            .send(errorObj)
    }
}


// constants.handleError(err, res);
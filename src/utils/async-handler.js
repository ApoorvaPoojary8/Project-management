const asyncHandler = (requestHandler) =>{
    return (eeq,res,next) => {
        Promise
        .resolve(requestHandler(req,res,next))
        .catch((err) => next(err))


    }
}
export { asyncHandler };
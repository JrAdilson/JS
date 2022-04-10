// try{
//     try{
//         throw new Error("ops");
//     }
// finally{
//     console.log("finally");
//     }
// }
// catch (ex){
//     console.log("outer", ex.message)
// }

// try{
//     try{
//         throw new Error("ops")
//     }
// catch(ex){
//     console.error("inner", ex.message)
// }
// finally {
//     console.log("finally")
// }
// }
// catch(ex){
//     console.error("outer", ex.message)
// }

try{
    try{
        throw new Error(oops)
    }
    catch(ex){
        console.error("inner", ex.message)
        throw ex
    }
    finally{
        console.log("finally")
    }
}
catch (ex){
    console.error("outer", ex.message)
}
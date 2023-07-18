export const getProducts = async() => {
    try{
         const res = await fetch('https://dummyjson.com/products/')
         const actualRes = await res.json()
         return actualRes
    }catch(err){
        console.log(err, "Something went wrong as i didn't create this api ;)")
    }
}
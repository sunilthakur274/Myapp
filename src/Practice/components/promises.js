export default function Promises()
{   
    const obj1 = new Promise((resolve,reject)=>{
        let arr=[2,4,5,3]
        resolve(arr)
    })

    obj1.then((data)=>{console.log(data)})
    
    return(<> </>)
}




function resolveAfter2sec(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
       resolve("Hi I am from promise")
        },4000)
    })
};


async function asyncCall() {
    console.log("Before calling")
    const a =  await resolveAfter2sec()
    console.log(a)
    console.log("After Calling")
}

asyncCall()


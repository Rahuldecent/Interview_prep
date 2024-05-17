
function a(callback){
    console.log("hi.......")
    setTimeout(function(){
        const name = "Rahul Kumar"
        callback(name)
    },300)
}


console.log("helllooo")
a(function(data){
  console.log(`Hello my name is ${data}`)
  console.log("kkkk")
})

console.log("enddnddndnd")


// callback hell
setTimeout (() => {
    console.log("Hello ,");
    setTimeout ( () => {
        console.log("i");
        setTimeout (() => {
            console.log("am");
            setTimeout (() => {
                console.log("from");
                setTimeout (() => {
                    console.log("callback Hell")
                },2000)
            },2000)
        },2000)
    },2000)
},2000);

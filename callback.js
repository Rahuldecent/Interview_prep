
function a(callback){
    setTimeout(function(){
        const name = "Rahul Kumar"
        callback(name)
    },300)
}


console.log("helllooo")
a(function(data){
  console.log(`Hello my name is ${data}`)
})

console.log("enddnddndnd")
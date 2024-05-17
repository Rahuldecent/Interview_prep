const res =  fetch("https://jsonplaceholder.typicode.com/todos/5")
res.then(res => res.json()).then(res =>console.log(res))
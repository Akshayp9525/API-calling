// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// let p = fetch("https://jsonplaceholder.typicode.com/todos/1")
// p.then((value1) => {
//     console.log(value1.status)
//     console.log(value1.ok)
//     console.log(value1.headers)
//     return value1.json()
// }).then((value2) => {
//     console.log(value2)
// }
// )

//second approch

async function abc(){
    var response = await fetch ("https://jsonplaceholder.typicode.com/todos")
    let data = await response.json();
    
    return data;
}


abc().then(response=>{
    console.log(response);
})
// function make_api_call(id){
//     return rp({
//         url : `${URL}${id}`,
//         method : 'GET',
//         json : true
//     })
// }

// async function processUsers(){
//     let result;
//     for(let i = 0; i < abc.length; i++){
//         result = await abc(abc[i].Id);
//         abc[i]['result'] = result;
//     }
//     return abc;
// }

// async function doTask(){
//     let result = await processUsers();
//     console.log(result);
// }

// doTask();



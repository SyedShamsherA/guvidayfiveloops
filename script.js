var json = [
    {
        "id":"Shamsher",
        "message":"for given json iterate over all for loops",
        "task": "zen task",
        "mail": "abc@xyz.com"
    },
    {
        "id":"Syed",
        "message":"for given json iterate over all for loops",
        "task":"zen portal",
        "mail":"efg@ghi.com"
    }
]

//for loops
for(var i=0; i<json.length; i++){
    var obj = json[i];

    console.log(obj.id)
    console.log(obj.message)
    console.log(obj.task)
    console.log(obj.mail)
}

//for each
json.forEach(function(obj) {console.log(obj.message)})

//for in
for (var key in json){
    if(json.hasOwnProperty(key)){
        console.log(json[key].id)
    }
}

// for of
let text = '';
for (let x of json[key].id){
    text += x;
}
console.log(text);
const person ={
    name: "Andrew",
    age: 26,
    location: {
        city: "Phila",
        temp: 92
    }
}

const book = {
    title:"Ego is the Enemy",
     author: "Ryan",
     publisher: {
         name:"penguin"
     }
}

const {name : publisherName = "selfpublished"} = book.publisher

console.log(publisherName)
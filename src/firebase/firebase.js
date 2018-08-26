import * as firebase from "firebase"

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export {firebase, database as default}

// database.ref("expenses").on("child_removed", (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref("expenses")
// //     .once("value")
// //     .then((snapshot)=>{
// //         const expenses = []
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         });
// //         console.log(expenses)
// // })
// // database.ref("expenses").on("value", (snapshot)=>{
// //     const expenses = []
// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     });
// //     console.log(expenses)
// // })



// // database.ref("expenses").push({
// //     description: "expense1",
// //     note:"hola",
// //     amount: 1,
// //     createdAt:1
// // })


// // database.ref().on("value", (snapshot)=>{console.log(snapshot.val())})

// // // database.ref("location/city").once("value")
// // // .then((snapshot)=>{
// // //     const val =snapshot.val()
// // //     console.log(val)
// // // })
// // // .catch((e)=>{
// // //     console.log(e)
// // // })
// // database.ref().set({
// //     name: "Juan Rojas",
// //     age: 26,
// //     isSingle: true,
// //     location: {
// //         city: "bogota",
// //         country: "Colo"
// //     }
// // }).then(()=>{
// //     console.log("Data is saved")
// // }).catch((error)=>{
// //     console.log("fail", error)
// // })
// // // database.ref("isSingle").set(null)

// // // database.ref("isSingle").remove().then( ()=> {
// // //     console.log("Remove succeeded.")
// // // }).catch( (error)=> {
// // //         console.log("Remove failed: " + error.message)
// // // })

// // database.ref().update({
// //     name: "Sebastian",
// //     age: 27,
// //     job: "Software developer",
// //     isSingle: null,
// //     "location/city": "Chia"
// // })
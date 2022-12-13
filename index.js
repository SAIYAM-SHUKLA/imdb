const express = require('express')
const imdb = require("imdb-api")
const app = express()
const path = require("path")
app.use('/public',express.static('public'))


//setting server
app.listen(process.env.PORT||8080,()=>console.log("listning on 8000")) 
app.set("view engen","ejs")
app.set("views",path.join(__dirname,"/views"))


app.get("/",(req,res)=>{
    res.render("home.ejs")

})
app.get("/submit_movie",(req,res)=>{
    console.log(req.query.movie)
    imdb.get({name: req.query.movie}, {apiKey: 'd86e8850', timeout: 30000}).then(re=>res.render("info.ejs",{re})).catch(re=>res.render("home.ejs"));
     
    // .then(re=>res.render("info.ejs",
    
    
    // {re})).catch(res.render("home.ejs"));

})
// imdb.search({
//     name: 'Toxic Avenger'
//   }, {
//     apiKey: ' d86e8850'
//   }).then(console.log).catch(console.log);
// imdb.get({name: 'How I Met Your Mother'}, {apiKey: 'd86e8850', timeout: 30000}).then(re=>res.render("info.ejs",{re})).catch(re=>res.render("home.ejs"));
// console.log(a.title)
// console.log(imdb.get({name: 'How I Met Your Mother'}, {apiKey: 'd86e8850', timeout: 30000}))s
// import imdb = require('imdb');
// const cli = new imdb.Client({apiKey: 'd86e8850'});
// cli.search({'name': 'The Toxic Avenger'}).then((search) => {
//   for (const result of search.results) {
//     console.log(result.title);
//   }
//   let a = search.result;
// });

// cli.search({'name': 'The Toxic Avenger'}).then((search) => {
//     for (const result of search.results) {
//         console.log(result.title);
//     }
//     let a = search.result;
// });
// console.log(cli);
// imdb.get({name: 'The Toxic Avenger'}, {apiKey: 'd86e8850', timeout: 30000}).then(console.log).catch(console.log);
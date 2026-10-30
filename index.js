import express from "express";

import path from "path";
// type:module OVO JE BOLJE MODERNIJE
// typle: commonjs je ono od prije, const express= require("express");
const app= express();
const __dirname= path.resolve();



let PORT=8000;

// posluzitelj slusa na portu 8000
app.listen(PORT, () => {
	console.log(`server dela na ${PORT}`)
});


// vježbe od 30.10. 
//RUTA/endopoint ="/" koju stranicu želiš
// HTTP metoda je GET po defaultu
// parametri su req HTTPS zahtjev i res HTTPS odgovor


app.get("/", (req, res) => {
	console.log("pozvana je get metoda na definiranom endpointu")
	res.sendFile(__dirname + "/public/hello.html")
})

let pizze =[
	{id:1, naziv: "Margarita", cijena: 30},
	{id:2, naziv: "slavonska", cijena: 30},
	{id:3, naziv: "diavola leonova omiljena", cijena: 30},
]

//ovo je spremljeno na DB (skoro uvijek)
//http šalje GET
app.get("/pizze", (req, res) => {
	console.log("pozvana metoda na /pizze endpointu	")
	res.json(pizze)
})

app.get("/about", (req, res) => {
	console.log("ovo će ispisati o nama")
	res.sendFile(__dirname + "/public/about.html")
})



let useri =[
	{id:1, ime: "Bore", prezime: "Balboa"},
	{id:2, ime: "Karlo", prezime: "Markota"},
	{id:3, ime: "Lokki", prezime: "SBL"},
]


app.get("/users", (req, res) =>{
	console.log("ovo će vratiti korisnike")
	res.json(useri)
})
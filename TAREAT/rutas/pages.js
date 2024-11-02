const express = require("express");
const paht=require("path");
const router = express.Router();

//Rutas

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, '../publico', 'index.html'));
});
router.get("/calculadora",(req,res)=>{
    res.sendFile(path.join(__dirname, '../publico', 'calculadora.html'));
});
router.get("/QR",(req,res)=>{
    res.sendFile(path.join(__dirname, '../publico', 'qur.html'));
});


module.exports = router;
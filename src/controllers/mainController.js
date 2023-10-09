const path = require("path")
const controller = {
    home:(req,res)=>{
        res.send("pslc")
   },
   preview:(req,res)=>{
        res.sendFile(path.join(__dirname, '../views/preview.html'));
   }
}

module.exports = controller;
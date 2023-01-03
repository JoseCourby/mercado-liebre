const express = require ("express");
app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Se prendió en el puerto ${PORT}`);
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./views/index.html"))
})
app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, "./views/register.html"))
})
app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, "./views/login.html"))
})
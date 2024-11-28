// const express=require("http");
// const app=express();

// const server=http.createServer((req,res)=>{
//     if (req.url === "/" && req.method === "GET") {
//         res.write("Hello world");
//         res.end();

//     }
//     else if (req.url === "/data" && req.method === "GET") {
//         res.write(new Date().toString());
//         res.end();
//     }else{
//         res.write("Not found");
//         res.end();
//     }
// });

// const PORT = 5000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require("express");
const app = express ();

app.get("/", (req, res) => {
res.send("Hello World");
});

app.get("/date", (req, res) => {
res.send(new Date().toString());
});

app.use((req, res) => {
res.status(404).send("Page not found");
});

const PORT = 3000;
app. listen(PORT, () => {
console. log(`Server is running on port http://localhost:${PORT}`);
});
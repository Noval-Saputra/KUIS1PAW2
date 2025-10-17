const express = require("express"); // impor module express
const expressLayout = require("express-ejs-layouts"); //impor express-ejs-layouts

const app = express(); // express application
const port = 3000; // port yang akan digunakan 
 
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use(express.static("public"));

app.get("/",(req, res) => { // method (req untuk request, res untuk respon)
  // res.send("Hello World");
  const news = [
    {id : 1, title : "Belajar express", content : "..."},
    {id : 2, title : "Kampung SI 2025", content : "..."},
    {id : 3, title : "Sosialisasi PTA/TA SI", content : "..."}
  ];
  res.render('index', {news, title: "Home", layout: "main"});
});
 
app.get("/about",(req, res) => { 
  // res.send("About Us");
  res.render('about', {title: "About Us", layout: "main"});
});

app.get("/contact",(req, res) => { 
  // res.send("Contact Us");
  //res.sendFile(__dirname + "/contact.html");
  res.render('contact', {title: "Contact Us", layout: "main"});
});

app.get("/prodi",(req, res) => { 
  // res.send("About Us");
  const prodi = [
    {kode : 24, namaProdi : "Sistem Informasi", singkatan : "SI", namaFakultas : "Fakultas Ilmu Komputer an Rekayasa"},
    {kode : 25, namaProdi : "Informatika", singkatan : "IF", namaFakultas : "Fakultas Ilmu Komputer dan Rekayasa"},
    {kode : 11, namaProdi : "Manajemen Informatika", singkatan : "MI", namaFakultas : "Fakultas Ilmu domputer Dan Rekayasa"},
    {kode : 27, namaProdi : "Teknik Elektro", singkatan : "TE", namaFakultas : "Fakultas Ilmu Komputer dan Rekayasa"},
    {kode : 20, namaProdi : "Akuntansi", singkatan : "AK", namaFakultas : "Fakultas Ekonomi dan Bisnis"},
    {kode : 21, namaProdi : "Manajemen", singkatan : "MJ", namaFakultas : "Fakultas Ekonomi dan Bisnis"}
  ];
  res.render('prodi', {prodi, title: "Program Studi", layout: "main"});
});

app.get("/mahasiswa",(req, res) => { 
  res.json({
      status:"Success",
      message: "Data Mahasiswa",
      data: ["Reza", "Gilang", "Fadhil"]
  });
});

app.get("/nilai",(req, res) => { 
  res.json({
      status:"Success",
      message: "Data Nilai",
      data: [
        {mk: "Bahasa Indonesia", nilai: "A"},
        {mk: "PAW 1", nilai: "A"},
        {mk: "PAB 1", nilai: "B+"}
      ]
  });
});


app.get("/fakultas/:id", (req, res) =>{
  // res.send(`Fakultas id : ${req.params.id}`);
  res.send("Fakultas ID : "+ req.params.id);
});

// jika route yang diakses tidak terdaftar, maka ditampilkan not found
app.use("/",(req, res) => {
  res.status(404); // http response code not found
  res.send("<h1>Not Found</h1>");
});

app.listen(port, () => {
  console.log(`Server dapat diakses : http://localhost:${port}`);
});
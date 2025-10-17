// Mengimpor modul express untuk membuat router
const express = require('express');
// Membuat intance router dari express
const router = express.Router();

// Mengimpor controller fakultas untuk menangani logika bisnis
const fakultasController = require('../controllers/fakultasControllers');

// Mengatur rute GET untuk mendapatkan semua data fakultas
router.get('/', fakultasController.getAllFakultas);

// Mengekspor router agar dapat digunakan di file lain (misalnya di app.js)
module.exports = router;
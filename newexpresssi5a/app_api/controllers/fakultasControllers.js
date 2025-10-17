// impor model Fakultas
const fakultas = require('../models/fakultas');

// fungsi untuk mengambil isi collection fakultas
const getAllFakultas = async (req, res) => {
    try {
        // mengambil semua fakultas dari database
        const result = await fakultas.find();
        // mengirimkan respon berisi data fakultas dengan status 200 (OK)
        res.status(200).json(result);
    } catch (error) {
        // jika terjadi error, mengirimkan pesan error dengan status 500 (Internal Server Error)
        res.status(500).json({ message: error.message });
    }
};

// export
module.exports = { getAllFakultas };
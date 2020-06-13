function ageCatConverter() {
    let catAge = document.getElementById("catAge").value;
    document.getElementById("show-converter").innerHTML = catAges(catAge);
}
// document.getElementById("show-converter").innerHTML = (catAge - 2) * 4 + 24;
const catAges = (cat) => {
    const after2 = (cat - 2) * 4 + 24;
    if (cat == 1) {
        return `Kucing yang berusia 1 tahun, sebenarnya memiliki tubuh yang berusia 15 tahun dalam umur manusia`;
    } else if (cat === 2) {
        return `Kucing yang berusia 1 tahun, sebenarnya memiliki tubuh yang berusia 24 tahun dalam umur manusia`;
    } else if (cat >= 2) {
        return `Kucing yang berusia ${cat} tahun, sebenarnya memiliki tubuh yang berusia ${after2} tahun dalam umur manusia`;
    }
};

// document.write(
//     catAges(
//         prompt(
//             "Berapa umur kucing yang igin kamu ketahui umurnya dalam kalender manusia: ketik Number!"
//         )
//     )
// );

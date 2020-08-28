// Soal 1
function halo(nama = "Sanbers") {
  return "Halo Sanbers!";
}
console.log(halo());

// Soal 2

var num1 = 12;
var num2 = 4;
// Function Answer
function kalikan(num1, num2) {
  return num1 * num2;
}

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

// Function Answer
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 4
var arrayDaftarPeserta = ["Asep", "Laki-Laki", "baca buku". 1992];

// Create an object with designated properties, use naming convention: Camel Case (w3schools)
var objDaftarPeserta = {
    nama: "Asep",
    jenisKelamin: "Laki-Laki",
    hobi: "baca buku",
    tahunAkhir: 1992
}

// Soal 5
var objBuah = [{
    nama: "strawberry",
    warna: "merah",
    adaBijinya: "tidak",
    harga: 9000
    },
    {
    nama: "jeruk",
    warna: "oranye",
    adaBijinya: "ada",
    harga: 8000
    },
    {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: "ada",
    harga: 10000
    },
    {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: "tidak",
    harga: 5000
}]
console.log(objBuah[0])

// Soal 6
// Example: Got an array with movie details
var movie1 = ["Transformer", 120, "action, sci-fi", 2010]
// Create function to create object movie from an array
function createObjMovie(arr) {
    // Create new object using new [firefox MDN]
    var objMovie = new Object();
    objMovie.name = arr[0];
    objMovie.duration = arr[1];
    objMovie.genre = arr[2];
    objMovie.tahun = arr[3];
    return objMovie
}
console.log(createObjMovie(movie1))

// OR using a simple function explain in Mozilla MDN
function createObjMovie(name, duration, genre, tahun) {
    this.name = name;
    this.duration = duration;
    this.genre = genre;
    this.tahun = tahun;
}
var myMovie = new createObjMovie("Halo",200, "fantasy", 2100)
console.log(myMovie)
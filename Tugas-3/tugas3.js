// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kataGabung =
  kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat;
console.log(kataGabung);

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var addUp =
  Number(kataPertama) +
  Number(kataKedua) +
  Number(kataKetiga) +
  Number(kataKeempat);
console.log(addUp);

// Soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own!
var kataKetiga = kalimat.substring(15, 18); // do your own!
var kataKeempat = kalimat.substring(19, 24); // do your own!
var kataKelima = kalimat.substring(25, 31); // do your own!

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// Soal 4
var nilai = 80;
if (nilai >= 80) {
  console.log("A");
} else if (nilai < 80 && nilai >= 70) {
  console.log("B");
} else if (nilai < 70 && nilai >= 60) {
  console.log("C");
} else if (nilai < 60 && nilai >= 50) {
  console.log("D");
} else {
  console.log("E");
}

// Soal 5
var tanggal = 5;
var bulan = 10;
var tahun = 1995;
var buttonPushed = 1;
switch (bulan) {
  case 1: {
    console.log(
      "Selamat ulang tahun " + tanggal + "-" + "Januari" + "-" + tahun
    );
    break;
  }
  case 2: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 3: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 4: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 5: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 6: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 7: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 8: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 9: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 10: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 11: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  case 12: {
    console.log("Bukan Bulan Ulang Tahun Anda");
    break;
  }
  default: {
    console.log("Bukan Bulan Ulang Tahun Anda");
  }
}

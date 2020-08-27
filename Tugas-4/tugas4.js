// Soal 1
var count = 1;
while (count != 0) {
  while (count <= 20) {
    if (count == 1) {
      console.log("Looping Pertama");
    }
    if (count % 2 == 0) {
      console.log(count + " - I Love Coding");
    }
    count++;
  }
  while (count > 0) {
    if (count == 21) {
      console.log("Looping Kedua");
    }
    if (count % 2 == 0) {
      console.log(count + " - I will become a frontend developer");
    }
    count--;
  }
}

// Soal 2
for (var i = 1; i < 21; i++) {
  if (i == 1 || i % 2 != 0) {
    if (i % 3 == 0) {
      console.log(i + " - I Love Coding");
    } else {
      console.log(i + " - Santai");
    }
  }
  if (i % 2 == 0) {
    console.log(i + " - Berkualitas");
  }
}

// Soal 3
var count_pagar;
// Got a little bit problem, using Array method to help duplicate the string
// Count_pagar start from 2 because if using 0 or 1 will not repeat
// Finish in 9 to get 7 level
for (count_pagar = 2; count_pagar < 9; count_pagar++) {
  var pagar = Array(count_pagar).join("#");
  console.log(count_pagar + pagar);
}

// Soal 4
var kalimat = "saya sangat senang belajar javascript";
var kalimat_split = kalimat.split(" ");
console.log(kalimat_split);

// Soal 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
var daftarBuah_sorted = daftarBuah.sort();
for (var i = 0; i < daftarBuah_sorted.length; i++) {
  console.log(daftarBuah_sorted[i]);
}

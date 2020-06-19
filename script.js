// Method Length = digunakan untuk menghitung jumlah karakter, pada data/nilai dari variable yang menggunakan tipe data String
/*var arr = ['Lukman', 1, true, [1, 2, 3]];
console.log(arr[3][1]);*/

// Method Join = digunakan untuk menggabungkan seluruh array menjadi sebuah string
/*var nama = ['Lukman', 'Abdul', 'Mukti'];
console.log(nama.join(' '));*/

// Method Push, Pop, Unshift,&Shift
// push ( Menambahkan elemen akhir)
/*var nama = ['Lukman', 'Abdul', 'Mukti'];
nama.push('Belajar');
nama.push('Pemrograman');
console.log(nama.join(' '));*/
// pop ( Menghapus elemen akhir )
/*var nama = ['Lukman', 'Abdul', 'Mukti'];
nama.pop();
nama.pop();
console.log(nama.join(' '));*/
// unshift ( Menambahkan elemen awal )
/*var nama = ['Lukman', 'Abdul', 'Mukti'];
nama.unshift('Saya');
nama.unshift('Nama');
console.log(nama.join(' '));*/
// shift ( Menghapus elemen awal )
/*var nama = ['Lukman', 'Abdul', 'Mukti'];
nama.shift();
console.log(nama.join(' '));*/

// Methode Splice&Slice
//  splice ( Mengambil elemen/string bagian tengah ) *(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ....)
/*var nama = ['Lukman', 'Abdul', 'Mukti'];
nama.splice(2, 0, 'bin');
console.log(nama.join(' '));*/

// slice ( Memotong Array menjadi Subarray ) *( indexAwal, indexAkhir )
/*var nama = ['Lukman', 'Abdul', 'Mukti', 'Pemrograman', 'Dasar'];
var nama2 = nama.slice(1, 4);
console.log(nama2.join(' '));*/

// Method forEach ( Metode panggilan fungsi yang disediakan sekali untuk setiap elemen dalam array, dalam rangka )
/*var angka = [1, 2, 3, 4, 5, 6, 7, 8];
var nama = ['Lukman', 'Abdul', 'Mukti'];

nama.forEach(function (e, i) {
  console.log('Mahasiswa ke-' + i + ' bernama ' + e);
})*/

// Method Map ( Mengembalikan nilai Array )
/*var angka = [1, 2, 3, 4, 5, 6];
var angka2 = angka.map(function (e) {
  return e * 2;
})
console.log(angka);*/

// Method Sort ( Mengurutkan elemen angka )
/*var angka = [1, 2, 4, 5, 7, 8, 10, 15, 20];
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka);*/

// Method Filter ( Mencari banyak nilai pada Array&Mengembalikannya dalam bentuk Array/String )
/*var angka = [1, 2, 3, 4, 5, 7, 9, , 8, 11, 15];
var angka2 = angka.filter(function (nilai) {
  return nilai > 5;
})
console.log(angka2);*/

// Method Find ( Mencari satu nilai berupa Integer )
/*var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var angka2 = angka.find(function (x) {
  return x > 4;
})
console.log(angka2);*/
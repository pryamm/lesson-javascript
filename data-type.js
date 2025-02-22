// const name_variable = value (value immutable | tidak dapat dirubah)
// type data -> string | number | boolean | date | array | object

// type data string | kata/kalimat/angka/apapun/kosong (diapit kutip "" | '' | ``)
const name = "pryamm";

// type data date | waktu (YYYY-MM-DD)
const birth = new Date("2015-01-01");

// type data number | angka
const old = 9;

// type data object (menghimpun properties) -> name_propertie: value(bisa semua type data)
const earth = {}; // object kosong - kurung kurawal {}
const address = {
  province: "jawa barat",
  city: "cimahi",
  number: 312,
};

// type data boolean | logika (true/false)
const married = false;

// type data array | tumpukan (array kosong) - kurung siku [] pemisah value oleh koma ","
const childs = [];

// type data array of string | tumpukan kata/kalimat
const hobbys = ["code", "workout"];

// type data array of number | tumpukan angka
const favorite_numbers = [1, 2, 3];

// type data array of object | tumpukan object
const contacts = [
  {
    name: "asep",
    number: "0123",
  },
  {
    name: "bisep",
    number: "0234",
  },
];

console.log(
  name,
  birth,
  old,
  earth,
  address,
  married,
  childs,
  hobbys,
  favorite_numbers,
  contacts
);

// truncate variable string | menyatukan variable menjadi sebuah kalimat

// bisa menggunakan `` """ '' dan menghubungkan variable dengan "+" (setelah atau sebelum string yang akan dihubungkan)
const sentence1 =
  "nama saya " + name + " tanggal lahir saya " + birth + " umur saya " + old;
console.log(sentence1);

// harus menggunakan `` | masukan variable didalam "${}" -> ${variable}
const sentence2 = `nama saya ${name} tanggal lahir saya ${birth} umur saya ${old}`;

console.log(sentence2);

# JSMTest

Aplikasi sederhana yang dapat untuk mencari rute pengiriman barang. Aplikasi ini dibangun menggunakan NodeJs dengan Framework Express JS dan juga database MySQL. Aplikasi ini juga menggunakan beberapa package seperti : 
1. bcrypt yang bertujuan meng-enkripsi.
2. cors untuk menjalankan mekanisme yang digunakan oleh browser untuk mengizinkan permintaan HTTP lintas domain.
3. dotenv yang bertujuan untuk menyembunyikan beberapa informasi penting, seperti misalnya koneksi database dll.
4. express sebagai kerangka kerja utama.
5. jsonwebtoken bertujuan untuk otentikasi dan otorisasi dalam aplikasi
6. mysql2 digunakan untuk mengkoneksikan aplikasi dengan database MySQL
7. nodemon sebagai alat pengembangan untuk aplikasi Node.js yang memungkinkan Anda untuk secara otomatis memulai ulang aplikasi Node.js setiap kali ada perubahan pada file-file di direktori proyek Anda.
8. uuid sebagai generator unik id.
9. http-errors library untuk membatu membuat error handling.
10. swagger-ui-express untuk membuat dokumentasi api menggunakan swagger.

## Instalasi

1. Pastikan Node.js terinstal di sistem Anda. Anda dapat mengunduhnya dari [situs resmi Node.js](https://nodejs.org).
2. Clone repositori ini ke direktori lokal Anda dengan cara `git clone https://github.com/tyassusanto/jsm.git`.
3. Masuk ke direktori cloning.
4. Install dependensi yang diperlukan dengan cara `npm install`.

## Konfigurasi

Buat file `.env` berdasarkan kebutuhan yaitu : 
1. DB_HOST = host url 
2. DB_USERNAME = username database anda
3. DB_PASSWORD = password database anda
4. DB_NAME = nama database anda

## Penggunaan

1. Import file dump database ke dalam database yang telah clone ke database anda.
2. Jalankan aplikasi dengan mengetikan perintah `npm run dev`.

## Dokumentasi API 
Anda dapat mengakses dokuemntasi api dan mentestnya melalui web brower anda dengan url : http://localhost:3300/api-docs/.
Pastikan Server sudah berjalan ketika menjalankan apidocs


INSERT INTO 
  materi (sub_bab_id, urutan_materi, judul_materi, isi_materi)
VALUES
  (1,1,'','<p align="justify">Python adalah bahasa pemrograman tingkat tinggi, dengan aplikasi di banyak area, termasuk pemrograman web, skrip, komputasi ilmiah, dan kecerdasan buatan! Ini sangat populer dan digunakan oleh organisasi seperti Google, NASA, CIA, dan Disney.</p><p align="justify">Hampir tidak ada batasan tentang apa yang dapat dibangun menggunakan Python. Ini termasuk aplikasi mandiri, aplikasi web, game, sains data dan model pembelajaran mesin, dan banyak lagi.</p><p align="justify">Untuk menggunakan Python, Anda harus menginstalnya terlebih dahulu di komputer Anda. Dalam kursus kami, Anda akan dapat menjalankan, menyimpan, dan membagikan kode Python Anda di Code Playground kami tanpa menginstal perangkat lunak tambahan apa pun.</p>'),
  (2,1,'','<p align="justify">Mari kita mulai dengan membuat program pendek yang menampilkan "Halo dunia!". Dengan Python, kami menggunakan pernyataan print untuk mengeluarkan teks.</p><p align="justify">print(&ldquo;hello world&rdquo;) Cobalah Sendiri [pindah ke compailer]</p><p align="justify">Pernyataan cetak juga dapat digunakan untuk menghasilkan beberapa baris teks.</p><p align="justify">print(&ldquo;hello world&rdquo;)</p><p align="justify">print(&ldquo;hello world&rdquo;)</p><p align="justify">print(&ldquo;hello world&rdquo;) cobalah sendiri [pindah ke compailer]</p>'),
  (3,1,'','<p>Python memiliki kemampuan melakukan perhitungan. Masukkan perhitungan langsung ke dalam pernyataan cetak:</p><p>print(2 + 2)</p><p>print(5 + 4 &ndash; 3) cobalah sendiri [pindah ke compailer]</p><p>Python juga melakukan perkalian dan pembagian, menggunakan tanda bintang * untuk menunjukkan perkalian dan garis miring / untuk menunjukkan pembagian. Gunakan tanda kurung untuk menentukan operasi mana yang dilakukan pertama kali.</p><p>Print( 2 * ( 3 + 4 ) )</p><p>Print( 10 / 2 ) cobalah sendiri [pindah ke compailer]</p>'),
  (4,1,'','<p align="justify">Float digunakan dalam Python untuk mewakili bilangan yang bukan bilangan bulat (bilangan bulat). Beberapa contoh bilangan yang direpresentasikan sebagai float adalah 0,5 dan -7,8237591. Mereka dapat dibuat secara langsung dengan memasukkan angka dengan titik desimal, atau dengan menggunakan operasi seperti pembagian pada bilangan bulat.</p><p align="justify">Print( 3 / 4 )</p><p align="justify">Print( 0.42 ) cobalah sendiri [pindah ke compailer]</p>'),
  (5,1,'','<p align="justify">Selain penjumlahan, pengurangan, perkalian, dan pembagian, Python juga mendukung eksponen, yaitu menaikkan satu bilangan menjadi pangkat bilangan lainnya. Operasi ini dilakukan dengan menggunakan dua tanda bintang.</p><p align="justify">Print( 2**5 ) cobalah sendiri [pindah ke compailer]</p><p align="justify">Anda dapat merangkai eksponen bersama. Dengan kata lain, Anda bisa menaikkan angka menjadi beberapa pangkat. Misalnya, 2 ** 3 ** 2.</p><p align="justify">Anda juga dapat menggunakan Float dalam eksponen. Misalnya, kode berikut akan menghasilkan akar kuadrat dari 9:</p><p align="justify">Print( 9 ** (1/2) )</p>'),
  (6,1,'','<p align="justify">Pembagian lantai dilakukan dengan menggunakan dua garis miring ke depan dan digunakan untuk menentukan hasil bagi dari suatu divisi (kuantitas yang dihasilkan oleh pembagian dua angka). Sebagai contoh:</p><p align="justify">Print( 20 // 6 )</p><p align="justify">Kode di atas akan menghasilkan 3, karena 6 dibagi menjadi 20 tiga kali.</p><p align="justify">Operator modulo dijalankan dengan simbol persen (%) dan digunakan untuk mendapatkan sisa pembagian. Sebagai contoh:</p><p align="justify">Print (20 % 6)</p><p align="justify">Print(1.25 % 0.5)</p><p align="justify">Semua operator numerik juga bisa digunakan dengan float.</p>'),
  (7,1,'','<p align="justify">Jika Anda ingin menggunakan teks dengan Python, Anda harus menggunakan string. Sebuah string dibuat dengan memasukkan teks di antara dua tanda kutip tunggal atau ganda.</p><p align="justify">Print (&ldquo;Python is fun!&rdquo;)</p><p align="justify">Print(&lsquo;Always look on the bright side of life&rsquo;)</p><p align="justify">[Cobalah sendiri Pindah ke compailer]</p><p align="justify">Note: Pembatas (" atau ") yang digunakan untuk string tidak memengaruhi perilakunya dengan cara apa pun.</p>'),
  (7,2,'','<p align="justify">Beberapa karakter tidak dapat langsung disertakan dalam string. Misalnya, tanda kutip ganda tidak dapat langsung disertakan dalam string tanda kutip ganda; ini akan menyebabkannya berakhir sebelum waktunya.</p><p align="justify">Karakter seperti ini harus diloloskan dengan menempatkan garis miring terbalik di depannya.</p><p align="justify">Tanda kutip ganda hanya perlu diloloskan dalam string tanda kutip ganda, dan hal yang sama berlaku untuk string tanda kutip tunggal.</p><p align="justify">Contoh</p><p align="justify">Print (&lsquo;brian\&rsquo;s mother: He\&rsquo;s not an angel. He\&rsquo;s a very naughty boy!&rsquo;)</p><p align="justify">[Cobalah sendiri pindah ke compailer]</p><p align="justify">Note: Garis miring terbalik juga dapat digunakan untuk menghindari tab, karakter Unicode arbitrer, dan berbagai hal lain yang tidak dapat dicetak dengan andal.</p>'),
  (8,1,'','<p>\n mewakili baris baru.</p><p>Ini dapat digunakan dalam string untuk membuat output multi-baris:</p><p>Contoh:</p><p>Print(&lsquo;one \nTwo \nThree&rsquo;)</p><p>[cobalah sendiri pindah ke kompaier]</p><p>Note: Demikian pula, \t mewakili tab.</p>'),
  (8,2,'','<p>Baris baru akan ditambahkan secara otomatis untuk string yang dibuat menggunakan tiga tanda kutip.</p><p>Sebagai contoh:</p><p>Print(&ldquo;&rdquo;&rdquo;this</p><p>Is a</p><p>Multiline</p><p>Text&rdquo;&rdquo;&rdquo;)</p><p>[Cobalah sendiri pindah ke compailer]</p><p>Note: Ini memudahkan untuk memformat teks panjang dan multi-baris tanpa perlu secara eksplisit menempatkan \n untuk jeda baris.</p>')
  (9,1,'','<p>Seperti halnya integer dan float, string dalam Python dapat ditambahkan, menggunakan proses yang disebut concatenation, yang dapat dilakukan pada dua string mana pun.</p>
  <p>Contoh</p>
  <p>Print(&ldquo;spam&rdquo; + &lsquo;eggs&rsquo;)</p>
  <p>Cobalah sendiri</p>
  <p>Print(&ldquo;2&rdquo; + &ldquo;2&rdquo;)</p>
  <p>Note: Menambahkan string ke angka menghasilkan kesalahan, karena meskipun mungkin terlihat mirip, mereka adalah dua entitas yang berbeda.</p>'),
  (9,2,'','<p>String juga dapat dikalikan dengan bilangan bulat. Ini menghasilkan versi berulang dari string asli. Urutan string dan integer tidak masalah, tetapi string biasanya didahulukan.</p>
  <p>Contoh</p>
  <p>Print(&ldquo;spam&rdquo; * 3)</p>
  <p>Print(4 * &lsquo;2&rsquo;)</p>
  <p>Cobalah sendiri</p>
  <p>Note: String tidak dapat dikalikan dengan string lain. String juga tidak dapat dikalikan dengan float, meskipun float adalah bilangan bulat.</p>'),
  (10,1,'','<p>Variabel memungkinkan Anda untuk menyimpan nilai dengan menetapkannya ke nama, yang dapat digunakan untuk merujuk ke nilai nanti dalam program.</p>
  <p>Misalnya, dalam pengembangan game, Anda akan menggunakan variabel untuk menyimpan poin pemain.</p>
  <p><br /><br /></p>
  <p>Untuk menetapkan variabel, gunakan satu tanda sama dengan</p>
  <p>Contoh</p>
  <p>User = &ldquo;James&rdquo;</p>
  <p>Note: Dalam contoh yang diberikan, kami menetapkan string "James" ke variabel pengguna.</p>'),
  (11,1,'','<p>Pembatasan tertentu berlaku sehubungan dengan karakter yang dapat digunakan dalam nama variabel Python. Satu-satunya karakter yang diperbolehkan adalah huruf, angka, dan garis bawah. Juga, mereka tidak bisa memulai dengan angka.</p>
  <p>Tidak mengikuti aturan ini menghasilkan kesalahan.</p>
  <p>Contoh</p>
  <p>This_is_a_normal_name = 7</p>
  <p>123abc = 7</p>
  <p>SyntaxError : invalid syntax</p>
  <p>Cobalah sendiri</p>
  <p>Note: Python adalah bahasa pemrograman yang peka huruf besar/kecil. Ini, Nama Belakang dan nama belakang adalah dua nama variabel yang berbeda di Python.</p>'),
  (11,2,'','<p>Anda dapat menggunakan variabel untuk melakukan operasi yang sesuai, seperti yang Anda lakukan dengan angka dan string:</p>
  <p>Contoh</p>
  <p>X = 7</p>
  <p>Print (x)</p>
  <p>Print(x+3)</p>
  <p>Print(x)</p>
  <p>Cobalah sendiri</p>
  <p>Note: Seperti yang Anda lihat, variabel menyimpan nilainya di seluruh program.</p>'),
  (11,3,'','<p>Variabel dapat dipindahkan sebanyak yang Anda inginkan, untuk mengubah nilainya.</p>
  <p>Dalam Python, variabel tidak memiliki tipe khusus, jadi Anda dapat menetapkan string ke variabel, dan kemudian menetapkan integer ke variabel yang sama.</p>
  <p>Contoh :</p>
  <p>X = 123.456</p>
  <p>Print(x)</p>
  <p>X = &ldquo;This is a string&rdquo;</p>
  <p>Print (x + &ldquo;!&rdquo;)</p>
  <p>Cobalah sendiri</p>
  <p>Note : Namun, itu bukan praktik yang baik. Untuk menghindari kesalahan, cobalah untuk tidak menimpa variabel yang sama dengan tipe data yang berbeda.</p>'),
  (12,1,'','<p>Untuk mendapatkan input dari pengguna dengan Python, Anda dapat menggunakan fungsi input bernama intuitif.</p>
  <p>Misalnya, sebuah game dapat meminta nama dan usia pengguna sebagai input dan menggunakannya dalam game.</p>
  <p><br /><br /></p>
  <p>Fungsi input meminta pengguna untuk memasukkan, dan mengembalikan apa yang mereka masukkan sebagai string (dengan konten secara otomatis lolos).</p>
  <p>Contoh</p>
  <p>X = input()</p>
  <p>Print( x )</p>
  <p>Cobalah sendiri</p>
  <p>Note: Bahkan jika pengguna memasukkan angka sebagai input, itu diproses sebagai string.</p>'),
  (12,2,'','<p>Pernyataan input harus diikuti oleh tanda kurung.</p>
  <p>Anda dapat memberikan string ke input() di antara tanda kurung, menghasilkan pesan prompt.</p>
  <p>Contoh</p>
  <p>Name = input (&ldquo; Enter Your Name: &ldquo;)</p>
  <p>Print (&ldquo;hello, &ldquo; + name)</p>
  <p>Cobalah sendiri</p>
  <p>Note: Pesan prompt membantu memperjelas input apa yang diminta oleh program.</p>'),
  (13,1,'','<p>Mari kita asumsikan kita ingin mengambil usia pengguna sebagai input.</p>
  <p>Kita tahu bahwa fungsi input() mengembalikan sebuah string.</p>
  <p>Untuk mengubahnya menjadi angka, kita dapat menggunakan fungsi int():</p>
  <p>Age = int(input())</p>
  <p>Print(age)</p>
  <p>Cobalah sendiri</p>'),
  (13,2,'','<p>Demikian pula, untuk mengonversi angka menjadi string, fungsi str() digunakan. Ini bisa berguna jika Anda perlu menggunakan angka dalam rangkaian string.</p>
  <p>Contoh:</p>
  <p>Age = 42</p>
  <p>Print(&ldquo;His age is &ldquo; + str(age))</p>
  <p>Cobalah sendiri</p>
  <p>Note : kamu bisa mengconverst float menggunakan FLOAT() function.</p>
  <p><br /><br /></p>'),
  (13,3,'','<p>Anda dapat menggunakan input() beberapa kali untuk mengambil beberapa input pengguna.</p>
  <p>Sebagai contoh:</p>
  <p>Name = input()</p>
  <p>Age = input()</p>
  <p>Print( name + &ldquo;is&rdquo; + age)</p>
  <p>Cobalah sendiri</p>
  <p>Note: Ketika fungsi input() dijalankan, aliran program berhenti sampai pengguna memasukkan beberapa nilai.</p>');

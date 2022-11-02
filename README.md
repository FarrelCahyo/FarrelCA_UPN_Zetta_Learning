Angular
Angular adalah platform sekaligus framework untuk membangun aplikasi klien satu halaman menggunakan HTML dan TypeScript. Angular ditulis dalam TypeScript. Ini mengimplementasikan fungsionalitas inti dan opsional sebagai kumpulan TypeScript Libraries yang diimpor ke dalam aplikasi.
Arsitektur aplikasi Angular bergantung pada konsep dasar tertentu. Dasar dari framework Angular adalah komponen Angular yang diatur ke dalam NgModules. NgModules mengumpulkan kode terkait ke dalam set fungsional; aplikasi Angular didefinisikan oleh satu set NgModules. Aplikasi selalu memiliki setidaknya modul root yang memungkinkan bootstrap, dan biasanya memiliki lebih banyak modul fitur.
•	Komponen menentukan views, yang merupakan kumpulan elemen layar yang dapat dipilih oleh Angular dan dimodifikasi sesuai dengan logika dan data program
•	Komponen menggunakan services, yang menyediakan fungsionalitas khusus yang tidak terkait langsung dengan tampilan. Services dapat dimasukkan ke dalam komponen sebagai dependencies, membuat kode modular sendiri, dapat digunakan kembali, dan efisien.
Modul, komponen, dan layanan adalah kelas yang menggunakan decorators. Decorators ini menandai tipenya dan menyediakan metadata yang memberi tahu Angular cara menggunakannya.
•	Metadata untuk kelas komponen mengaitkannya dengan templat yang mendefinisikan tampilan. Template menggabungkan HTML biasa dengan arahan Angular dan markup pengikatan yang memungkinkan Angular memodifikasi HTML sebelum merendernya untuk ditampilkan.
•	Metadata untuk kelas layanan menyediakan informasi yang dibutuhkan Angular untuk membuatnya tersedia untuk komponen melalui Dependency Injection (DI)
Komponen aplikasi biasanya mendefinisikan banyak tampilan, diatur secara hierarkis. Angular menyediakan layanan Router untuk membantu Anda menentukan jalur navigasi di antara tampilan. Router menyediakan kemampuan navigasi dalam browser yang canggih.

Modul
Angular NgModules berbeda dari dan melengkapi modul JavaScript (ES2015). NgModule mendeklarasikan konteks kompilasi untuk sekumpulan komponen yang didedikasikan untuk domain aplikasi, alur kerja, atau serangkaian kemampuan yang terkait erat. NgModule dapat mengaitkan komponennya dengan kode terkait, seperti layanan, untuk membentuk unit fungsional.
Setiap aplikasi Angular memiliki modul root, secara konvensional bernama AppModule, yang menyediakan mekanisme bootstrap yang meluncurkan aplikasi. Sebuah aplikasi biasanya berisi banyak modul fungsional. 
Seperti modul JavaScript, NgModules dapat mengimpor fungsionalitas dari NgModul lain, dan mengizinkan fungsionalitasnya sendiri untuk diekspor dan digunakan oleh NgModul lain. Misalnya, untuk menggunakan layanan router di aplikasi, mengimpor Router NgModule.
Mengatur kode ke dalam modul fungsional yang berbeda membantu dalam mengelola pengembangan aplikasi yang kompleks, dan dalam merancang untuk dapat digunakan kembali. Selain itu, teknik ini memungkinkan untuk memanfaatkan lazy-loading —yaitu, memuat modul sesuai permintaan— untuk meminimalkan jumlah kode yang perlu dimuat saat startup.

Komponen
Setiap aplikasi Angular memiliki setidaknya satu komponen, komponen root yang menghubungkan hierarki komponen dengan halaman Dokumen Object Model (DOM). Setiap komponen mendefinisikan kelas yang berisi data aplikasi dan logika, dan dikaitkan dengan template HTML yang mendefinisikan tampilan yang akan ditampilkan di lingkungan target.
Decorators @Component() mengidentifikasi kelas tepat di bawahnya sebagai komponen, dan menyediakan template dan metadata khusus komponen terkait.

___________________________________________________________________________________________________________________________

QUIZ
1.	Components dari module tersebut dapat terbagi menjadi beberapa hal:
a.	HTML untuk strukturnya
b.	Typescript untuk isi dari HTML nya
c.	SCSS untuk design stylingnya
2.	Components dikelompokkan menjadi beberapa modul:
a.	Subscriptions
b.	Main/ Beranda
-	Menampilkan component-component dari module tersebut
3.	Struktur file tersebut dapat diperkirakan hasil akhirnya, karena terdapat HTML yang dapat  memperkirakan outputnya dari Angular Project tersebut

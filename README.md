# Bismillah_Sukses_Zetta

Punya Farrel Cahyo Nibos

# Report

Instance komponen di Angular memiliki siklus hidup yang dimulai saat Angular membuat instance kelas komponen dan merender tampilan komponen bersama dengan tampilan anaknya. Siklus hidup berlanjut dengan deteksi perubahan, saat Angular memeriksa untuk melihat kapan properti terikat data berubah, dan memperbarui tampilan dan instans komponen sesuai kebutuhan. Siklus hidup berakhir ketika Angular menghancurkan instance komponen dan menghapus template yang dirender dari DOM.

Arahan memiliki siklus hidup yang serupa, karena Angular membuat, memperbarui, dan menghancurkan instance selama eksekusi.

Aplikasi sudut dapat menggunakan metode kait siklus hidup untuk memanfaatkan peristiwa penting dalam siklus hidup komponen atau arahan untuk menginisialisasi instans baru, memulai deteksi perubahan saat diperlukan, merespons pembaruan selama deteksi perubahan, dan membersihkan sebelum penghapusan instans.

# Quiz

1. Initialisasi directive atau komponen setelah angular pertamakali menampilkan properti data
2. Mengatur directive atau properti input komponen
3. Dipanggil sekali, setelah ngOnChanges() pertama. ngOnInit() masih dipanggil bahkan ketika ngOnChanges() tidak (yang terjadi ketika tidak ada input terikat template).
4. Dipanggil sekali setelah ngAfterContentChecked() pertama.
   Dipanggil sebelum ngOnInit() (jika komponen memiliki input terikat) dan setiap kali satu atau lebih properti input terikat data berubah.
5. Urutannya :
   a. ngOnChanges
   b. ngOnInit
   c. ngDoCheck
   d. ngAFterContentInit
   e. ngAfterContentChecked
   f. ngAfterViewInit
   g. ngAfterViewChecked
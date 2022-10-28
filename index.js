function total(buku, diskon, pajak){
    let result = 0;
    if(buku && buku.harga){
        const judul = buku.judul;
        const harga = buku.harga;
        const totDiskon = harga * (diskon/100);
        const hrgDiskon = harga - totDiskon;
        const totPajak = hrgDiskon * (pajak/100);
        const hrgPajak = hrgDiskon + totPajak;
        result += hrgPajak;

        console.group();
        console.log(judul);
        console.log('Harga Awal : ', harga);
        console.log('Diskon : ', diskon);
        console.log('Harga Diskon : ', hrgDiskon);
        console.log('Pajak : ', pajak);
        console.log('Harga Total : Rp', hrgPajak, ',-');
        console.log();
        console.log();
        console.groupEnd();
    }
} 

total({judul: "Manga One Piece", harga: 20000000}, 15, 5);
total({judul: "Manga Naruto", harga: 10000000}, 10, 3);
total({judul: "Manga Gintama", harga: 8000000}, 8, 2);
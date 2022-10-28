function total(buku, diskon, pajak, stock, pemesanan){
    let result = 0;

    console.log(buku.judul);
    for(let index = 0; index < stock; index++){
        if(buku && buku.harga && index < pemesanan){
            const judul = buku.judul;
            const harga = buku.harga;
            const totDiskon = harga * (diskon/100);
            const hrgDiskon = harga - totDiskon;
            const totPajak = hrgDiskon * (pajak/100);
            const hrgPajak = hrgDiskon + totPajak;
            result = result + hrgPajak;
    
            // console.group();
            // console.log(judul);
            // console.log('--------------------');
            // console.log('Harga Awal : ',harga);
            // console.log('Diskon : ',diskon,'%');
            // console.log('Harga Diskon : ',hrgDiskon);
            // console.log('Pajak : ',pajak,'%');
            // console.log('Harga Total : Rp',hrgPajak,',-');
            // console.log();
            // console.log();
            // console.groupEnd();

            console.group();
            console.log('Total ', index + 1, ' Buku Sebesar Rp', result, ',-');
            console.groupEnd();
        }else{
            console.log('Stok Habis')
        }
    }

    console.group();
    console.log('----------------------');
    console.log('Total Harga yang Harus Dibayar : Rp',result,',-');
    console.log();
    console.groupEnd();

} 

total({judul: "Manga One Piece", harga: 20000000}, 15, 5, 3, 3);
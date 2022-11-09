import { Component, OnInit } from '@angular/core';
export interface item {id: number, name: string, des: string, price: number};
export interface selecteditem {id: number, name: string, des: string, price: number, amount: number};

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public items: item[] = [
    {id: 1, name: 'Paket Maba', des: 'Nasi + Telur + Sayur + Sambal + Es Teh', price: 10000},
    {id: 2, name: 'Paket Senior', des: 'Nasi + Sayur + Lele (Goreng/Bakar) + Sambal + Es Teh', price: 11000},
    {id: 3, name: 'Paket Dosen', des: 'Nasi + Sayur + Ayam (Goreng/Bakar) + Sambal + Es Teh', price: 13000},
    {id: 4, name: 'Paket Mahasiswa', des: 'Nasi + Sayur + Tempe + Tahu + Sambal + Es Teh', price: 8000},
    {id: 5, name: 'Paket Rantau', des: 'Magelangan/ Nasi Goreng + Es Teh', price: 12000},
    {id: 6, name: 'Paket Mie', des: 'Indomie (Goreng/Rebus) + Telur + Es Teh', price: 10000},
    {id: 7, name: 'Paket Nongkrong', des: 'Es Teh / Es Jeruk', price: 3000},
  ]

  public selectedItems: selecteditem[]=[];

  addItem(item:item){
    const duplicate = this.selectedItems.findIndex(({id}) => id === item.id);
    if(duplicate >= 0){this.selectedItems[duplicate].amount += 1}
    else{this.selectedItems.push({...item, amount: 1})}
  }
}
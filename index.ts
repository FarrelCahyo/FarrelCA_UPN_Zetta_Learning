function bebas(text: string, first_index: number, last_index: number): string {
    let hasil: string = "";
  
    for (let index=first_index; index<last_index; index++) {
      hasil += text[index];
    }
    return hasil;
  }
  console.log(bebas("Learning Typescript is different than Javascript", 9, 19));
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(productsArray:Product[],text:string): Product[] {
    return productsArray.filter((product)=>product.title.toLowerCase().includes(text.toLowerCase()));
  }
  

}

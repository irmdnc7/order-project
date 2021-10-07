import { Pipe, PipeTransform } from '@angular/core';
import { BasketProduct } from 'src/app/models/basketProduct';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: BasketProduct[], filterText: string): BasketProduct[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : ""
    return filterText ? value.filter((p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}

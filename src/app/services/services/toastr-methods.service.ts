import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrMethodsService {

  constructor(private toaster:ToastrService) { }
  successToaster(){
    this.toaster.success('Sepete Eklendi.')
  }
}

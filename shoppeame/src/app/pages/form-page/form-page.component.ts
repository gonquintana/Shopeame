import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  item: string = ''
  @Output() enviarEvent = new EventEmitter()
  items: any = []
  registerForm!: FormGroup
  isSubmit: boolean = false
  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      routeImg: ['',],
      opinions: ['',]
    })
  }
  submit() {
    this.isSubmit = true;
    console.log(this.registerForm);
    console.log(this.registerForm.value);
  }
addProduct(item: any[]){
  this.items.push({...item})
}
enviarArticulo(){
  this.enviarEvent.emit(this.item)
}
}

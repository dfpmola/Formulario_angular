import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Template driven forms';
 
  @ViewChild('contactForm',{static: false}) contactForm: NgForm;
 
  contact:contact;
 
  ngOnInit() {
 
    this.contact = { 
      nombre:"",
      apellido:"",
      genero:"hombre",
      contrasena:"",
      confirmacion_contrasena:"",
      isokpubli:true,
      correo:"",
    };
    
 
  }
 
  onSubmit(contactForm) {
    console.log(this.contactForm.value);
  }
 
}
 
export class contact {
  nombre:string;
  apellido:string;
  genero:string;
  contrasena:string;
  confirmacion_contrasena:string;
  isokpubli:boolean;
  correo:string;
} 
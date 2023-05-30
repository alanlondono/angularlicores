import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';
import swal from'sweetalert2';


@Component({
  selector: 'app-registrocliente',
  templateUrl: './registrocliente.component.html',
  styleUrls: ['./registrocliente.component.scss']
})
export class RegistroclienteComponent implements OnInit {
  
  formularioRegistroCliente: any;
  pepeito:number = 0;

  constructor(private formBuilder: FormBuilder,
    private servicioCliente:ClienteService
    ) { }

  ngOnInit() {
    this.inicializarFormulario();
  }
  inicializarFormulario() {

    this.formularioRegistroCliente = this.formBuilder.group({
      nombre:['', [Validators.required]],
      apellidos:['', [Validators.required]],
      direccion:['', [Validators.required]],
      identificacion:['', [Validators.required]],
      email:['', [Validators.required]],
      celular:['', [Validators.required]]
    });
  }

  guardarCliente(){
    if (this.formularioRegistroCliente.valid){
      console.log(this.formularioRegistroCliente.value);
      this.servicioCliente.registrarCliente(this.formularioRegistroCliente.value)
      .subscribe(respuesta => {
        console.log(respuesta)
        if(respuesta[0].idCliente > 0){
          swal.fire( 
            'Ok',           
            'Cliente registrado satisfactoriamente',
            'success'
          )          
          this.limpiarFormulario();
        }
        
      });
    }
    
  }
  limpiarFormulario() {
    this.formularioRegistroCliente.controls['nombre'].setValue('');
    this.formularioRegistroCliente.controls['apellidos'].setValue('');
    this.formularioRegistroCliente.controls['direccion'].setValue('');
    this.formularioRegistroCliente.controls['identificacion'].setValue('');
    this.formularioRegistroCliente.controls['email'].setValue('');
    this.formularioRegistroCliente.controls['celular'].setValue('');
  }

}

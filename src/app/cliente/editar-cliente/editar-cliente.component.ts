import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from 'src/app/servicios/cliente.service';
import swal from'sweetalert2';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {
 cliente:any=[];

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private clienteServicio : ClienteService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cliente = this.data.data;
    console.log(this.cliente);
  }

  editarCliente(){

    const cliente={
      idCliente:null,
      nombre:null,
      apellidos:null,
      direccion:null,
      identificacion:'',
      email:null,
      celular:''
    }


    cliente.idCliente = this.cliente.idCliente;
    cliente.nombre = this.cliente.nombre;
    cliente.apellidos = this.cliente.apellidos;
    cliente.direccion = this.cliente.direccion;
    cliente.email = this.cliente.email;
    cliente.identificacion = '';
    cliente.celular = "";
    
  console.log(cliente);

this.clienteServicio.editarCliente(cliente).subscribe(
  respuesta => {
    console.log(respuesta)
        if(respuesta[0].idCliente > 0){
          swal.fire( 
            'Ok',           
            'Cliente actualizado correctamente',
            'success'
          )          
          this.dialogRef.close();
        }
  })


  }

}

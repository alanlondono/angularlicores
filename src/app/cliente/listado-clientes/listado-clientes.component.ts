import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.scss']
})
export class ListadoClientesComponent implements OnInit {

  listaClientes: any = [];

  displayedColumns: string[] = ['idCliente', 'nombre', 'apellidos', 'direccion', 'identificacion', 'celular', 'accion'];
  dataSource: any = [];

  constructor(private serviciocliente: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerpokemon();

  }
  obtenerpokemon() {
    this.serviciocliente.obtenerpokemon().subscribe(
      respuesta => {
       
        console.log(respuesta); 
      }
    )

  }

  obtenerClientes() {
    this.serviciocliente.obtenerClientes().subscribe(
      respuesta => {
        this.listaClientes = respuesta;
        this.dataSource = this.listaClientes;
        console.log(this.listaClientes);
      }
    )

  }

  eliminarCliente(idCliente: any) {
    //alert("eeee");
    this.serviciocliente.eliminarCliente(idCliente).subscribe(
      respuesta => {
        console.log(respuesta);
        if(respuesta[0].idCliente > 0){
          swal.fire( 
            'Ok',           
            'El cliente se elimino correctamente',
            'success'
          )          
          this.obtenerClientes();
        }
      })
  }

  editarCliente() {
    alert("en esta funcion va la funcionalidad para editar el cliente")
  }

}

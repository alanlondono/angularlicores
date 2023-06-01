import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { ContenedorURLs } from '../url';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  registrarCliente(cliente:any):Observable<any>{
    console.log(cliente);
    const url = ContenedorURLs.urlregistrarCliente
    return this.http.post<any>(url,cliente);
  }

  obtenerClientes():Observable<any>{    
    const url = ContenedorURLs.urlobtenerCliente
    return this.http.get<any>(url);
  }

  eliminarCliente(IdCliente:string):Observable<any>{    
    const url = ContenedorURLs.urleliminarCliente.replace('[idCliente]', IdCliente); 
    return this.http.delete<any>(url);
  }

  editarCliente(cliete:any):Observable<any>{    
    const url = ContenedorURLs.urleditarCliente;
    return this.http.post<any>(url, cliete);
  }


  obtenerpokemon():Observable<any>{    
    const url = ContenedorURLs.urlpokemon
    return this.http.get<any>(url);
  }



}

import { environment } from "src/environments/environment";

export const ContenedorURLs = {
    urlregistrarCliente: `${environment.urlAPI}/Api/Ejemplo/AddCliente`,  
    urlobtenerCliente: `${environment.urlAPI}/Api/Ejemplo/GetClientes`, 
    urleliminarCliente: `${environment.urlAPI}/Api/Ejemplo/DeleteCliente/IDCliente/[idCliente]`,  
    urleditarCliente: `${environment.urlAPI}/Api/Ejemplo/EditarCliente`,   
    urlpokemon: `${environment.uripokemon}`,  
  };

  

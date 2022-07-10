export interface Notificacion {
  nombre:string,
  apellidos:string,
  sexo:string
  edad:number,
  peso:number,
  altura:number,
  personaadv:string,
  padece:boolean,
  


  //datos de medicamento
  codigo_nacional:string,
  nombre_medi:string,
  lote:string,
  fec_caducidad:Date,
  motivo:string,
  como:string,
  paraque?:string,
  viaadmin:string,
  fec_inicio:Date,


  //datos de reacción
  sintoma:String

  otraenfer?:string,

}
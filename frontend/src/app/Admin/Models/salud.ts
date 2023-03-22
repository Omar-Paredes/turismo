export interface Seccion {
    nombre: string;
    foto: string;
}

export interface ShowBussinessType {
    nombre: string;
    especialidad:string;
    foto:string;
    ubicacionId:number;
    tipo_empresa_id: number;
    nombre_tipo_empresa:string;
    servicio:string;
    descripcion:string;
}

export interface SubseccionPageResponse {
    atractivos: ShowBussinessType[];
    seccion: Seccion
}
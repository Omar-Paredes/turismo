import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAtractivo } from '../../Models/atractivo';
import { IActividad } from '../../Models/actividad';
import { IEmpresa } from '../../Models/empresa';
import { environment } from 'src/environments/environment';
import IAtractivoEmpresa from '../../Models/atractivoEmpresas';
import IAtractivoActividad from '../../Models/atractivoActividad';
import IAtractivoActividadEstado from '../../Models/atractivoActividadEstado';
import AtractivoSeccionesAsignadasType from '../../Models/atractivoSeccionesAsigandas.moldes';
import IResponse from '../../Models/response';
@Injectable({
  providedIn: 'root',
})
export class AtractivoService {
  constructor(private http: HttpClient) {}

  list(): Observable<IAtractivo[]> {
    return this.http.get<IAtractivo[]>(`${environment.url}atractivo`);
  }

  add(atractivo: IAtractivo): Observable<IAtractivo> {
    return this.http.post<IAtractivo>(`${environment.url}atractivo`, atractivo);
  }

  update(atractivo: IAtractivo): Observable<IAtractivo> {
    return this.http.put<IAtractivo>(
      `${environment.url}atractivo/${atractivo.id}`,
      atractivo
    );
  }

  delete(atractivo: IAtractivo): Observable<boolean> {
    return this.http.delete<boolean>(
      `${environment.url}atractivo/${atractivo.id}`
    );
  }
  //----------------------------Relacion Atractivo Actividad----------------------------
  noAsignados(actividadId: number | undefined): Observable<IActividad[]> {
    const resp = this.http.get<IActividad[]>(
      `${environment.url}atractivo_actividad_noAsignados/${actividadId}`
    );
    return resp;
  }

  addAssigning(atractivo: IAtractivoActividad): Observable<IAtractivo> {
    return this.http.post<any>(
      `${environment.url}atractivo_actividad_noAsignados/`,
      atractivo
    );
  }

  getActividadesAssigned(id: number) {
    return this.http.get<AtractivoSeccionesAsignadasType[]>(
      `${environment.url}atractivo_actividad_asignados/${id}`
    );
  }

  deallocateActividades(atractivo: IAtractivoActividad) {
    return this.http.post(
      `${environment.url}atractivo_actividad_asignados/`,
      atractivo
    );
  }

  cambiarEstado(id: number | undefined){
    return this.http.get<IAtractivoActividadEstado[]>(
      `${environment.url}atractivo_actividad_asignados_estado/${id}`
    );
  }

  updateEstado(id_actividad:IAtractivoActividadEstado) : Observable<IAtractivoActividadEstado>{
    return this.http.put<IAtractivoActividadEstado>(`${environment.url}atractivo_actividad_asignados_estado/${id_actividad.id}`, id_actividad);
  }

    //----------------------------Relacion Atractivo Empresa----------------------------
    empresasNoAsignados(empresaId: number | undefined): Observable<IEmpresa[]> {
      const resp = this.http.get<IEmpresa[]>(
        `${environment.url}atractivo_empresa_noAsignados/${empresaId}`
      );
      return resp;
    }
    
    empresasAddAssigning(empresa: IAtractivoEmpresa): Observable<IAtractivo> {
      return this.http.post<any>(
        `${environment.url}atractivo_empresa_noAsignados/`,
        empresa
      );
    }
  
    getEmpresasAssigned(id: number) {
      return this.http.get<AtractivoSeccionesAsignadasType[]>(
        `${environment.url}atractivo_empresa_asignados/${id}`
      );
    }
  
    deallocateEmpresas(empresa: IAtractivoEmpresa) {
      return this.http.post(
        `${environment.url}atractivo_empresa_asignados/`,
        empresa
      );
    }

    updateDestacadoMes(atractivo: IAtractivo): Observable<IResponse> {
      return this.http.put<IResponse>(
        `${environment.url}destacar/mes/${atractivo.id}`,
        {}
      );
    }

    getDestacadoMes():Observable<IAtractivo> {
      return this.http.get<IAtractivo>(
        `${environment.url}destacar/mes/`
      )
    }

    getTres():Observable<IAtractivo[]> {
      return this.http.get<IAtractivo[]>(
        `${environment.url}tres/atractivo/`
      )
    }

    getEvents():Observable<IAtractivo[]> {
      return this.http.get<IAtractivo[]>(
        `${environment.url}eventos`
      )
    }
}

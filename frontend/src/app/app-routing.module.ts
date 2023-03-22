import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes de Usuario los cuales tendrán una página exclusiva
import { InicioComponent } from './Usuario/Pages/inicio/inicio.component';
/* import { DestacadosComponent } from './Usuario/Pages/destacados/destacados.component';
import { DondeIrComponent } from './Usuario/Pages/donde-ir/donde-ir.component'; */
import { QueHacerComponent } from './Usuario/Pages/que-hacer/que-hacer.component';
/* import { TemaMesComponent } from './Usuario/Pages/tema-mes/tema-mes.component';
import { TurismoGastronomicoComponent } from './Usuario/Pages/turismo-gastronomico/turismo-gastronomico.component';
import { LugarTuristicoComponent } from './Usuario/Pages/lugar-turistico/lugar-turistico.component';
import { RestaurantsComponent } from './Usuario/Pages/restaurants/restaurants.component';
import { DestinoTresSesentaComponent } from './Usuario/Pages/destino-tres-sesenta/destino-tres-sesenta.component';
import { AlimentacionComponent } from './Usuario/Pages/alimentacion/alimentacion.component';
import { RestaurantesDosComponent } from './Usuario/Pages/restaurantes-dos/restaurantes-dos.component';
import { SaludComponent } from './Usuario/Pages/salud/salud.component';
import { ServiciosComponent } from './Usuario/Pages/servicios/servicios.component';
import { TransportePageComponent } from './Usuario/Pages/transporte-page/transporte-page.component';
import { InforturPageComponent } from './Usuario/Pages/infortur-page/infortur-page.component';
import { EventosComponent } from './Usuario/Pages/eventos/eventos.component';
import { RutaMesPageComponent } from './Usuario/Pages/ruta-mes-page/ruta-mes-page.component';
import { HistoriaPageComponent } from './Usuario/Pages/historia-page/historia-page.component';
import { GeografiaPageComponent } from './Usuario/Pages/geografia-page/geografia-page.component';
import { InfopoliadminPageComponent } from './Usuario/Pages/infopoliadmin-page/infopoliadmin-page.component';
import { LugaresnaturalesPageComponent } from './Usuario/Pages/lugaresnaturales-page/lugaresnaturales-page.component';
import { TurismoculturalPageComponent } from './Usuario/Pages/turismocultural-page/turismocultural-page.component';
import { TurismonaranjaPageComponent } from './Usuario/Pages/turismonaranja-page/turismonaranja-page.component';
import { TurismonaturalPageComponent } from './Usuario/Pages/turismonatural-page/turismonatural-page.component';
import { TurismoruralPageComponent } from './Usuario/Pages/turismorural-page/turismorural-page.component';
import { TurismobienestarPageComponent } from './Usuario/Pages/turismobienestar-page/turismobienestar-page.component';
import { CicloturismoPageComponent } from './Usuario/Pages/cicloturismo-page/cicloturismo-page.component';
import { ElementopublicoPageComponent } from './Usuario/Pages/elementopublico-page/elementopublico-page.component'; */

// Importar componentes de Adminstrador los cuales tendrán una página exclusiva
import { EstacionalidadComponent } from './Admin/Pages/estacionalidad/estacionalidad.component';
import { AccesibilidadComponent } from './Admin/Pages/accesibilidad/accesibilidad.component';
import { TipoEmpresaComponent } from './Admin/Pages/tipo-empresa/tipo-empresa.component';
// import { TipoRestriccionComponent } from './Admin/Pages/tipo-restriccion/tipo-restriccion.component';
/* import { TipoActividadComponent } from './Admin/Pages/tipo-actividad/tipo-actividad.component'; */
import { TipoAtractivoComponent } from './Admin/Pages/tipo-atractivo/tipo-atractivo.component';
import { EmpresaComponent } from './Admin/Pages/empresa/empresa.component';
import { UbicacionComponent } from './Admin/Pages/ubicacion/ubicacion.component';
/* import { SeccionComponent } from './Admin/Pages/seccion/seccion.component'; */
import { SubSeccionComponent } from './Admin/Pages/sub-seccion/sub-seccion.component';
// import { RestriccionComponent } from './Admin/Pages/restriccion/restriccion.component';
import { ActividadComponent } from './Admin/Pages/actividad/actividad.component';
import { AtractivoComponent } from './Admin/Pages/atractivo/atractivo.component';
import { DashboardComponent } from './Admin/Pages/dashboard/dashboard.component';
/* import { VacioComponent } from './Admin/Pages/vacio/vacio.component'; */
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './Admin/Pages/login/login.component';
import { RegisterComponent } from './Admin/Pages/register/register.component';
import { UsuariosComponent } from './Admin/Pages/usuarios/usuarios.component';
/* import { PubsComponent } from './Usuario/Pages/pubs/pubs.component';
import { ComedoresComponent } from './Usuario/Pages/comedores/comedores.component';
import { PeniasComponent } from './Usuario/Pages/penias/penias.component';
import { HospitalesComponent } from './Usuario/Pages/hospitales/hospitales.component';
import { PostasComponent } from './Usuario/Pages/postas/postas.component';
import { ClinicasComponent } from './Usuario/Pages/clinicas/clinicas.component';
import { RadioMovilComponent } from './Usuario/Pages/radio-movil/radio-movil.component'; */
import { SeccionAtractivosComponent } from './Usuario/Pages/seccion-atractivos/seccion-atractivos.component';
import { RedirectComponent } from './Usuario/Pages/redirect/redirect.component';
import { TemplateComponent } from './Usuario/Components/template/template.component';
import { EventosComponent } from './Usuario/Pages/eventos/eventos.component';

// Array de rutas
const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'que_hacer', component: QueHacerComponent },
      { path: 'seccion/:id', component: SeccionAtractivosComponent },
      { path: 'login', component: LoginComponent },
      { path: 'eventos', component: EventosComponent },
    ]
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'accesibilidad', component: AccesibilidadComponent },
      { path: 'actividad', component: ActividadComponent },
      { path: 'atractivo', component: AtractivoComponent },
      { path: 'estacionalidad', component: EstacionalidadComponent },
      { path: 'sub_seccion', component: SubSeccionComponent },
      { path: 'ubicacion', component: UbicacionComponent },
      { path: 'tipo_atractivo', component: TipoAtractivoComponent },
      { path: 'usuarios', component: UsuariosComponent },
    ],
  },
  { path: '**', component: RedirectComponent },

  /* { path: 'tipo_empresa', component: TipoEmpresaComponent }, */
  /* { path: 'register', component: RegisterComponent }, */
  /* { path: 'empresa', component: EmpresaComponent }, */
  // {path: 'tipo_restriccion', component: TipoRestriccionComponent},
  /*       { path: 'tipo_actividad', component: TipoActividadComponent }, */
  // {path: 'restriccion', component: RestriccionComponent},
  /*       { path: 'seccion', component: SeccionComponent }, */
  /* { path: 'destinos_destacados', component: DestacadosComponent },
  { path: 'donde_ir', component: DondeIrComponent },
  { path: 'turismo_gastronomico', component: TurismoGastronomicoComponent },
  { path: 'lugar_turistico', component: LugarTuristicoComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'destino_visual', component: DestinoTresSesentaComponent },
  { path: 'tema_mes', component: TemaMesComponent },
  { path: 'alimentacion', component: AlimentacionComponent },
  { path: 'restaurantesii', component: RestaurantesDosComponent },
  { path: 'peñas', component: PeniasComponent },
  { path: 'comedores-populares', component: ComedoresComponent },
  { path: 'cafe-pubs', component: PubsComponent },
  { path: 'tema_mes', component: TemaMesComponent },
  { path: 'salud', component: SaludComponent },
  { path: 'hospitales', component: HospitalesComponent },
  { path: 'postas', component: PostasComponent },
  { path: 'clinicas', component: ClinicasComponent },
  { path: 'radio-movil', component: RadioMovilComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'transporte', component: TransportePageComponent },
  { path: 'info_turistica', component: InforturPageComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'ruta_mesp', component: RutaMesPageComponent },
  { path: 'historia', component: HistoriaPageComponent },
  { path: 'geografia', component: GeografiaPageComponent },
  { path: 'informacion_politica', component: InfopoliadminPageComponent },
  { path: 'lugar_natural', component: LugaresnaturalesPageComponent },
  { path: 'turismo_cultural', component: TurismoculturalPageComponent },
  { path: 'turismo_naranja', component: TurismonaranjaPageComponent },
  { path: 'turismo_natural', component: TurismonaturalPageComponent },
  { path: 'turismo_rural', component: TurismoruralPageComponent },
  { path: 'turismo_bienestar', component: TurismobienestarPageComponent },
  { path: 'cicloturismo', component: CicloturismoPageComponent },
  { path: 'elemento_publico', component: ElementopublicoPageComponent }, */
];

// Exportar el módulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  // ToastrModule.forRoot(),
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Usuario/Components/header/header.component';
import { FooterComponent } from './Usuario/Components/footer/footer.component';
import { InicioComponent } from './Usuario/Pages/inicio/inicio.component';
import { DestacadosComponent } from './Usuario/Pages/destacados/destacados.component';
import { InicioSesionComponent } from './Admin/Pages/inicio-sesion/inicio-sesion.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EstacionalidadComponent } from './Admin/Pages/estacionalidad/estacionalidad.component';
import { AccesibilidadComponent } from './Admin/Pages/accesibilidad/accesibilidad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipoEmpresaComponent } from './Admin/Pages/tipo-empresa/tipo-empresa.component';
import { TipoRestriccionComponent } from './Admin/Pages/tipo-restriccion/tipo-restriccion.component'; //No se usa
import { CarouselComponent } from './Usuario/Components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SliderComponent } from './Usuario/Components/slider/slider.component';
import { TipoActividadComponent } from './Admin/Pages/tipo-actividad/tipo-actividad.component';
import { RutaMesComponent } from './Usuario/Components/ruta-mes/ruta-mes.component';
import { TipoAtractivoComponent } from './Admin/Pages/tipo-atractivo/tipo-atractivo.component';
import { EmpresaComponent } from './Admin/Pages/empresa/empresa.component';
import { UbicacionComponent } from './Admin/Pages/ubicacion/ubicacion.component';
import { SeccionComponent } from './Admin/Pages/seccion/seccion.component';
import { RestriccionComponent } from './Admin/Pages/restriccion/restriccion.component'; //No se usa
import { ActividadComponent } from './Admin/Pages/actividad/actividad.component';
import { AtractivoComponent } from './Admin/Pages/atractivo/atractivo.component';
import { DashboardComponent } from './Admin/Pages/dashboard/dashboard.component';
import { VacioComponent } from './Admin/Pages/vacio/vacio.component';
import { SubSeccionComponent } from './Admin/Pages/sub-seccion/sub-seccion.component';
import { RegisterComponent } from './Admin/Pages/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './Admin/Pages/login/login.component';
import { UsuariosComponent } from './Admin/Pages/usuarios/usuarios.component';
import { DondeIrComponent } from './Usuario/Pages/donde-ir/donde-ir.component';
import { QueHacerComponent } from './Usuario/Pages/que-hacer/que-hacer.component';
import { TemaMesComponent } from './Usuario/Pages/tema-mes/tema-mes.component';
import { TurismoGastronomicoComponent } from './Usuario/Pages/turismo-gastronomico/turismo-gastronomico.component';
import { LugarTuristicoComponent } from './Usuario/Pages/lugar-turistico/lugar-turistico.component';
import { InfoSectionComponent } from './Usuario/Components/info-section/info-section.component';
import { RestaurantsComponent } from './Usuario/Pages/restaurants/restaurants.component';
import { DestinoTresSesentaComponent } from './Usuario/Pages/destino-tres-sesenta/destino-tres-sesenta.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

// NGX Multi Select
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LoadingComponent } from './Components/loading/loading.component';
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
import { TurismonaturalPageComponent } from './Usuario/Pages/turismonatural-page/turismonatural-page.component';
import { TurismoculturalPageComponent } from './Usuario/Pages/turismocultural-page/turismocultural-page.component';
import { TurismonaranjaPageComponent } from './Usuario/Pages/turismonaranja-page/turismonaranja-page.component';
import { TurismoruralPageComponent } from './Usuario/Pages/turismorural-page/turismorural-page.component';
import { TurismobienestarPageComponent } from './Usuario/Pages/turismobienestar-page/turismobienestar-page.component';
import { CicloturismoPageComponent } from './Usuario/Pages/cicloturismo-page/cicloturismo-page.component';
import { ElementopublicoPageComponent } from './Usuario/Pages/elementopublico-page/elementopublico-page.component';
import { PubsComponent } from './Usuario/Pages/pubs/pubs.component';
import { PeniasComponent } from './Usuario/Pages/penias/penias.component';
import { ComedoresComponent } from './Usuario/Pages/comedores/comedores.component';
import { HospitalesComponent } from './Usuario/Pages/hospitales/hospitales.component';
import { PostasComponent } from './Usuario/Pages/postas/postas.component';
import { ClinicasComponent } from './Usuario/Pages/clinicas/clinicas.component';
import { RadioMovilComponent } from './Usuario/Pages/radio-movil/radio-movil.component';
import { SeccionAtractivosComponent } from './Usuario/Pages/seccion-atractivos/seccion-atractivos.component';
import { RedirectComponent } from './Usuario/Pages/redirect/redirect.component';
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TemplateComponent } from './Usuario/Components/template/template.component';
import { CalendarioComponent } from './Usuario/Components/calendario/calendario.component';
import { AtractivoMapperComponent } from './Usuario/Components/atractivo-mapper/atractivo-mapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    DestacadosComponent,
    InicioSesionComponent,
    EstacionalidadComponent,
    AccesibilidadComponent,
    TipoEmpresaComponent,
    TipoRestriccionComponent, //No se usa
    CarouselComponent,
    SliderComponent,
    TipoActividadComponent,
    RutaMesComponent,
    TipoAtractivoComponent,
    EmpresaComponent,
    UbicacionComponent,
    SeccionComponent,
    RestriccionComponent, //No se usa
    ActividadComponent,
    AtractivoComponent,
    DashboardComponent,
    VacioComponent,
    SubSeccionComponent,
    RegisterComponent,
    LoginComponent,
    UsuariosComponent,
    DondeIrComponent,
    QueHacerComponent,
    TemaMesComponent,
    TurismoGastronomicoComponent,
    LugarTuristicoComponent,
    InfoSectionComponent,
    RestaurantsComponent,
    DestinoTresSesentaComponent,
    LoadingComponent,
    AlimentacionComponent,
    RestaurantesDosComponent,
    SaludComponent,
    ServiciosComponent,
    TransportePageComponent,
    InforturPageComponent,
    EventosComponent,
    RutaMesPageComponent,
    HistoriaPageComponent,
    GeografiaPageComponent,
    InfopoliadminPageComponent,
    LugaresnaturalesPageComponent,
    TurismonaturalPageComponent,
    TurismoculturalPageComponent,
    TurismonaranjaPageComponent,
    TurismoruralPageComponent,
    TurismobienestarPageComponent,
    CicloturismoPageComponent,
    ElementopublicoPageComponent,
    PubsComponent,
    PeniasComponent,
    ComedoresComponent,
    HospitalesComponent,
    PostasComponent,
    ClinicasComponent,
    RadioMovilComponent,
    SeccionAtractivosComponent,
    RedirectComponent,
    TemplateComponent,
    CalendarioComponent,
    AtractivoMapperComponent,
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ToastrModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

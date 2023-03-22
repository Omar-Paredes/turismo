import React from "react";

const Infosec = ({ data, inlineStyle }) => {
  
  let relativeString;

  if(data.horarios) {
    const intl = new Intl.RelativeTimeFormat('es-ES');
    const eventDate = new Date(data.horarios + " 00:00:00");
    let today = new Date();
    today = String(today.getFullYear()) + "-" + String(today.getMonth() + 1) + "-" + String(today.getDate());
    const today0 = new Date(today + " 00:00:00");
    const relative = Math.floor((eventDate.getTime() - today0.getTime()) / (24 * 60 * 60 * 1000));
    relativeString = intl.format(relative, 'day');
  }

  return (
    <div style={inlineStyle} className="containerVideo page">
      <div 
        className="viewport-content"
        style={{
          backgroundImage: `url(${data.foto})`,
          backgroundSize: 'cover'
        }}
      >
        <div className="content">
          {
            data.actividades.length != 0 && 
            <div className="subtitle_cont">
              <h2>Actividades</h2>
              <div className="spacing">
                {
                  data.actividades.map((actividad) => (
                    <details key={actividad.id} className="actividad-detalles" title={actividad.nombre}>
                      <summary className={actividad.estado != "habilitado" && "tachado"}>{actividad.nombre}</summary>
                      <p>
                        {
                          actividad.estado != "habilitado" ?
                          <>
                            {"Actividad no disponible actualmente"}
                            <br/>
                          </> :
                          actividad.descripcion
                        }
                      </p>
                    </details>
                  ))
                }
              </div>
            </div>
          }
          <div className="subtitle_cont">
            <h2>Accesibilidad</h2>
            <div>
              <p><span>Tipo de vía: </span>{data.tipo_de_via}</p>
              <p><span>Estado de la vía: </span>{data.estado_de_via}</p>
            </div>
          </div>
        
          <div className="subtitle_cont">
            <h2>Ubicación</h2>
            <div>
              <p><span>Calles: </span>{data.calles}</p>
            </div>
          </div>
        
          <div className="subtitle_cont">
            <h2>Horarios</h2>
            <div>
              <p><span>Temporada: </span>{data.temporada}</p>
              {
                data.horarios && 
                <p>
                  <span>Fecha: </span>
                  {data.horarios + " (" + (relativeString === "dentro de 0 días" ? "Hoy" : relativeString) + ")"} 
                </p>
              }
              <p><span>Horarios: </span>de {data.hora_apertura.substring(0, 5)} a {data.hora_cierre.substring(0, 5)}</p>
            </div>
          </div>

          <div className="subtitle_cont">
            <div className="spacing">
              <details className="actividad-detalles">
                <summary className="details-details">Detalles</summary>
                <p><span>Tipo de atractivo: </span>{data.nombre_tipo_atractivo}</p>
                <p><span>Distrito: </span>{data.distrito}</p>
                <p><span>Altitud: </span>{data.altitud}</p>
                <p><span>Ubicación geográfica: </span>{data.ubicacion_geografica}</p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infosec;

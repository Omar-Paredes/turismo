import React from 'react'
import config from '../config';

const RedirectTo = () => {
  const res = window.location.href.replace(config.urlPage, "");

  window.location.href = config.urlPrincipal + res;

  return (
    <div>Redireccionando...</div>
  )
}

export default RedirectTo
import React from 'react'
import config from '../config';

const RedirectLanding = () => {
  window.location.href = config.urlPrincipal;

  return (
    <div>Redireccionando...</div>
  )
}

export default RedirectLanding
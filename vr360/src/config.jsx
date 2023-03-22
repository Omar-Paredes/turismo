const config = {
  local: {
    endpoint: "http://127.0.0.1:8000/api/",
    urlPage: "http://127.0.0.1:5173/#/",
    urlPrincipal: "http://127.0.0.1:4200/#/"
  },
  production: {
    endpoint: "https://alcaldia-turismo-laravel-production.up.railway.app/api/",
    urlPage: "https://cochabamba-turismo-360.web.app/#/",
    urlPrincipal: "https://cochabamba-turismo.web.app/#/"
  } 
};

export default config.local;

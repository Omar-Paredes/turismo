const config = {
  local: {
    endpoint: "http://127.0.0.1:8000/api/",
    urlPage: "http://127.0.0.1:5173/#/",
    urlPrincipal: "http://127.0.0.1:4200/#/"
  },
  production: {
    endpoint: "https://turismoapidev.cochabamba.bo/api/",
    urlPage: "https://turismo360dev.cochabamba.bo/",
    urlPrincipal: "https://turismodev.cochabamba.bo/"
  } 
};

export default config.local;

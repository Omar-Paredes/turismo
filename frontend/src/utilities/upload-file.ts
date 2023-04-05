export const sendCloudinary = async (val:File, progressRef: number) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('documens_files', val);
    formData.append('sistema_id', '00e8a371-8927-49b6-a6aa-0c600e4b6a19');
    formData.append('collector', 'turismo');

    const req = new XMLHttpRequest();
    req.open('POST', `https://repositoriogamc.cochabamba.bo/api/v1/repository/upload-files`);

     req.upload.addEventListener('progress', (e) => {
      progressRef = (e.loaded / e.total) * 100;
    }); 

    req.addEventListener('load', () => {
      resolve(req.response);
    });

    req.send(formData);
  })
}


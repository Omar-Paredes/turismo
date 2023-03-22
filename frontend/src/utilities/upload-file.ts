export const sendCloudinary = async (val:File, progressRef: number) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", val);
    formData.append("upload_preset", "wqazrcl1");

    const req = new XMLHttpRequest();
    req.open('POST', `https://api.cloudinary.com/v1_1/dqu6qcszt/upload`);
    req.upload.addEventListener('progress', (e) => {
      progressRef = (e.loaded / e.total) * 100;
    });

    req.addEventListener('load', () => {
      resolve(req.response);
    });

    req.send(formData);
  })
}
import Swal, { SweetAlertResult } from 'sweetalert2';

interface SweetAlertType {
  res: Promise<SweetAlertResult<any>>;
}

export const alertSuccess = (msg: string) => {
  Swal.fire({
    title: msg,
    icon: 'success',
    showConfirmButton: false,
    timer: 2000,
  });
};

export const alertWarning = async (msg: string): SweetAlertType['res'] => {
  const res = await Swal.fire({
    title: msg,
    // text: 'This process is irreversible.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar',
  });
  return res;
};

export const alertUpdate = async (msg: string): SweetAlertType['res'] => {
  const res = await Swal.fire({
    title: msg,
    icon: 'success',
    showConfirmButton: false,
    timer: 2000,
  });
  return res;
};

export const alertDelete = async (msg: string): SweetAlertType['res'] => {
  const res = await Swal.fire({
    title: 'Error',
    text: msg,
    icon: 'error',
    showConfirmButton: false,
    timer: 2000,
  });
  return res;
};

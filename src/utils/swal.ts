import Swal, { SweetAlertIcon } from 'sweetalert2';

interface SwalOptions {
  icon: SweetAlertIcon;
  title: string;
}

const showSwal = ({ icon, title }: SwalOptions) => {
  Swal.fire({
    icon,
    title,
    customClass: {
      popup: 'w-72 h-68 mb-64',
      title: 'text-base font-bold',
      confirmButton: 'swal2-confirm swal2-styled bg-swal-confirm text-white'
    }
  });
};

export default showSwal;

import { CanDeactivateFn } from '@angular/router';
import Swal from 'sweetalert2';

export const deactivateGuard: CanDeactivateFn<unknown> =async (component:any, currentRoute, currentState, nextState) => {
  console.log(component);
  let next = true
  if (component?.emailControl?.errors?.required) {
    await Swal.fire({
      title: 'El correo no ha sido diligenciado. Desea salir sin guardar los cambios?',
      showDenyButton: true,
      confirmButtonText: 'Si, salir',
      denyButtonText: 'No, quiero quedarme!',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        next = true
      } else if (result.isDenied) {
        next=false
      }
    })
  }
  return next
};

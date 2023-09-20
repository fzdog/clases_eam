import Swal from "sweetalert2";

export class SwalUtils{
    static customMessageOk(title:string,text:string) {
        Swal.fire({
            icon: 'success',
            title: title,
            text: text
        })
    }

    static customMessageError(title: string, text: string) {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text
        })
    }
}
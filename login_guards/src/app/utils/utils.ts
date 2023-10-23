export class Utils{

  static getToken(): string {
    let token: string = sessionStorage.getItem('token')!;
    if (token) {
      return token;
    } else {
      return '';
    }
  }

  static setToken(token:string) {
    JSON.stringify(sessionStorage.setItem('token',token))
  }

  static getRole():string {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    if (usuario) {
      return usuario.role;
    } else {
      return "";
    }
  }

  static isRole(role:string): boolean {
    const usuario = JSON.parse(sessionStorage.getItem('user')!);
    if (usuario) {
      return usuario.role.toLowerCase() == role.toLowerCase();
    } else {
      return false;
    }
  }
}

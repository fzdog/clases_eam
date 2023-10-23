export class Utils {
  static getRole(): string {
    const usuario = JSON.parse(sessionStorage.getItem('user')!)
    if (usuario) {
      return usuario.role
    } else {
      return ''
    }
  }
}

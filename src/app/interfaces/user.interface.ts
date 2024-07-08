export interface Usuario {
    iIdUsuario: number,
    iIdPerfil: number,
    sUsuario: string,
    sContra: string,
    sNombre: string,
    bActivo: number,
}
export interface UsuarioLogged {
    count: number;
    next: string;
    previous?: string;
    results: Usuario
}

export interface UsuariosResults {
    count: number;
    next: string;
    previous?: string;
    results: Usuario[]
}
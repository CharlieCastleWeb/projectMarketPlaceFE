
export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?: string;
    email?: string;
    token?: string;
    msg?: string;
    organizationType: string;
    projectList: string[];
}

export interface Usuario {
    uid: string;
    name: string;
    email: string;
    organizationType: string;
    projectList?: string[];
}
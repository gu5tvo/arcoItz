export interface iAdmin {
    id: string;
    name: string;
    email: string;
    avatar: string;
    phone: string;
    city: string;
}

export interface iAdminLogin {
    email: string;
    password: string;
}

export interface iAdminRegister {
    name: string;
    email: string;
    password: string;
}

export interface iAdminEdit {
    name?: string;
    email?: string;
    password?: string;
}

export interface iSectors {
    id: string;
    name: string;
}

export interface iCity {
    id: string;
    name: string;
}
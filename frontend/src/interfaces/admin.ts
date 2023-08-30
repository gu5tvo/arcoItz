export interface iAdmin {
    id: string;
    name: string;
    email: string;
    avatar: string;
    phone: string;
    city: string;
    isSuper: boolean;
}

export interface iAdminLogin {
    email: string;
    password: string;
    remember: boolean | undefined;
}

export interface iAdminRegister {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface iAdminEdit {
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    phone?: string;
    city?: string;
}

export interface iSectors {
    id: string;
    name: string;
}

export interface iCity {
    id: string;
    name: string;
}

export interface iListUsers {
    page?: number;
    amount?: number;
    city?: string;
    name?: string;
    id?: string;
    isBanned?: boolean;
    isActive?: boolean;
    area?: string;
    title?: string
}
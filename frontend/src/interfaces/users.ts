export interface iLogin {
    email: string;
    password: string;
}

export interface iRegister {
    name: string;
    email: string;
    password: string;
}

export interface iUserSimple{
    id?: string;
    avatar?: string;
    name?: string;
    email?: string;
    bio?: string | null;
    area?: string | null;
    address?: string | null;
    title?: string | null;
    number?: string | null;
    gender?: string | null;
    pronnouns?: string | null;
    city?: string | null;
    isActive?: boolean;
    isVerified?: boolean;
    isBanned?: boolean;
    instagram?: string | null;
    linkedin?: string | null;
    portfolio?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface iDocuments {
    id: string;
    name: string;
    description: string;
    document: string;
}

export interface iSkills{
    id: string;
    name: string;
}

export interface iCourses{
    data: any;
    id: string;
    name: string;
    institution: string;
    from: string;
    to: string;
    description: string;
}

export interface iExperiences{
    id: string;
    title: string;
    company: string;
    location: string;
    from: string;
    to: string;
    description: string;
}

export interface iUserComplete extends iUserSimple{
    documents: iDocuments[];
    skills: iSkills[];
    experiences: iExperiences[];
    courses: iCourses[];
}
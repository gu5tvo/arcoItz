import mongoose from 'mongoose';

export interface iUser extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface iUserReturn {
    id: string;
    avatar: string;
    name: string;
    email: string;
    bio: string;
    area: string;
    address: string;
    title: string;
    number: string;
    gender: string;
    pronnouns: string;
    city: string;
    isActive: boolean;
    isBanned: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    password: undefined;
    __v: undefined,
    _id: undefined
}

export interface iUserUpdate {
    name: string;
    email: string;
    password: string;
    avatar: string;
    gender: string;
    pronnouns: string;
    city: string;
    number: string;
    bio: string;
    area: string;
    address: string;
    title: string;
    isActive: boolean;
}

export interface iRegister{
    name: string;
    email: string;
    password: string;
}

export interface iDisplayAll{
    page: string;
    pageSize: string;
    content: Array<iUserReturn>;
}

export interface iDocument {
    id: string;
    name: string;
    description: string;
    document: string;
}

export interface iSkill{
    id: string;
    name: string;
    ownerId?: undefined;
}

export interface iExperience{
    id: string;
    title: String,
    company: String,
    location: String,
    from: String,
    to: String,
    description: String,
    ownerId?: undefined;
}

export interface iCourse{
    id: string;
    name: String,
    institution: String,
    from: String,
    to: String,
    description: String
    ownerId?: undefined;
}

export interface iDisplayProfile{
    id: string;
    avatar: string;
    name: string;
    email: string;
    bio: string;
    area: string;
    address: string;
    password: undefined;
    title: string;
    number: string;
    gender: string;
    pronnouns: string;
    city: string;
    isActive: boolean;
    isBanned: boolean;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    documents: Array<iDocument>;
    skills: Array<iSkill>;
    experiences: Array<iExperience>;
    courses: Array<iCourse>;
    __v: undefined,
    _id: undefined
}
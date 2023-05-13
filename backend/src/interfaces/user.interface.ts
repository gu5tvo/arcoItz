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
    name: string;
    email: string;
    password: undefined;
    avatar: string;
    bio: string;
    area: string;
    address: string;
    title: string;
    isActive: boolean;
    documents: Array<{
        id: string;
        name: string;
        description: string;
        document: string;
    }>
    createdAt: Date;
    updatedAt: Date;
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
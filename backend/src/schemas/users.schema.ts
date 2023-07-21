import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required().min(3).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*[@!#$%&*])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@!#$%&*]{8,}$/)
});


export const updateSchema = yup.object().shape({
    name: yup.string().min(3).max(80),
    email: yup.string().email(),
    avatar: yup.string(),
    bio: yup.string().min(3).max(1000),
    area: yup.string().min(3).max(100),
    address: yup.string().min(3).max(100),
    title: yup.string().min(3).max(100),
    phone: yup.string(),
    gender: yup.string().min(3).max(100),
    pronouns: yup.string().min(3).max(100),
    city: yup.string().min(3).max(100),
    isActive: yup.boolean(),
    instagram: yup.string().min(3).max(100),
    linkedin: yup.string().min(3).max(100),
    portfolio: yup.string().min(3).max(100),
})

export const documentSchema = yup.object().shape({
    name: yup.string().required().min(3).max(50),
    description: yup.string().required().min(3).max(1000),
    document: yup.string().required(),
})
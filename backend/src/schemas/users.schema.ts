import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string().required().min(3).max(50),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
});

export const returnSchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required().email(),
    bio: yup.string().required(),
    area: yup.string().required(),
    address: yup.string().required(),
    title: yup.string().required(),
    isActive: yup.boolean().required(),
    documents: yup.array().of(yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required(),
        description: yup.string().required(),
        document: yup.string().required(),
        ownerId: yup.string().required()
    })),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required()
})
import * as yup from 'yup';

export const createSkill = yup.object().shape({
    name: yup.string().required().min(1).max(50)
})
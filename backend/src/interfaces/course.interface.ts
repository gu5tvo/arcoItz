export interface iCourse {
    name: string;
    institution: string;
    from: string;
    to?: string;
    description?: string;
    status: string;
    type: string;
}

/*
    if(data.name) course.name = data.name;
    if(data.institution) course.institution = data.institution;
    if(data.from) course.from = data.from;
    if(data.to) course.to = data.to;
    if(data.description) course.description = data.description;
    if(data.status) course.status = data.status;
    if (data.type) course.type = data.type
 */
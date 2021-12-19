export interface Project {
    title: string,
    projectId: string,
    ownerId: string,
    publishedDate: number,
    deadLine: number,
    techSet: string[],
    shortExplanation: string,
    state: string,
    bid: number
}

export interface User {
    name: string,
    userId: string,
    email: string,
    password: string,
    verified: boolean,
    projectsPublished: Project[],
    admin: boolean,
    typeOfInstitution: string
}
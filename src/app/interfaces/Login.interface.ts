export interface ILoginReq {
    email: string,
    password: string
}

export interface ILoginRes {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    role: string
}

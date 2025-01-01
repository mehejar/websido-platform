export type TName = {

    firstName: string;
    middleName?: string;
    lastName: string;

}

export interface TUser {
    name: TName
    email: string;
    contact: number;
    password: string;
    role: 'user'
    status: 'in-progess' | 'blocked';
    isDeleted: boolean;

};

export type TErrorSource = {
    path: string | number;
    message: string
}[];
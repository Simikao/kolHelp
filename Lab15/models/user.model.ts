import { UserSex } from "../enums/users.sex.enum";

export interface User {
    id: string;
    name: string;
    phoneNumber?: number | null;
    email?: string | null;
    sex: UserSex;
    deleted: boolean;
}
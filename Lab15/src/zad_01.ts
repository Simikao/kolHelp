import { User } from "../models/user.model";

class UserService {
    users: User[];

    constructor() {
        this.users = []
    }

    public createUser(user: User): void{
        if (user.name === "") {
            throw new Error("Please input a name");
            
        } else if (user.email === "" || user.email === undefined) {
            user.email = null;
        } else if (user.phoneNumber === undefined) {
            user.phoneNumber = null
        } else {
            user.id = crypto.randomUUID()
            user.deleted = false
            this.users.push(user)
        }
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getActiveUsers(): User[] {
        return this.users.filter((user: User) => !user.deleted)
    }
}
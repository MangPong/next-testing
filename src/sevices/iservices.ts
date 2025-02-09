import { Role, User} from "@prisma/client"

export interface ISimpleService {
    ok(): string
}

export interface IloginService {
    login(username: string, password: string): Promise<User | null>;
    createCookie(user:User): Promise<string>;
    getUserFormSessions(session: string): Promise<User | null>;
    getCuurrentRoles(session: string): Promise<Role[]>
}

export interface IAuthorizationService {
    getRolesByUserId(id: number): Promise<Role[]>;
    hasRole(userId: number, role:string): Promise<boolean>
    getUserFormSession() : User
}
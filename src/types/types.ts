export type User={
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export type UserWithoutPassword={
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}
export type UserOnleNameEmailPass={
    name: string;
    email: string;  
    password: string;
}
      
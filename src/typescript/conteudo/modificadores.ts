export interface User {
    readonly id: string;
    name: string;
    email?: string;
}

const user: User = {
    id: "1234",
    name: "Alan Jhonnes",
};

user.name = "Alan";
// user.id = "4321";

if (user.email) {
    user.email.toUpperCase();
}

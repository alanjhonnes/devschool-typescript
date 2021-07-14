export type Bool = true | false;


export interface User {
    id: string;
    name: string;
}

export type PossibleUser = User | null;

export function isAnonymous(currentUser: PossibleUser): boolean {
    return currentUser === null;
}

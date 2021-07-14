export const anything: any = 2;

export const idk: unknown = {};

export function noReturn(): void {
    return;
}

function alwaysThrows(): never {
    // while (true) {

    // }
    throw new Error();
}

if (idk === undefined) {
    idk
}

if (idk instanceof Date) {
    idk
};

const alan = "Alan";
const id = 1;

type YesOrNo = "y" | "n";

const alwaysTrue = true;

function shouldContinue(input: YesOrNo): boolean {
    if (input === "y") {
        return true;
    }
    return false;
}

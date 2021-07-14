export enum ACTION {
    PLAY = '1',
    PAUSE = '2',
    STOP = '3',
}

function doAction(action: ACTION) {
    console.log(action);
}

doAction(ACTION.PAUSE)

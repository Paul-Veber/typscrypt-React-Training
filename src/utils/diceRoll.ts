
export const diceRoll = (numberOfFaces: number): number => {
    return Math.random() * (numberOfFaces - 1) + 1
}
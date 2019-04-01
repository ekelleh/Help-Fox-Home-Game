// Story class with properties that enable linking a part of the story with the choices

export class Story {
    constructor(content, id, isGameOver = false, isGameWon = false) {
        this.content = content;
        this.id = id;
        this.isGameOver = isGameOver;
        this.isGameWon = isGameWon;
    }
}

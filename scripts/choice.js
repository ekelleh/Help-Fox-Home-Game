// Choice class w/ properties that enable linking the choice to a) which story part it comes after and
// b) which story part it targets

export class Choice {
    constructor(content, storyId, targetStoryId) {
        this.content = content;
        this.story = storyId;
        this.targetStory = targetStoryId;
    }
}

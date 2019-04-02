// This is a collection of all the data for the choices that lead to the next part of the story
// choices constructed in the Choices class in choice.js

export default [
    {
        content:
            "Maybe it’s safer to just start heading straight home, you can find something to nibble on on the way..",
        storyId: "0A",
        targetStoryId: "1B"
    },
    {
        content:
            "Turn around and follow your nose in the direction of the smell, there might be food close by...",
        storyId: "0A",
        targetStoryId: "1A"
    },
    {
        content:
            "Nah, it’s not really worth the hassle..maybe you’ll just turn around to go straight home",
        storyId: "1A",
        targetStoryId: "2A"
    },
    {
        content:
            "Maybe there is another route to get to the source of the smell? What if you try finding another way?",
        storyId: "1A",
        targetStoryId: "2B"
    },
    {
        content: "Better check out that sound!",
        storyId: "1B",
        targetStoryId: "2B"
    },
    {
        content:
            "You really just want to go home, right. This is just a distraction, so you continue homewards",
        storyId: "1B",
        targetStoryId: "2C"
    },
    {
        content: "You freeze, cautious as you are. Better wait and see..",
        storyId: "1B",
        targetStoryId: "2D"
    },
    {
        content: " life has taught you to be suspicious of others, so you bare your teeth and growl",
        storyId: "2B",
        targetStoryId: "3A"
    },
    {
        content: "you think the fox looks friendly enough, so you approach..",
        storyId: "2B",
        targetStoryId: "3A"
    },
    {
        content: "you freeze, wait to see what the other fox does, better be cautious",
        storyId: "2B",
        targetStoryId: "3C"
    },
    {
        content:
            "Why turn back now, that makes no sense, right? You continue as you  just wanna get home where there is food and warmth",
        storyId: "2C",
        targetStoryId: "3D"
    },
    {
        content: "Better go back, that food smell was rather enticing, right?",
        storyId: "2C",
        targetStoryId: "1A"
    },
    {
        content:
            "What about checking out the pond? There is usually lots rabbits  there and you could do a little hunting..",
        storyId: "2C",
        targetStoryId: "3E"
    },
    {
        content: "You really need to know what’s happening over there, maybe it’s a rabbit!",
        storyId: "2D",
        targetStoryId: "3E"
    },
    {
        content:
            "You didn’t care checking out the sound in the bushes, this is no different. Better continue..",
        storyId: "2D",
        targetStoryId: "3D"
    },
    {
        content:
            "You didn’t check out the sound in the bush and now there is more, maybe you should go back check the bush? ",
        storyId: "2D",
        targetStoryId: "2B"
    },
    {
        content: "Human food is garbage and there are usually rabbits at the pond, better go there!",
        storyId: "3A",
        targetStoryId: "3E"
    },
    {
        content:
            "Why should you trust this other fox..you don’t know them and you might just as well continue home, you do have food there",
        storyId: "3A",
        targetStoryId: "3D"
    },
    {
        content: "This sounds nice and finding food is easier than hunting anyways..",
        storyId: "3A",
        targetStoryId: "4A"
    },
    {
        content: "You better follow and see what this other fox is up to...",
        storyId: "3C",
        targetStoryId: "3D"
    },
    {
        content: "Nah, why bother with this, better check out the pond, there are usually rabbits there",
        storyId: "3C",
        targetStoryId: "3E"
    },
    {
        content:
            "You decide it’s no use hunting rabbits as you have food waiting for you at home and these furry friends are rather cute after all",
        storyId: "3E",
        targetStoryId: "2B"
    },
    {
        content: " Ah yes! it is time for a rabbit hunt!",
        storyId: "3E",
        targetStoryId: "4B"
    },
    {
        content: "You run for the smell as fast as you can, it’s so damn appetizing!",
        storyId: "4A",
        targetStoryId: "5A"
    },
    {
        content:
            "Vary of the humans, you let the other fox go first while you wait back in the shadows. Let the fox who knows go first, there is plenty of food to go around anyways",
        storyId: "4A",
        targetStoryId: "5B"
    },
    {
        content: "Time to get moving again!",
        storyId: "4B",
        targetStoryId: "3D"
    },
    {
        content:
            "The other rabbits are still close by and you could catch one more to take with you home",
        storyId: "4B",
        targetStoryId: "5C"
    }
];

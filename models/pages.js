export const PAGES = [
    {
        id: "start",
        story: "There wasn't much left in the town. Only a few buildings long abadoned and decaying. You lament your car breaking down here but decide that there is no use in waiting around",
        image: "/assets/images/.jpg",
        button1: "Check Old gas station!",
        button1Id: "Gas",
        button2: "",
        button2Id: "",
    },
    {
        id: "Gas",
        story: "There is a footprint outside of the gas station, not your own.",
        image: "/assets/images/.jpg",
        button1: "NotToday.",
        button1Id: "stayOutside",
        button2: "Run away.",
        button2Id: "findKey",
    },
    {
        id: "stayOutside",
        story: "story lines.",
        image: "/assets/images/.jpg",
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    },
    {
        id: "findKey",
        story: "You find the gas station key",
        image: "/assets/images/.jpg",
        button1: "OwnMachanic.",
        button1Id: "storyGoal",
        button2: "",
        button2Id: ""
    },
    {
        id: "storyGoal",
        story: "Hello. The stranger greets you warmly. “My name is Nigel and you lucky adventurers have been chosen to lift the curse on Jumanji. You must take this jewel to the jaguar statue”. He hands you a jewel. “Well this is your stop, good luck out there” Nigel says as he waves goodbye. You get out of the car and discuss what to do.",
        image: "/assets/images/jeep.jpg",
        button1: "This is too hard, lets just go home.",
        button1Id: "giveUp",
        button2: "I want to save Jumanji",
        button2Id: "findDesert",
    },
    {
        id: "giveUp",
        story: "You give up and spend your days hiding from the hippos. GAME OVER.",
        image: "/assets/images/tent.jpg",
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: ""
    },
    {
        id: "findDesert",
        story: "Exploring deeper you find a break in the trees leading to a desert. As you walk deeper into the desert you are suddenly attacked by a villainous biker gang.",
        image: "/assets/images/desertBiker.jpg",
        button1: "Jump off a cliff to try and escape.",
        button1Id: "cliffJump",
        button2: "Try and outrun the gang back through the trees.",
        button2Id: "bikerDeath"
    },
    {
        id: "bikerDeath",
        story: "The bikers catch up to you and end your adventure. GAME OVER.",
        image: "/assets/images/biker.jpg",
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: ""
    },
    {
        id: "cliffJump",
        story: "You jump the cliff and fall into a river, escaping the bikers successfully. You let the river carry you downstream until you see some buildings. You leave the river and find yourself in a bazaar. You see many buildings in front of you including a chapel with magnificent towers, as you are admiring the town a boy bumps into you and quickly gets up to run away.",
        image: "/assets/images/market.jpg",
        button1: "Investigate the chapel.",
        button1Id: "insideChapel",
        button2: 'Follow the suspicious boy',
        button2Id: 'basketRoom',
    },
    {
        id: "insideChapel",
        story: "You enter and see two doors. One with crimson red glass, the other adorned with glass of royal blue.",
        image: "/assets/images/chapel.jpg",
        button1: "Enter the red door",
        button1Id: "redDoorDeath",
        button2: "Enter the blue door.",
        button2Id: "blueDoorDeath",
    },
    {
        id: "redDoorDeath",
        story: "You are poisoned by venomous snakes. GAME OVER",
        image: "/assets/images/redSnake.jpg",
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    },
    {
        id: "blueDoorDeath",
        story: "You are eaten by a room full of wild dogs. GAME OVER.",
        image: "/assets/images/wildDogs.jpg",
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    },
    {
        id: "basketRoom",
        story: "The boy leads you to a room full of baskets and then escapes through a child size gap in the wall. Your group decides to investigate the baskets. You find various fruits and grains. Then in the very last basket you find the missing map piece that can lead you to the jaguar statue.",
        image: "/assets/images/statue.jpg",
        button1: "Head to the jaguar statue to save Jumanji.",
        button1Id: "statue",
        button2: "",
        button2Id: "",
    },
    {
        id: "statue",
        story: "You arrive at the statue and see a gap in the jaguar statues eye that is just the right size for the jewel.",
        image: "/assets/images/statue.jpg",
        button1: "Place the jewel into the jaguar's eye.",
        button1Id: "win",
        button2: "",
        button2Id: "",
    },
    {
        id: "win",
        story: "You broke the curse and saved Jumanji. YOU WIN!!!",
        image: "/assets/images/winning.jpg",
        button1: "Reset",
        button1Id: "start",
        button2: "",
        button2Id: "",
    } 
]
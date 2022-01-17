class Hangman {
    word = ""
    percentToMask = 60
    maskedWord = ""
    count = 4

    constructor(words, percentToMask = 60) {
        this.word = words[Math.floor(Math.random() * words.length)]
        this.word = this.word.toUpperCase()
        this.percentToMask = percentToMask;
    }

    getIndicies() {
        let final = [];
        let myset = new Set(final)
        let numToMask = Math.floor(this.word.length * (this.percentToMask / 100))
        while (myset.size !== numToMask) {
            for (let i = 0; i < this.word.length; i++) {
                final[i] = (Math.floor(Math.random() * this.word.length))
                myset = new Set(final)
            }
        }
        let arr = [...myset];
        arr.sort((a, b) => a - b)
        return arr;
    }

    maskWord() {
        let arr = this.getIndicies()
        let out = this.word.split('')
        let outputStr = ""
        for (let j = 0; j < out.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (j === arr[k]) {
                    out[j] = '-'
                }
            }
        }
        for (let a = 0; a < out.length; a++) {
            outputStr += out[a]
        }
        this.maskedWord = outputStr
        return outputStr
    }

    writeToElem() {
        document.getElementById("text").innerHTML = this.maskedWord
        document.getElementById("counter").innerHTML = this.count
    }

    answer(letter) {
        let split = this.maskedWord.split('')
        let returnThisStr = ""
        this.count--
        for (let i = 0; i < this.word.length; i++) {
            if (letter == this.word[i]) {
                split[i] = letter
                this.count++
            } 
        }
        for (let j = 0; j < split.length; j++) {
            returnThisStr += split[j]
        }
        this.maskedWord = returnThisStr
        this.writeToElem()
        document.getElementById("counter").innerHTML = this.count
        if (this.count === 0) {
            alert ("You lose")
        }
        if(this.maskedWord === this.word) {
            alert("YOU WIN THE GAME");
            document.getElementById("text").style.color = "green"
        }
    }


    debug() {
        console.log(this)
        const array = this.getIndicies()
        console.log(array)
        this.maskWord()
        console.log(this.maskedWord)
    }
}

const words = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

const hangman = new Hangman(words)
hangman.getIndicies()
hangman.maskWord()
hangman.debug()
hangman.writeToElem()


const elem = document.getElementsByClassName("letter-selector")
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", (ele) => {
        hangman.answer(ele.target.innerHTML)
    })
}



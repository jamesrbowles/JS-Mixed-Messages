// Object Array of quotes

let quotes = 
[
    {
        quote: "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion’",
        boxer: "Muhammad Ali"
    },
    {
        quote: "The hero and the coward both feel the same thing. But the hero uses his fear, projects it onto his opponent, while the coward runs. It’s the same thing, fear, but it’s what you do with it that matters.",
        boxer: "Cus D’amato"
    },
    {
        quote: "If you work hard in training, the fight is easy.",
        boxer: "Manny Pacquiao"
    },
    {
        quote: "You never lose until you actually give up.",
        boxer: "Mike Tyson"
    },
    {
        quote: "It ain’t about how hard you can hit. It’s about how hard you can get hit and keep moving forward.",
        boxer: "Rocky Balboa"
    }
]


// Function that returns a random quote

const genRandomQuote = () => {
    let random = Math.floor(Math.random() * quotes.length)
    return `"${quotes[random].quote}" by ${quotes[random].boxer}`
}


// Display random quote in console

console.log(genRandomQuote())

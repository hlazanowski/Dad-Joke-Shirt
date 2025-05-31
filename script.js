
const jokes = [
    "Why did the computer show up at work late? It had a hard drive.",
    "I only know 25 letters of the alphabet. I don’t know Y.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "How do you comfort a JavaScript bug? You console it.",
    "I asked my dog what's two minus two. He said nothing.",
    "What do you call a factory that makes okay products? A satisfactory.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "What kind of shoes to frogs wear? Open-toad sandals.",
    "Why do crabs never volunteer? Because they're shell-fish.",
    "I had a quiet game of tennis today. There was no racket.",
    "What's a shark's favorite saying? Man overboard!",
    "What did one slice of bread say to the other before the race? You're toast!",
    "I poured some water over a duck's back yesterday. I don't think he cared.",
    "Why do melons have weddings? They cantelope.",
    "What did the bison say to his son when he left the ranch? Bi-son.",
    "Watch what you say around the egg whites. They can't take a yolk.",
    "I'm so good at fixing things, my motto is, If it is broke, I'll still fix it.",
    "Were did the pumpkins have their meeting? In the gourdroom.",
    "What's the best way to save your dad jokes? In a dadda-base.",
    "What do you call a sheep who can sing and dance? Lady Ba Ba.",
    "What do you call a French man wearing sandals? Philipe Fallop.",
    "Why can't dinosaurs clap their hands? Because they're extinct.",
    "Who won the neck decorating contest? It was a tie.",
    "What do mermaids use to wash their fins? Tide.",
    "What did the skillet eat on its birthday? Pan-cakes.",
    "I went to a silent auction. I won a dog whistle and two mimes.",
    "How is my wallet like an onion? Every time I open it, I cry.",
    "What do you call a dog who meditates? Aware wolf.",
    "What kind of fish do penguins catch at night? Star fish.",
    "Which vegetable has the best kung fu? Broc-lee.",
    "Can a frog jump higher than a house? Of course, a house can't jump.",
    "I was going to try an all almond diet, but that's just nuts."
];

function newJoke() {
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById("joke").innerText = joke;
}

window.onload = newJoke;

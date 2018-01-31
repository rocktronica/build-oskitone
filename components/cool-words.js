import { find, shuffle } from "lodash";

const words = [
    "aloof",
    "apoplectic",
    "apotheosis",
    "argyle",
    "august",
    "awesum",
    "balloon",
    "balderdash",
    "bandersnatch",
    "bbbbbbbbbbbbbbbbbbbbb",
    "befuddled",
    "bing bong",
    "boondoggle",
    "chimichanga",
    "chupacabra",
    "computron",
    "conversatiate",
    "cool",
    "crackle",
    "curious",
    "defo",
    "dope",
    "dross",
    "epicurean",
    "epiphany",
    "escargot",
    "festoon",
    "fine",
    "fizzle",
    "foment",
    "fulgent",
    "fun",
    "great",
    "heart",
    "hehe",
    "humdinger",
    "incredible",
    "ineffable",
    "insouciance",
    "invent",
    "jk",
    "kerfuffle",
    "lol",
    "lush",
    "maelstrom",
    "maladroit",
    "maw",
    "my dudes",
    "noble",
    "paean",
    "palatable",
    "punctilious",
    "raconteur",
    "rapscallion",
    "scion",
    "serendipity",
    "sure",
    "tacos",
    "transcendental",
    "well hey now",
    "word",
    "wow",
    "yeah",
    "yelling",
    "yes"
];

const getCoolWordByLength = length => {
    const shuffledWords = shuffle(words);
    const exactMatch = find(shuffledWords, word => word.length === length);
    const nextMatch = find(shuffledWords, word => word.length <= length);
    return exactMatch || nextMatch || "";
};

export { words, getCoolWordByLength };

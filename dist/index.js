"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const words = [
    "apple",
    "table",
    "chair",
    "piano",
    "melon",
    "green",
    "happy",
    "zebra"
    // Add more 5-letter words here
];
function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}
app.get('/random-word', (req, res) => {
    const randomWord = getRandomWord();
    res.json({ secret: randomWord });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

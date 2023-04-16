import express, { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

const words: string[] = [
  "apple",
  "table",
  "chair",
  "piano",
  "melon",
  "green",
  "happy",
  "zebra"
];

function getRandomWord(): string {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

app.get('/random-word', (req: Request, res: Response) => {
  const randomWord = getRandomWord();
  res.json({ secret: randomWord });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

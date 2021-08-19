import { LoremIpsum } from "lorem-ipsum";

const products = [
  { name: "Barrel Cactus", price: 12.99, skew: "barrel-cactus" },
  { name: "Brayden Cactus", price: 8.99, skew: "brayden-cactus" },
  { name: "Cactus Rose", price: 39.99, skew: "cactus-rose" },
  { name: "Finger Cactus", price: 19.99, skew: "finger-cactus" },
  { name: "frosted cactus", price: 6.99, skew: "frosted-cactus" },
  { name: "Hanging Cactus", price: 19.99, skew: "hanging-cactus" },
  { name: "Macadoodle Succulent", price: 22.99, skew: "macadoodle" },
  { name: "Oval Cactus", price: 31.5, skew: "oval-cactus" },
  { name: "Royal Mini Cactus", price: 6.99, skew: "royal-mini-cactus" },
  { name: "Terrarium", price: 49.99, skew: "terrarium" },
];

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 10,
    min: 5,
  },
});

products.forEach((product) => {
  product.details = lorem.generateSentences(5);
  product.price = product.price.toFixed(2);
});

export default products;

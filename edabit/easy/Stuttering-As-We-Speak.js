//https://edabit.com/challenge/ccv2_5de60f3d2387c20d58e174f3
const stuttering = (word) =>
  `${word[0]}${word[1]}${".".repeat(3)} `.repeat(2) + word + "!";

console.log(stuttering("astounding")); // "as... as... astounding!"

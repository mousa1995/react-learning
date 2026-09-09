//https://edabit.com/challenge/ccv2_e54cde606934be64a431ad5a

const vowReplace = (text, v) => {
  const vowel = ["a", "e", "o", "i", "u"];
  return [...text]
    .map((el) => {
      if (vowel.includes(el)) return v;
      return el;
    })
    .join("");
};

console.log(vowReplace("apples and bananas", "u")); // ➞ "upplus und bununus");

// Business Logic

function pigLatin(word, vowels) {
	for (index = 0; index < vowels.length; index+=1) {
    if (word[0] === vowels[index]) {
      return word = word.concat("way");
    } else {
      return word;
    }
	} 
}
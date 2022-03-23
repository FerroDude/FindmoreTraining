//Bonus Time!
//Bonus 1:
//Go to lorem ipsum generator and:

//Generate 3 paragraphs. Store the text in a variable type of string.
let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam. Elit duis tristique sollicitudin nibh. Tortor at risus viverra adipiscing at in tellus. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Phasellus egestas tellus rutrum tellus. Nulla malesuada pellentesque elit eget gravida cum sociis. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Gravida quis blandit turpis cursus in. Tristique senectus et netus et malesuada fames ac turpis. Ornare arcu dui vivamus arcu felis. Sit amet facilisis magna etiam tempor orci. Tellus molestie nunc non blandit massa enim nec.Nullam non nisi est sit amet facilisis magna etiam tempor. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis. Enim eu turpis egestas pretium aenean pharetra magna ac. Urna cursus eget nunc scelerisque viverra mauris. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Pulvinar pellentesque habitant morbi tristique senectus et. Enim tortor at auctor urna nunc. Euismod nisi porta lorem mollis aliquam ut porttitor. Faucibus turpis in eu mi bibendum neque. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Dui id ornare arcu odio.Eu facilisis sed odio morbi quis. Integer eget aliquet nibh praesent tristique magna. Sagittis orci a scelerisque purus semper eget duis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Semper auctor neque vitae tempus quam. Mauris pellentesque pulvinar pellentesque habitant. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Mattis enim ut tellus elementum sagittis vitae et leo duis. Faucibus pulvinar elementum integer enim neque volutpat ac. Tristique et egestas quis ipsum. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. At elementum eu facilisis sed odio. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Ut tellus elementum sagittis vitae et. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Mauris sit amet massa vitae tortor condimentum lacinia. Mattis nunc sed blandit libero. In nisl nisi scelerisque eu ultrices. Sed euismod nisi porta lorem mollis aliquam ut. Nec feugiat nisl pretium fusce id velit.";

//Make your program count the number of words in the string.

function countWords(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      count++;
    }
  }
  return count + 1;
}
console.log(countWords(text));

//Make your program count the number of times the Latin word et appears.

function char_count(text) {
  let letterCount = 0;
  for (let i = 0; i <= text.length; i++) {
    if (
      text[i] === "e" &&
      text[i + 1] === "t" &&
      text[i - 1] === " " &&
      (text[i + 2] === " " || text[i + 2] === ".")
    ) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(char_count(text));

//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.

let newName = "civic";
let nameNew = "";

for (i = newName.length - 1; i >= 0; i--) {
  nameNew = nameNew + newName[i];
}

if (newName === nameNew) {
  console.log("This word is Palindrome");
} else {
  console.log("This word is not Palindrome");
}

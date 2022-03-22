//Bonus Time!
//Bonus 1:
//Go to lorem ipsum generator and:

//Generate 3 paragraphs. Store the text in a variable type of string.

let Text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Eget nulla facilisi etiam dignissim diam. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Donec pretium vulputate sapien nec sagittis. Blandit turpis cursus in hac. Ornare arcu odio ut sem. Lacus viverra vitae congue eu. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Nibh praesent tristique magna sit amet purus gravida quis blandit. Id cursus metus aliquam eleifend mi in. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Sapien pellentesque habitant morbi tristique senectus. Sit amet mattis vulputate enim. Enim neque volutpat ac tincidunt vitae semper quis. In eu mi bibendum neque egestas. Elementum tempus egestas sed sed risus pretium. Massa tincidunt dui ut ornare lectus sit amet. Amet volutpat consequat mauris nunc. Turpis massa tincidunt dui ut ornare. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sit amet dictum sit amet justo donec. Netus et malesuada fames ac turpis. Egestas purus viverra accumsan in nisl nisi. Odio morbi quis commodo odio aenean sed adipiscing. Quam pellentesque nec nam aliquam sem et tortor consequat id. Posuere morbi leo urna molestie at. Vitae justo eget magna fermentum iaculis eu. Quis commodo odio aenean sed adipiscing diam. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Lacus vel facilisis volutpat est velit. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Ultrices gravida dictum fusce ut placerat orci nulla. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Erat pellentesque adipiscing commodo elit. Sollicitudin nibh sit amet commodo nulla facilisi. Enim nunc faucibus a pellentesque sit amet porttitor eget. Aliquet porttitor lacus luctus accumsan tortor. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Consectetur libero id faucibus nisl tincidunt eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Quis lectus nulla at volutpat diam ut venenatis tellus. Ipsum nunc aliquet bibendum enim. Sagittis aliquam malesuada bibendum arcu.";
//Make your program count the number of words in the string.
function countWords(str) {
  const text = Text.split(" ");

  return text.filter((word) => word !== "").length;
}

console.log(countWords(Text.length));
//Make your program count the number of times the Latin word et appears.

var temp = Text;
var count = (temp.match(/et/g) || []).length;
console.log(count);
//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.

let phraseToCheck = "civiw";
let ptcReverse = phraseToCheck.split("").reverse().join("");

if (phraseToCheck === ptcReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}

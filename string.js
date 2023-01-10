/*All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.
*/
let String = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

String.length
String.slice() //extracts a part of a string and returns the extracted part in a new string.

//The method takes 2 parameters: start position, and end position (end not included).Slice out a portion of a string from position 7 to position 13;
//let text = "Apple, Banana, Kiwi";
//let part = text.slice(7, 13);

String.substring() //The difference is that start and end values less than 0 are treated as 0 in substring().
String.substr() //The difference is that the second parameter specifies the length of the extracted part.
String.replace() //The replace() method replaces a specified value with another value in a string. The replace() method does not change the string it is called on. The replace() method returns a new string.
String.replaceAll()
String.toUpperCase()
String.toLowerCase()
String.concat() //joins two or more strings:
String.trim() // method removes whitespace from both sides of a string:
String.trimStart()
String.trimEnd()
String.padStart() //method pads a string with another string:
String.padEnd()
String.charAt() //method returns the character at a specified index (position) in a string:
String.charCodeAt()
String.split() //A string can be converted to an array with the split() method:



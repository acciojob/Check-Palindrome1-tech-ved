function isPalindrome(s) {
  // normalize: remove spaces + lowercase
  let clean = s.toLowerCase().replace(/\s+/g, "");
  
  let rev = clean.split("").reverse().join("");
  return clean === rev;
}
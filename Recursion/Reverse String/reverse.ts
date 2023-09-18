function reverseStrings(str:string): string {
    if (str.length === 1) {
      return str;
    }
    return str.charAt(str.length - 1) + reverseStrings(str.slice(0, -1));
  }
  
  console.log(reverseStrings("ABACADABA"));
  
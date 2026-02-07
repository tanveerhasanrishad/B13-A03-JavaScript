function analyzeText(str) {
  let obj = {
    longwords: "",
    token: 0,
  };
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  } else {
    for (const num of str.split(" ")) {
      if (obj.longwords.length < num.length) {
        obj.longwords = num;
      }
    }

    for (const num of str) {
      if (num !== " ") {
        obj.token++;
      }
    }
  }
  return obj;
}

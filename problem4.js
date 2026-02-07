function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  } else {
    let yes = 0;
    let no = 0;
    for (const num of array) {
      if (num === "ha") {
        yes++;
      } else if (num === "na") {
        no++;
      }
    }
    if (yes > no) {
      return true;
    } else if (yes === no) {
      return "equal";
    } else {
      return false;
    }
  }
}

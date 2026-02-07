function finalScore(omr) {
  if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  } else if (typeof omr !== "object" && Array.isArray(omr) === true) {
    return "Invalid";
  } else {
    let total = 0;
    total = omr.right - omr.wrong / 2;
    return Math.round(total);
  }
}

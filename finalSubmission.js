function newPrice(currentPrice, discount) {
  if (
    typeof currentPrice !== "number" ||
    typeof discount !== "number" ||
    discount < 0 ||
    discount > 100 ||
    currentPrice < 0
  ) {
    return "Invalid";
  } else {
    const result = currentPrice - (currentPrice * discount) / 100;
    return result.toFixed(3);
  }
}

function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  } else {
    if (otp.length !== 8 || !otp.startsWith("ph-")) {
      return false;
    } else {
      return true;
    }
  }
}

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

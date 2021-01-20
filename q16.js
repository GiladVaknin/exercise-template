function leapYear(firstYear, lastYear) {
  let arr = [];
  for (let i = firstYear; i < lastYear; i++) {
    if (i % 100 != 0 && i % 4 === 0 && i % 400 === 0) {
      arr.push(i);
    }
  }
}

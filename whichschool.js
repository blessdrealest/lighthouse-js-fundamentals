function whichSchool(age) {
  if (age >= 1 && age < 13) {
    return 'Elementary School';
  }
  else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  }
  else {
    return 'Lighthouse Labs';
  }
}
console.log(whichSchool(50));
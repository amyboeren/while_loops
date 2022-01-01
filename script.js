//Opdracht 1:
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}
//Opdracht 2: 
for (let num = 0; num <= 10; num++) {
  for (let multiply = 0; multiply <= 10; multiply++) {
    var result = num * multiply;
    console.log(num + " * " + multiply + " = " + result);
  }
}

//Opdracht 3:
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

for (let score = 0; score <= 100; score++) {
  console.log("For scoring " + score + " points, you get a " + assignGrade(score));
}

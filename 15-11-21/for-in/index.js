//Create JSON Objects
let studentObj1 = {
  name: {
    first: "Eli",
    last: "Levi",
  },
  college: {
    name: "John Bryce",
    course: {
      name: "Full Stack developer",
      number: "1234",
    },
  },
};
let studentObj2 = {
  name: {
    first: "Michal",
    last: "Aviv",
  },
  college: {
    name: "John Bryce",
    course: {
      name: "Full Stack developer",
      number: "1234",
    },
  },
};

function getPropsString(obj, recursionDepth = 0) {
  let propsString = "";
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      recursionDepth++;
      propsString += `${key}\n${getPropsString(obj[key], recursionDepth)}`;
    } else {
      propsString += `${key}=${obj[key]}\n`;
    }
  }
  return propsString;
}

function studentsTest() {
  console.log("Properties of studentObj1\n");
  console.log(getPropsString(studentObj1));

  console.log("Properties of studentObj2\n");
  console.log(getPropsString(studentObj2));
}

studentsTest();

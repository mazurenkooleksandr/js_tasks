//1. Task

function processData(data) {
  var result = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] > 10) {
      result.push(data[i]);
    }
  }
  return result;
}

// Refactor

function processData(data) {
  return data.filter((item) => item > 10);
}

//2. Task
function loadUserData(userId) {
  fetch(`https://api.example.com/user/${userId}`)
    .then((response) => response.json())
    .then((userData) => {
      console.log("User data loaded", userData);
      fetch(`https://api.example.com/users/${userId}/permission`)
        .then((response) => response.json())
        .then((userPermission) => {
          console.log("User permission loaded", userPermission);
        });
    });
}

//Refactor

async function loadUserData(userId) {
  try {
    const responseUserData = await fetch(
      `https://api.example.com/user/${userId}`
    );
    const userData = await responseUserData.json();
    console.log("User data loaded", userData);

    const responseUserPermission = fetch(
      `https://api.example.com/users/${userId}/permission`
    );
    const userPermission = await responseUserPermission.json();
    console.log("User permission loaded", userPermission);
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function loadUserData(userId) {
  await Promise.all([
    fetch(`https://api.example.com/user/${userId}`).then((response) =>
      response.json()
    ),
    fetch(`https://api.example.com/users/${userId}/permission`).then(
      (response) => response.json()
    ),
  ])
    .then(([userData, userPermission]) => {
      console.log("User data loaded", userData);
      console.log("User permission loaded", userPermission);
    })
    .catch((error) => {
      console.error("Error loading user data:", error);
    });
}

// 3. Task

function assignTask(task, employee) {
  if (employee.position === "Manager") {
    if (task.difficulty === "hard") {
      console.log("The task assign to Manager");
    } else {
      console.log("The task is too easy for a manager");
    }
  } else if (employee.position === "Developer") {
    if (task.difficulty === "hard" || task.difficulty === "medium") {
      console.log("The task assign to developer");
    } else {
      console.log("The task is too easy for a developer");
    }
  } else {
    console.log("The task to assign to the intern");
  }
}

// Refactor

function assignTask(task, employee) {
  const isManager = employee.position === "Manager";
  const isDeveloper = employee.position === "Developer";
  const isHardForManager = task.difficulty !== "hard";
  const isHardForDeveloper = ["medium", "hard"].includes(task.difficulty);

  const message = isManager
    ? isHardForManager
      ? "The task is too easy for a manager"
      : "The task assign to Manager"
    : isDeveloper
    ? isHardForDeveloper
      ? "The task assign to developer"
      : "The task is too easy for a developer"
    : "The task to assign to the intern";

  console.log(message);
}

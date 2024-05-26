// const form = document.querySelector(".form");
// const container = document.querySelector(".container-div");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nameInput = document.querySelector(".name-input");
//   const textInput = document.querySelector(".text-input");
//   const articleDiv = document.createElement("div");
//   const nameDiv = document.createElement("div");
//   const textDiv = document.createElement("div");
//   const name = document.createElement("p");
//   const date = document.createElement("p");
//   const text = document.createElement("p");
//   date.textContent =
//     (new Date().getMonth() + 1).toString() +
//     "/" +
//     new Date().getDate().toString() +
//     "/" +
//     new Date().getFullYear().toString();
//   name.textContent = nameInput.value;
//   text.textContent = textInput.value;
//   articleDiv.classList.add("article-div");
//   nameDiv.classList.add("article-name");
//   textDiv.classList.add("article-text");
//   nameDiv.appendChild(name);
//   nameDiv.appendChild(date);
//   articleDiv.appendChild(nameDiv);
//   textDiv.appendChild(text);
//   articleDiv.appendChild(textDiv);
//   container.appendChild(articleDiv);
// });

///////////////////////task 2
document.querySelector(".quizForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;
  const questions = form.querySelectorAll(".question");
  let correctAnswers = 0;

  questions.forEach((question) => {
    const selectedAnswer = question.querySelector(
      'input[type="radio"]:checked'
    );
    if (selectedAnswer && selectedAnswer.value === "correct") {
      correctAnswers++;
    }
  });

  document.getElementById(
    "result"
  ).textContent = `Number of correct answers: ${correctAnswers}`;
});
//////////////////////////task 3

// const form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const resultDiv = document.createElement("div");
//   const textInput = document.querySelector(".text-input");
//   const text = document.createElement("p");
//   text.textContent = textInput.value;
//   const checkboxes = document.querySelectorAll(".checkbox");
//   const radios = document.querySelectorAll(".radio");
//   checkboxes.forEach((c) => {
//     if (c.checked && c.value == "italic") {
//       text.style.fontStyle = c.value;
//     }
//     if (c.checked && c.value == "underline") {
//       text.style.textDecoration = c.value;
//     }
//     if (c.checked && c.value == "bold") {
//       text.style.fontWeight = c.value;
//     }
//   });
//   radios.forEach((r) => {
//     if (r.checked) {
//       text.style.textAlign = r.value;
//     }
//   });
//   resultDiv.classList.add("result-div");
//   resultDiv.appendChild(text);

//   const container = document.querySelector(".container-div");
//   container.appendChild(resultDiv);
// });

///////////////task 4
// const form = document.querySelector(".form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const { elements } = e.currentTarget;
//   console.log("elements :>> ", elements);
//   const container = document.querySelector(".container");
//   const resultDiv = document.createElement("div");
//   const resultText = document.createElement("p");
//   const borderedDiv = document.createElement("div");
//   const name = document.createElement("p");
//   const result = document.createElement("p");
//   resultText.textContent = "Result:";
//   resultText.style.fontWeight = "bold";
//   resultDiv.appendChild(resultText);
//   borderedDiv.style.border = "1px solid black";
//   borderedDiv.style.marginLeft = "10px";
//   borderedDiv.style.padding = "7px";
//   name.textContent = elements.nameInput.value + ", thanks for the order!";
//   console.log(elements.nameInput.value + ", thanks for the order!");
//   borderedDiv.appendChild(name);
//   result.textContent = `Book "${elements.bookName.value}" will be delivered on ${elements.dateInput.value} to ${elements.deliveryAddress.value}.`;
//   console.log(
//     `Book "${elements.bookName.value}" will be delivered on ${elements.dateInput.value} to ${elements.deliveryAddress.value}.`
//   );
//   borderedDiv.appendChild(result);
//   container.appendChild(borderedDiv);
// })

//////////////////////////////////////////// Task 5
// const groups = ["Group 1", "Group 2", "Group 3"];
// const lessons = ["Lesson 1", "Lesson 2", "Lesson 3"];
// const students = {
//   "Group 1": ["Student 1", "Student 2", "Student 3"],
//   "Group 2": ["Student 4", "Student 5", "Student 6"],
//   "Group 3": ["Student 7", "Student 8", "Student 9"],
// };
// const attendanceRecords = [];

// const form = document.querySelector(".form");
// const groupSelect = document.querySelector(".group");
// const lessonSelect = document.querySelector(".lesson");
// const studentsList = document.querySelector(".students");

// groups.forEach((group) => {
//   const option = document.createElement("option");
//   option.value = group;
//   option.text = group;
//   groupSelect.add(option);
// });

// lessons.forEach((lesson) => {
//   const option = document.createElement("option");
//   option.value = lesson;
//   option.text = lesson;
//   lessonSelect.add(option);
// });

// groupSelect.addEventListener("change", (e) => {
//   while (studentsList?.firstChild) {
//     studentsList.removeChild(studentsList?.firstChild);
//   }
//   const selectedGroup = groupSelect.value;
//   students[selectedGroup].forEach((student) => {
//     const li = document.createElement("li");
//     li.style.listStyleType = "none";
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.value = student;
//     li.appendChild(checkbox);
//     li.appendChild(document.createTextNode(student));
//     studentsList?.appendChild(li);
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   saveAttendance();
//   viewAttendance();
// });

// function saveAttendance() {
//   const group = document.querySelector(".group").value;
//   const lesson = document.querySelector(".lesson").value;
//   const topic = document.querySelector(".topic").value;
//   const studentsList = document
//     .querySelector(".students")
//     .getElementsByTagName("input");
//   console.log("fdfd");
//   const presentStudents = [];
//   console.log("studentsList :>> ", studentsList);
//   console.log("studentsList.length :>> ", studentsList.length);
//   for (let i = 0; i < studentsList.length; i++) {
//     if (studentsList[i].checked) {
//       presentStudents.push(studentsList[i].value);
//     }
//   }
//   const record = {
//     group: group,
//     lesson: lesson,
//     topic: topic,
//     presentStudents: presentStudents,
//   };
//   attendanceRecords.push(record);
// }

// function viewAttendance() {
//   const attendanceList = document.querySelector(".attendance-list");
//   while (attendanceList.firstChild) {
//     attendanceList.removeChild(attendanceList.firstChild);
//   }
//   const paragraph = document.createElement("p");
//   const group = document.querySelector(".group").value;
//   const lesson = document.querySelector(".lesson").value;
//   const attendanceRec = document.querySelector(".attendance-records");
//   const topic = document.querySelector(".topic").value;
//   paragraph.textContent = `Group: ${group}, Pair: ${lesson}, Topic: ${topic}`;
//   attendanceRec.appendChild(paragraph);
//   attendanceRecords.forEach((record) => {
//     console.log("attendanceRecords :>> ", attendanceRecords);
//     const li = document.createElement("li");
//     li.textContent = record.presentStudents;
//     console.log("li :>> ", li);
//     attendanceList.appendChild(li);
//   });
// }

//////////////////////////////////////////// Task 6

// const directions = ["Direction 1", "Direction 2", "Direction 3"];
// const seats = ["Seat 1", "Seat 2", "Seat 3", "Seat 4", "Seat 5"];
// const bookingRecords = [];

// const directionSelect = document.querySelector(".direction");
// const seatsList = document.querySelector("#seats");
// const form1 = document.querySelector(".form-1");
// const form2 = document.querySelector(".form-2");

// directions.forEach((direction) => {
//   const option = document.createElement("option");
//   option.value = direction;
//   option.text = direction;
//   directionSelect.add(option);
// });

// form1.addEventListener("submit", (e) => {
//   e.preventDefault();
//   form2.classList.add("visible");
//   seats.forEach((seat) => {
//     const li = document.createElement("li");
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.value = seat;
//     li.appendChild(checkbox);
//     li.appendChild(document.createTextNode(seat));
//     seatsList?.appendChild(li);
//   });
//   bookTickets();
// });

// form2.addEventListener("submit", (e) => {
//   e.preventDefault();
//   viewBookings();
// });

// function bookTickets() {
//   const direction = document.querySelector(".direction").value;
//   const date = document.querySelector(".date").value;
//   const seatsList = document
//     .querySelector(".seats")
//     ?.getElementsByTagName("input");
//   const bookedSeats = [];
//   for (let i = 0; i < seatsList?.length; i++) {
//     if (seatsList[i].checked) {
//       bookedSeats.push(seatsList[i].value);
//     }
//   }
//   const record = {
//     direction: direction,
//     date: date,
//     bookedSeats: bookedSeats,
//   };
//   bookingRecords.push(record);
// }

// function viewBookings() {
//   const bookingsList = document.querySelector(".bookings-list");
//   while (bookingsList.firstChild) {
//     bookingsList.removeChild(bookingsList.firstChild);
//   }
//   bookingRecords.forEach((record) => {
//     const li = document.createElement("li");
//     console.log("record.bookedSeats :>> ", record.bookedSeats);
//     li.textContent = `Direction: ${record.direction}, Date: ${
//       record.date
//     }, Booked Seats: ${record.bookedSeats.join(", ")}`;
//     bookingsList.appendChild(li);
//   });
// }

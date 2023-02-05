const studentNames = ['John Doe', 'Jane Doe', 'Jim Brown', 'Joan Smith'];

// Get a reference to the student list element
const studentList = document.querySelector('#student-list');

// Loop through the student names array
for (let i = 0; i < studentNames.length; i++) {
  // Create a new list item for each student
  const studentItem = document.createElement('li');

  // Set the student name as the text content of the list item
  studentItem.textContent = studentNames[i];

  // Add the list item to the student list
  studentList.appendChild(studentItem);
}
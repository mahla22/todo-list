function insertTask() {
   taskInput = document.querySelector("input").value;
   taskLocation = document.querySelector(".taskLocation");
   taskLocation.insertAdjacentHTML("afterbegin", taskInput);
   console.log(taskInput);
}
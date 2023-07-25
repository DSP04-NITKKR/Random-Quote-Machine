document.getElementById("new-quote").addEventListener("click", fetchData);

let colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

fetchData();
function fetchData() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let n = data.length;
      let i = Math.floor(Math.random() * n);
      let j = Math.floor(Math.random() * colors.length);
      document.getElementById("text").innerText = data[i]["text"];
      document.getElementById("author").innerText = "- " + data[i]["author"];
      document.documentElement.style.setProperty("--background", colors[j]);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
}

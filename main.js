let input = document.getElementById("url");
let output = document.getElementById("output");
let shorten = document.getElementById("shorten");
let copy = document.getElementById("copy");

let result;

shorten.addEventListener("click", function () {
  shortenURL(input.value);
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    shortenURL(input.value);
  }
});

copy.addEventListener("click", function () {
  copyLink(result);
});

function shortenURL(input) {
  fetch("https://api.tinyurl.com/create", {
    method: "POST",
    headers: {
      authorization: "Bearer ",
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      url: input,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      result = response.data.tiny_url;
      output.innerHTML = `<p> Shortened URL: ${result} </p>`;
    });
}

function copyLink(result) {
  navigator.clipboard.writeText(result);
}

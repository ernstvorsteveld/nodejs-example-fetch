console.log("before fetch");

fetch("/fetch-example.json")
    .then(res => res.json())
    .then(j => document.getElementById("mydiv").innerHTML = JSON.stringify(j) )
    .then(j => console.log(j));
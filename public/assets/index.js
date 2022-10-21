const bodyEl = document.querySelector("body");

fetch("/api/user")
.then((res) => {
return res.json();
})
.then((data) => {
console.log(data);
for(let i = 0; i < data.length; i++){
    const pTag = document.createElement("p");
    pTag.textContent =data[i].email;
    bodyEl.append(pTag);
}
});
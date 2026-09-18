const input = document.querySelector("input");
const button = document.querySelector(".search");
const WI = document.querySelector(".WI");

button.addEventListener("click", () => {
    const city = input.value;

    WI.innerHTML = `
    <h2>${city}</h2>
    <p>25*C </p>
    <p> Rainy </p>

    
    `;
})
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
const wrapper = document.querySelector(".wrapper");
const numbers = document.querySelector(".numbers")

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const data = new FormData(ev.target);
    let brightness = Number (data.get('brightness'));
    let tone = Number (data.get('tone'));
    wrapper.style.background = `hsl(${tone}, 100%, ${brightness}%)`;
    // wrapper.style.background = "red";
    console.log(wrapper.style.background)
    numbers.innerHTML = `Яркость: ${brightness}%, Цвет: ${tone}`;
});


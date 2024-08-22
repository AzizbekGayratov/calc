const wrapper = document.getElementById("wrapper");

const append = (value) => {
  wrapper.value += value;
};

const calculate = () => {
  try {
    wrapper.value = eval(wrapper.value);
  } catch (error) {
    wrapper.value = "This is not a valid expression";
  }
};

const clearAll = () => {
  wrapper.value = "";
};

const del = () => {
  wrapper.value = wrapper.value.slice(0, -1);
};

const changeSign = () => {
  if (wrapper.value) {
    wrapper.value *= -1;
  }
};

const percentage = () => {
  if (wrapper.value) {
    wrapper.value = wrapper.value / 100;
  }
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    del();
  } else if (event.key === "c" || event.key === "C") {
    clearAll();
  } else if (
    event.key === "1" ||
    event.key === "2" ||
    event.key === "3" ||
    event.key === "4" ||
    event.key === "5" ||
    event.key === "6" ||
    event.key === "7" ||
    event.key === "8" ||
    event.key === "9" ||
    event.key === "0" ||
    event.key === "."
  ) {
    append(event.key);
  }
});

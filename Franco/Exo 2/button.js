const input = document.querySelector("input");
const ul = document.querySelector("ul");

const actions = document.querySelectorAll("[data-action]");

Array.prototype.forEach.call(actions, button => {
  const fn = window[button.dataset.action];
  if (fn) {
    button.addEventListener("click", fn);
  } else {
    console.log("Function doesn't exist ! ");
  }
});

function createLi() {
  const li = document.createElement("li");
  li.innerText = input.value;
  return li;
}

function addInputFirst() {
  ul.prepend(createLi());
}

function addInputLast() {
  ul.append(createLi());
}

function deleteFirst() {
  ul.removeChild(ul.firstChild);
}

function deleteLast() {
  ul.removeChild(ul.lastChild);
}

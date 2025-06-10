// === State ===
let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// === components ===
function NumberInputForm() {
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    $input.type = "number";
    $input.required = true;
  
    const $button = document.createElement("button");
    $button.textContent = "Add number";
  
    $form.append($input, $button);
  
    $form.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = Number($input.value);
      if (!isNaN(value)) {
        addNumber(value);
        $input.value = "";
      }
    });
  
    return $form;
  }
  
function NumberList(title, numbers) {
    const $section = document.createElement("section");
    const $h3 = document.createElement("h3");
    $h3.textContent = title;
  
    const $ul = document.createElement("ul");
    numbers.forEach(num => {
      const $li = document.createElement("li");
      $li.textContent = num;
      $ul.appendChild($li);
    });
  
    $section.append($h3, $ul);
    return $section;
  }
  
  function ControlButtons() {
    const $div = document.createElement("div");
  
    const $sortOne = document.createElement("button");
    $sortOne.textContent = "Sort 1";
    $sortOne.addEventListener("click", () => {
      sortOneNumber();
    });
  
    const $sortAll = document.createElement("button");
    $sortAll.textContent = "Sort All";
    $sortAll.addEventListener("click", () => {
      sortAllNumbers();
    });
  
    $div.append($sortOne, $sortAll);
    return $div;
  }
  
  // === State ===

  function addNumber(num) {
    numberBank.push(num);
    render();
  }
  
  function sortOneNumber() {
    if (numberBank.length > 0) {
      const num = numberBank.shift();
      if (num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
      render();
    }
  }
  
  function sortAllNumbers() {
    while (numberBank.length > 0) {
      sortOneNumber();
    }
  }
  
  // === Render ===

  function render() {
    const $app = document.getElementById("app");
    $app.innerHTML = "";
  
    const $title = document.createElement("h1");
    $title.textContent = "Odds and Events";
  
    $app.append(
      $title,
      NumberInputForm(),
      ControlButtons(),
      NumberList("Number Bank", numberBank),
      NumberList("Odd Numbers", oddNumbers),
      NumberList("Even Numbers", evenNumbers)
    );
  }
  
  // === Init ===
  render();
  
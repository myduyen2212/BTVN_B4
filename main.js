document.addEventListener("DOMContentLoaded", function () {
  // Tạo các hàm xử lý cho biến cố của các nút
  var answer = document.getElementById("answer");

  function appendToAnswer(value) {
    if (answer.value == "0") {
      answer.value = "";
      answer.value += value;
    } else {
      answer.value += value;
    }
  }

  function backspace() {
    answer.value = answer.value.slice(0, -1);
  }

  function reset() {
    answer.value = "0";
  }

  function calculate() {
    try {
      answer.value = eval(answer.value);
    } catch (error) {
      answer.value = "Error";
    }
  }

  // Gán các hàm xử lý biến cố cho các nút
  document.getElementById("seven").addEventListener("click", function () {
    appendToAnswer("7");
  });

  document.getElementById("eight").addEventListener("click", function () {
    appendToAnswer("8");
  });

  document.getElementById("nine").addEventListener("click", function () {
    appendToAnswer("9");
  });

  document.getElementById("divide").addEventListener("click", function () {
    appendToAnswer("/");
  });

  document.getElementById("four").addEventListener("click", function () {
    appendToAnswer("4");
  });

  document.getElementById("five").addEventListener("click", function () {
    appendToAnswer("5");
  });

  document.getElementById("six").addEventListener("click", function () {
    appendToAnswer("6");
  });

  document.getElementById("multiple").addEventListener("click", function () {
    appendToAnswer("*");
  });

  document.getElementById("one").addEventListener("click", function () {
    appendToAnswer("1");
  });

  document.getElementById("two").addEventListener("click", function () {
    appendToAnswer("2");
  });

  document.getElementById("three").addEventListener("click", function () {
    appendToAnswer("3");
  });

  document.getElementById("minus").addEventListener("click", function () {
    appendToAnswer("-");
  });

  document.getElementById("zero").addEventListener("click", function () {
    appendToAnswer("0");
  });

  document.getElementById("equal").addEventListener("click", function () {
    calculate();
  });

  document.getElementById("plus").addEventListener("click", function () {
    appendToAnswer("+");
  });

  document.getElementById("backspace").addEventListener("click", function () {
    backspace();
  });

  document.getElementById("reset").addEventListener("click", function () {
    reset();
  });
});

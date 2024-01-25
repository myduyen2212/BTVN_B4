document.addEventListener("DOMContentLoaded", function () {
  // Sự kiện này được kích hoạt khi DOM (Document Object Model) đã được tải hoàn toàn.
  // Nó giúp đảm bảo rằng mã JavaScript sẽ thực thi sau khi tất cả các phần tử HTML đã được xây dựng.

  // Tạo các hàm xử lý cho biến cố của các nút
  var answer = document.getElementById("answer");
  //Lấy ra phần tử có id là "answer" và gán nó vào biến answer. Phần tử này là ô nhập liệu hiển thị kết quả trên máy tính.

  function appendToAnswer(value) {
    var infinityPattern = /-?\d+[+\-*/]-?\d+=(Infinity|-?\d+)/;

    if (
      answer.value == "0" ||
      answer.value == "Error" ||
      infinityPattern.test(answer.value)
    ) {
      answer.value = "";
      answer.value += value;
    } else {
      answer.value += value;
    }
  }

  function backspace() {
    answer.value = answer.value.slice(0, -1);
    if (answer.value == "") {
      answer.value = "0";
    }
  }

  function reset() {
    answer.value = "0";
  }

  function calculate() {
    try {
      var operation = answer.value;
      var result = eval(answer.value);
      answer.value = operation + "=" + result;
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

  document.getElementById("decimal").addEventListener("click", function () {
    appendToAnswer(".");
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

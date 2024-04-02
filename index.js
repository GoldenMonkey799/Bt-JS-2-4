// bài 1: quản lý tuyển sinh
const regionBonus = { A: 2, B: 1, C: 0.5, X: 0 };
      const objectBonus = { 1: 2.5, 2: 1.5, 3: 1, X: 0 };

      function checkAdmission() {
        var score1 = parseFloat(document.getElementById("score1").value);
        var score2 = parseFloat(document.getElementById("score2").value);
        var score3 = parseFloat(document.getElementById("score3").value);
        var region = document.getElementById("region").value.toUpperCase();
        var object = document.getElementById("object").value.toUpperCase();

        if (score1 <= 0 || score2 <= 0 || score3 <= 0) {
          document.getElementById("result").textContent =
            "Mỗi môn phải có điểm lớn hơn 0.";
          return;
        }

        var totalScore =
          score1 +
          score2 +
          score3 +
          (regionBonus[region] || 0) +
          (objectBonus[region] || 0);

        document.getElementById("result").textContent =
          totalScore >= 20
            ? "Thí sinh đã đậu với tổng số điểm là: " + totalScore
            : "Thí sinh không đậu với tổng số điểm là: " + totalScore;
      }

// bài 2: Tính tiền điện
function calculateElectricityBill() {
    var name = document.getElementById("customerName").value;
    var kwh = parseInt(document.getElementById("kwh").value);
    var cost = 0;

    if (kwh <= 50) {
      cost = kwh * 500;
    } else if (kwh <= 100) {
      cost = 50 * 500 + (kwh - 50) * 650;
    } else if (kwh <= 200) {
      cost = 50 * 500 + 50 * 650 + (kwh - 100) * 850;
    } else {
      cost =
        50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kwh - 350) * 1300;
    }

    var result =
      "Tên khách hàng: " +
      name +
      "<br>Tổng tiền điện: " +
      cost.toLocaleString("vi-VN") +
      " VND";
    document.getElementById("result").innerHTML = result;
  }

//   Bài 3: Tính thuế thu nhập cá nhân
function calculateTax() {
    const personalRelief = 4;
    const dependentRelief = 1.6;
    const income = parseInt(document.getElementById("income").value);
    const dependents = parseInt(
      document.getElementById("dependents").value
    );
    const taxableIncome =
      income - personalRelief - dependents * dependentRelief;

    let taxAmount = 0;
    if (taxableIncome > 0) {
      if (taxableIncome <= 60) {
        taxAmount = taxableIncome * 0.05;
      } else if (taxableIncome <= 120) {
        taxAmount = 60 * 0.05 + (taxableIncome - 60) * 0.1;
      } else if (taxableIncome <= 210) {
        taxAmount = 60 * 0.05 + 60 * 0.1 + (taxableIncome - 120) * 0.15;
      } else if (taxableIncome <= 384) {
        taxAmount =
          60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (taxableIncome - 210) * 0.2;
      } else if (taxableIncome <= 624) {
        taxAmount =
          60 * 0.05 +
          60 * 0.1 +
          90 * 0.15 +
          174 * 0.2 +
          (taxableIncome - 384) * 0.25;
      } else if (taxableIncome <= 960) {
        taxAmount =
          60 * 0.05 +
          60 * 0.1 +
          90 * 0.15 +
          174 * 0.2 +
          240 * 0.25 +
          (taxableIncome - 624) * 0.3;
      } else {
        taxAmount =
          60 * 0.05 +
          60 * 0.1 +
          90 * 0.15 +
          174 * 0.2 +
          240 * 0.25 +
          336 * 0.3 +
          (taxableIncome - 960) * 0.35;
      }
    }

    document.getElementById(
      "taxResult"
    ).innerHTML = `Thuế thu nhập cá nhân phải nộp: ${taxAmount.toFixed(
      2
    )} triệu VND`;
  }

//   bài 4: Tính tiền cap

      function tinhTienCap() {
        var loaiKhachHang = document.getElementById("loaiKhachHang").value;
        var soKetNoi = parseInt(document.getElementById("soKetNoi").value, 10);
        var soKenhCaoCap = parseInt(
          document.getElementById("soKenhCaoCap").value,
          10
        );
        var tongTien = 0;

        if (loaiKhachHang === "nhaDan") {
          tongTien = 4.5 + 20.5 + soKenhCaoCap * 7.5;
        } else if (loaiKhachHang == "doanhNghiep") {
          tongTien = 15 ;
          if (soKetNoi <= 10) {
            tongTien += 75;
          } else {
            tongTien += 75 + (soKetNoi - 10) * 5;
          }
          tongTien += soKenhCaoCap * 50;
        }

        document.getElementById("tongTien").textContent =
          "Tổng tiền: $" + tongTien.toFixed(2);
      }

      function kiemTraLoaiKhachHang() {
        var loaiKhachHang = document.getElementById("loaiKhachHang").value;
        var inputSoKetNoi = document.getElementById("soKetNoi");

        if (loaiKhachHang === "doanhNghiep") {
          inputSoKetNoi.disabled = false;
        } else {
          inputSoKetNoi.disabled = true;
          inputSoKetNoi.value = "";
        }
      }
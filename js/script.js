"use strict";
let flightNumberEl = document.querySelector("#flightNum");
let passengerNamesEl = document.querySelector("#passengerName");
let priceInputEl = document.querySelector("#priceIn");
let airLinePickerEl = document.querySelector("#airLinePick");
let saveBtnEl = document.querySelector(".saveRes");
let showResEl = document.querySelector(".showRes");
let resultEl = document.querySelector(".resultContainer");
let tableDataEl = document.querySelector("#tableData");
let totalPrice = document.querySelector("#total");
let filterDataEl = document.querySelector("#filter");
let filterBtnEl = document.querySelector(".filterBtn");

let wholeData = [];
let totalMoney = 0;

// Saving the data to the WholeData
saveBtnEl.addEventListener("click", () => {
  wholeData.push({
    flightNum: flightNumberEl.value,
    passengerName: passengerNamesEl.value,
    price: priceInputEl.value,
    airLine: airLinePickerEl.value,
  });
  flightNumberEl.value = " ";
  passengerNamesEl.value = " ";
  priceInputEl.value = " ";
  airLinePickerEl.value = " ";
  //console.log(wholeData)
});

//Showing the Data on the table
showResEl.addEventListener("click", () => {
  tableDataEl.innerHTML = " ";
  tableDataEl.innerHTML = `
                <th>Flight Number</th>
                <th>Passenger Name</th>
                <th>Price</th>
                <th>AirLine</th>
    `;
  for (let i of wholeData) {
    let { flightNum, passengerName, price: money, airLine } = i;
    totalMoney += +money;
    tableDataEl.innerHTML += `<tr>
                <td>${flightNum}</td>
                <td>${passengerName}</td>
                <td>${money}</td>
                <td>${airLine}</td>
            </tr>
            `;
  }
  resultEl.innerHTML = `<p>Total: ${totalMoney}</p>`;
});

// Filter the data and show the Results in table with the total of (filtered choice)
filterBtnEl.addEventListener("click", () => {
  tableDataEl.innerHTML = " ";
  tableDataEl.innerHTML = `
                <th>Flight Number</th>
                <th>Passenger Name</th>
                <th>Price</th>
                <th>AirLine</th>
    `;
  totalMoney = 0;
  for (let i of wholeData) {
    let { flightNum, passengerName, price, airLine } = i;
    //tableDataEl.innerHTML = " "
    if (filterDataEl.value == "lineOne" && airLine == "iranAir") {
      tableDataEl.innerHTML += `<tr>
                <td>${flightNum}</td>
                <td>${passengerName}</td>
                <td>${price}</td>
                <td>${airLine}</td>
            </tr>
            `;
      totalMoney += +price;
      resultEl.innerHTML = `<p>Total: ${totalMoney}</p>`;
    } else if (filterDataEl.value == "lineTwo" && airLine == "mahanAir") {
      tableDataEl.innerHTML += `<tr>
                <td>${flightNum}</td>
                <td>${passengerName}</td>
                <td>${price}</td>
                <td>${airLine}</td>
            </tr>
            `;
      totalMoney += +price;
      resultEl.innerHTML = `<p>Total: ${totalMoney}</p>`;
    } else if (filterDataEl.value == "lineThree" && airLine == "kishAir") {
      tableDataEl.innerHTML += `<tr>
                <td>${flightNum}</td>
                <td>${passengerName}</td>
                <td>${price}</td>
                <td>${airLine}</td>
            </tr>
            `;
      totalMoney += +price;
      resultEl.innerHTML = `<p>Total: ${totalMoney}</p>`;
    } else if (filterDataEl.value == "lineFour" && airLine == "qeshmAir") {
      tableDataEl.innerHTML += `<tr>
                <td>${flightNum}</td>
                <td>${passengerName}</td>
                <td>${price}</td>
                <td>${airLine}</td>
            </tr>
            `;
      totalMoney += +price;
      resultEl.innerHTML = `<p>Total: ${totalMoney}</p>`;
    } else if (filterDataEl.value == "lineFive" && airLine == "tabanAir") {
      tableDataEl.innerHTML += `<tr>
                <td>${flightNum}</td>
                <td>${passengerName}</td>
                <td>${price}</td>
                <td>${airLine}</td>
            </tr>
            `;
      totalMoney += +price;
      resultEl.innerHTML = `<p>Total: ${totalMoney}</p>`;
    } else {
      console.log("No Match Data");
    }
  }
});

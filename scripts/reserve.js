 import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

 const busNumbers = [];

for (let i = 1; i <= 41; i++) {
  busNumbers.push({
    seatId: i,
    price: i * 1000
  });
}
function fn(){

let selectedSeatId = null;

// Function to get price for a seat
function calculateAmount(seatNum) {
  const seat = busNumbers.find(seat => seat.seatId == seatNum);//true or false 
  return seat ? seat.price : 0;
}

// Add -click event to each seat
document.querySelectorAll('.seat_num a').forEach(seatA => {
  seatA.addEventListener('click', (e) => {
    e.preventDefault();

    const seatNum = parseInt(seatA.textContent.trim());

    // Remove previously selected seat color
    if (selectedSeatId !== null) {
      document.querySelectorAll('.seat_num').forEach(seatLi => {
        const seatText = seatLi.textContent.trim();
        if (parseInt(seatText) === selectedSeatId) {
          seatLi.style.backgroundColor = '';
        }
      });
    }

    // Set new selected seat
    selectedSeatId = seatNum;
    seatA.parentElement.style.backgroundColor = 'greenyellow'; // green
  });
});

// Calculate button
document.querySelector('.choose_btn').addEventListener('click', () => {
  if (selectedSeatId === null) {
    alert('Please select a seat first!');
    return;
  }

  const total = calculateAmount(selectedSeatId);

  const totalElement = document.querySelector('.total_payment');
  if (totalElement) {
    totalElement.innerHTML = ` TOTAL : ${total.toLocaleString()} <span>$</span>`;
  }

  // console.log(`Selected Seat: ${selectedSeatId}`);
  // console.log(`Total: ${total}`);
});


// let today = new Date().toLocaleDateString();
const today = dayjs();
const todayFormatted = today.format('ddd, MMMM, D')
const nxtthreemonth =  today.add(3,'months');
const  final_nxt_threemonth = nxtthreemonth.format('ddd, MMMM D');
console.log(today);

document.querySelector('.form-label-date').textContent = `TODAY DATE:  `+ todayFormatted;
document.querySelector('.time_travel span').textContent = todayFormatted;
console.log( document.querySelector('.time_travel1 span').textContent = final_nxt_threemonth);



}


fn();
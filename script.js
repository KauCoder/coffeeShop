const orderList = document.getElementById("orderList");
const moneyInput = document.getElementById("money");
const balanceDisplay = document.getElementById("balanceDisplay");
const buttons = document.querySelectorAll(".coffee");

let balance = 0;

// Update balance display
function updateBalance() {
    balanceDisplay.textContent = `Your balance: $${balance}`;
}

moneyInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const entered = parseFloat(moneyInput.value);
        if (!isNaN(entered) && entered >= 0) {
            balance = entered;
            updateBalance();
            moneyInput.value = "";
        } else {
            alert("Please enter a valid number!");
        }
    }
});

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function makeCoffee(coffeeName, price) {
    const li = document.createElement("li");
    li.textContent = `${coffeeName} state: (preparing...)`;
    li.classList.add("preparing");
    orderList.appendChild(li);

    alert(`Your ${coffeeName} is coming right up!`);

    await sleep(5);

    li.textContent = `${coffeeName} state: (ready!)`;
    alert(`Your ${coffeeName} is ready!`);

    li.remove();
}

// Add event listeners to coffee buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const coffeeName = button.textContent.split(" ($")[0];
        const price = parseInt(button.dataset.price);

        if (balance < price) {
            alert(`Not enough money! ${coffeeName} costs $${price}, while you have $${balance}`);
            return;
        }

        const confirmBuy = confirm(`Are you sure you want to order a ${coffeeName}?`);
        if (!confirmBuy) return;

        balance -= price;
        updateBalance();
        makeCoffee(coffeeName, price);
    });
});

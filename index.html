const orderList = document.getElementById("orderList");
const moneyInput = document.getElementById("money");
const balanceDisplay = document.getElementById("balanceDisplay");
const buttons = document.querySelectorAll(".coffee");

let balance = 0;

const dialog = document.createElement("dialog");
dialog.id = "beautifulAlert";
dialog.innerHTML = `
    <h2 id="dialogMessage" style="margin-top: 0; font-weight: normal;"></h2>
    <div id="dialogActions" style="margin-top: 20px; display: flex; justify-content: center; gap: 15px;">
        <button id="dialogConfirmBtn">OK</button>
        <button id="dialogCancelBtn">Cancel</button>
    </div>
`;
document.body.appendChild(dialog);

const dialogMessage = document.getElementById("dialogMessage");
const dialogConfirmBtn = document.getElementById("dialogConfirmBtn");
const dialogCancelBtn = document.getElementById("dialogCancelBtn");

function showCustomAlert(message) {
    return new Promise((resolve) => {
        dialogMessage.textContent = message;
        dialogCancelBtn.style.display = "none";
        dialogConfirmBtn.textContent = "OK";
        
        const handleClose = () => {
            dialog.close();
            dialogConfirmBtn.removeEventListener("click", handleClose);
            resolve();
        };
        
        dialogConfirmBtn.addEventListener("click", handleClose);
        dialog.showModal();
    });
}

function showCustomConfirm(message) {
    return new Promise((resolve) => {
        dialogMessage.textContent = message;
        dialogCancelBtn.style.display = "inline-block";
        dialogConfirmBtn.textContent = "Yes";
        
        const handleConfirm = () => {
            cleanup();
            resolve(true);
        };
        
        const handleCancel = () => {
            cleanup();
            resolve(false);
        };
        
        const cleanup = () => {
            dialog.close();
            dialogConfirmBtn.removeEventListener("click", handleConfirm);
            dialogCancelBtn.removeEventListener("click", handleCancel);
        };
        
        dialogConfirmBtn.addEventListener("click", handleConfirm);
        dialogCancelBtn.addEventListener("click", handleCancel);
        dialog.showModal();
    });
}

function updateBalance() {
    balanceDisplay.textContent = `Your balance: $${balance}`;
}

moneyInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const entered = parseFloat(moneyInput.value);
        if (!isNaN(entered) && entered >= 0) {
            balance = entered;
            updateBalance();
            moneyInput.value = "";
        } else {
            await showCustomAlert("Please enter a valid number!");
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

    await showCustomAlert(`Your ${coffeeName} is coming right up!`);

    await sleep(5);

    li.textContent = `${coffeeName} state: (ready!)`;
    li.classList.remove("preparing");
    await showCustomAlert(`Your ${coffeeName} is ready!`);

    li.remove();
}

buttons.forEach(button => {
    button.addEventListener("click", async () => {
        const coffeeName = button.textContent.split(" (\$")[0];
        const price = parseInt(button.dataset.price);

        if (balance < price) {
            await showCustomAlert(`Not enough money! ${coffeeName} costs $${price}, while you have $${balance}`);
            return;
        }

        const confirmBuy = await showCustomConfirm(`Are you sure you want to order a ${coffeeName}?`);
        if (!confirmBuy) return;

        balance -= price;
        updateBalance();
        makeCoffee(coffeeName, price);
    });
});

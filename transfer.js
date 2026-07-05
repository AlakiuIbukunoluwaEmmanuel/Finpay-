/*====================================
        TRANSFER VARIABLES
====================================*/

const transferForm = document.getElementById("transferForm");

const recipientName = document.getElementById("recipientName");

const accountNumber = document.getElementById("accountNumber");

const bankName = document.getElementById("bankName");

const transferAmount = document.getElementById("transferAmount");

const narration = document.getElementById("narration");

const totalDebit = document.getElementById("totalDebit");

const sendMoneyBtn = document.getElementById("sendMoneyBtn");

/*====================================
        TRANSFER SETTINGS
====================================*/

const TRANSFER_FEE = 10;

/*====================================
    UPDATE TOTAL DEBIT
====================================*/

function updateTotalDebit(){

    const amount = Number(transferAmount.value);

    if(amount <= 0 || isNaN(amount)){

        totalDebit.textContent = "₦0.00";

        return;

    }

    const total = amount + TRANSFER_FEE;

    totalDebit.textContent =
    "₦" + total.toLocaleString("en-NG",{

        minimumFractionDigits:2,

        maximumFractionDigits:2

    });

}

/*====================================
        LIVE UPDATE
====================================*/

transferAmount.addEventListener("input",updateTotalDebit);

/*====================================
    LIMIT ACCOUNT NUMBER
====================================*/

accountNumber.addEventListener("input",function(){

    this.value = this.value.replace(/\D/g,"");

    if(this.value.length > 10){

        this.value = this.value.slice(0,10);

    }

});

/*====================================
        FORM VALIDATION
====================================*/

sendMoneyBtn.addEventListener("click",function(e){

    e.preventDefault();

    if(recipientName.value.trim()===""){

        alert("Please enter the recipient's name.");

        recipientName.focus();

        return;

    }

    if(accountNumber.value.length !== 10){

        alert("Account number must be exactly 10 digits.");

        accountNumber.focus();

        return;

    }

    if(bankName.value===""){

        alert("Please select a bank.");

        bankName.focus();

        return;

    }

    if(transferAmount.value==="" || Number(transferAmount.value) <= 0){

        alert("Please enter a valid transfer amount.");

        transferAmount.focus();

        return;

    }
    const originalText = sendMoneyBtn.innerHTML;

sendMoneyBtn.disabled = true;

sendMoneyBtn.innerHTML =
'<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

setTimeout(function(){

    alert("✅ Transfer Successful!");

    transferForm.reset();

    totalDebit.textContent = "₦0.00";

    sendMoneyBtn.innerHTML = originalText;

    sendMoneyBtn.disabled = false;

},2000);

});

/*====================================
    RECENT RECIPIENTS
====================================*/

const recipientCards = document.querySelectorAll(".recipient-card");

recipientCards.forEach(function(card){

    card.addEventListener("click",function(){

        const name =
        this.querySelector("h4").textContent;

        const bank =
        this.querySelector("small").textContent;

        recipientName.value = name;

        bankName.value = bank;

        accountNumber.focus();

    });

});

/*====================================
    BUTTON ANIMATION
====================================*/

sendMoneyBtn.addEventListener("mouseenter",function(){

    this.style.transform = "translateY(-3px)";

});

sendMoneyBtn.addEventListener("mouseleave",function(){

    this.style.transform = "translateY(0)";

});

/*====================================
    PAGE LOAD ANIMATION
====================================*/

window.addEventListener("load",function(){

    document.querySelectorAll(
        ".transfer-card,.transfer-summary,.recent-recipients,.recent-transfers"
    ).forEach(function(item,index){

        item.style.opacity="0";

        item.style.transform="translateY(25px)";

        setTimeout(function(){

            item.style.transition=".5s";

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        },index*150);

    });

});
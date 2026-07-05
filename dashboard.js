const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    window.location.href = "login.html";
}

// Top welcome name
document.getElementById("username").textContent = currentUser.fullname;

// Account name (balance section)
document.getElementById("accountName").textContent = currentUser.fullname.toUpperCase();

/*==========================================
        FINPAY DASHBOARD JAVASCRIPT
==========================================*/

/*==========================
    HIDE / SHOW BALANCE
==========================*/

const balance = document.getElementById("balance");
const toggleBalance = document.getElementById("toggleBalance");

let balanceVisible = true;
const originalBalance = balance.textContent;

toggleBalance.addEventListener("click", () => {

    if (balanceVisible) {

        balance.textContent = "₦ ••••••••";

        toggleBalance.innerHTML =
        '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        balance.textContent = originalBalance;

        toggleBalance.innerHTML =
        '<i class="fa-solid fa-eye"></i>';

    }

    balanceVisible = !balanceVisible;

});


/*==========================
       CARD SLIDER
==========================*/

const cards = document.querySelector(".cards");
const allCards = document.querySelectorAll(".bank-card");

const nextBtn = document.getElementById("nextCard");
const prevBtn = document.getElementById("prevCard");

const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function updateSlider(){

    cards.style.transform =
    `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    dots[currentIndex].classList.add("active");

}

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= allCards.length){

        currentIndex = 0;

    }

    updateSlider();

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = allCards.length-1;

    }

    updateSlider();

});


/*==========================
      TOUCH SWIPE
==========================*/

let startX = 0;

const slider = document.querySelector(".slider");

slider.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

slider.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX-endX>50){

        currentIndex++;

        if(currentIndex>=allCards.length){

            currentIndex=0;

        }

        updateSlider();

    }

    if(endX-startX>50){

        currentIndex--;

        if(currentIndex<0){

            currentIndex=allCards.length-1;

        }

        updateSlider();

    }

});


/*==========================
      ANALYTICS CHART
==========================*/

const ctx = document
.getElementById("financeChart");

new Chart(ctx,{

type:"bar",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[{

label:"Income",

data:[
120,
190,
150,
220,
180,
250
]

},

{

label:"Expenses",

data:[
80,
120,
100,
140,
130,
160
]

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

labels:{

color:"#ffffff"

}

}

},

scales:{

x:{

ticks:{

color:"#ffffff"

}

},

y:{

ticks:{

color:"#ffffff"

}

}

}

}

});

/*====================================

        FINPAY ACCOUNTS JS V1
              PART 1

====================================*/


/*==============================
      PAGE LOADED
==============================*/

document.addEventListener("DOMContentLoaded", () => {

    fadeInElements();

});


/*==============================
     SHOW/HIDE BALANCE
==============================*/

const balanceBtn = document.getElementById("toggleTotalBalance");

const totalBalance = document.getElementById("totalBalance");

let balanceVisible = true;

if(balanceBtn){

    balanceBtn.addEventListener("click", () => {

        if(balanceVisible){

            totalBalance.textContent = "₦ •••••••••";

            balanceBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';

        }

        else{

            totalBalance.textContent = "₦2,450,350.25";

            balanceBtn.innerHTML = '<i class="fas fa-eye"></i>';

        }

        balanceVisible = !balanceVisible;

    });

}


/*==============================
      BUTTON RIPPLE
==============================*/

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.style.transform="scale(.95)";

        setTimeout(()=>{

            button.style.transform="scale(1)";

        },150);

    });

});


/*==============================
      FADE IN EFFECT
==============================*/

function fadeInElements(){

    const cards=document.querySelectorAll(

        ".overview-card,.action-card,.activity-item,.insight-card"

    );

    cards.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(25px)";

        setTimeout(()=>{

            card.style.transition=".6s ease";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*120);

    });

}
/*====================================

        FINPAY ACCOUNTS JS V1
              PART 2

====================================*/


/*==============================
      NOTIFICATION BELL
==============================*/

const bell = document.querySelector(".icon-btn");

if(bell){

    bell.addEventListener("click",()=>{

        bell.classList.add("ring");

        setTimeout(()=>{

            bell.classList.remove("ring");

        },600);

    });

}


/*==============================
      QUICK ACTIONS
==============================*/

const actions=document.querySelectorAll(".action-card");

actions.forEach(action=>{

    action.addEventListener("click",()=>{

        action.style.transform="scale(.96)";

        setTimeout(()=>{

            action.style.transform="";

        },180);

    });

});


/*==============================
      ACCOUNT CARDS
==============================*/

const accountCards=document.querySelectorAll(".overview-card");

accountCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});


/*==============================
      FLOATING BUTTON
==============================*/

const fab=document.querySelector(".fab");

if(fab){

    fab.addEventListener("click",()=>{

        fab.style.transform="rotate(90deg) scale(1.1)";

        setTimeout(()=>{

            fab.style.transform="rotate(0deg) scale(1)";

        },250);

    });

}


/*==============================
      PAGE SCROLL EFFECT
==============================*/

window.addEventListener("scroll",()=>{

    const topBar=document.querySelector(".topbar");

    if(!topBar) return;

    if(window.scrollY>30){

        topBar.style.backdropFilter="blur(20px)";

        topBar.style.transition=".3s";

    }

    else{

        topBar.style.backdropFilter="blur(0px)";

    }

});
/*====================================

        FINPAY ACCOUNTS JS V1
              PART 3

====================================*/


/*==============================
        ACCOUNT CHART
==============================*/

const chartCanvas = document.getElementById("accountsChart");

if(chartCanvas){

    new Chart(chartCanvas,{

        type:"doughnut",

        data:{

            labels:[

                "Savings",

                "Current",

                "Dollar",

                "Fixed Deposit"

            ],

            datasets:[{

                data:[45,25,15,15],

                backgroundColor:[

                    "#00A651",

                    "#008C4A",

                    "#2ECC71",

                    "#B7E4C7"

                ],

                borderWidth:0,

                hoverOffset:12

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    position:"bottom",

                    labels:{

                        color:"#ffffff",

                        padding:20,

                        font:{

                            size:13

                        }

                    }

                }

            }

        }

    });

}


/*==============================
     RECENT ACTIVITY EFFECT
==============================*/

const activities=document.querySelectorAll(".activity-item");

activities.forEach((item,index)=>{

    item.style.opacity="0";

    item.style.transform="translateX(-25px)";

    setTimeout(()=>{

        item.style.transition=".5s ease";

        item.style.opacity="1";

        item.style.transform="translateX(0)";

    },index*180);

});


/*==============================
      BOTTOM NAVIGATION
==============================*/

const navLinks=document.querySelectorAll(".bottom-nav a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(nav=>{

            nav.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/*==============================
       WELCOME EFFECT
==============================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition=".5s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});
/*==============================
      BALANCE TOGGLE
==============================*/

const toggleBtn = document.getElementById("toggleTotalBalance");
const balance = document.getElementById("totalBalance");

if (toggleBtn && balance) {

    const originalBalance = balance.textContent;
    let isHidden = false;

    toggleBtn.addEventListener("click", () => {

        if (isHidden) {

            balance.textContent = originalBalance;
            toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';

        } else {

            balance.textContent = "₦ •••••••••";
            toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

        }

        isHidden = !isHidden;

    });

}
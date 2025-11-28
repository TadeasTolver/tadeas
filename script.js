// animations:
setTimeout(() => {
    document.querySelectorAll(".upward-animation").forEach((element) => {
        element.classList.add("visible");
    });
}, 100);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".subtle-animation, .strong-animation").forEach((element) => {
    observer.observe(element);
});

// change language:

const lanChangeAnimation = () => {
    document.querySelectorAll(".lan-change-animation").forEach((element) => {
        element.style.opacity = "0";
    });
   
    setTimeout(() => {
        document.querySelectorAll(".lan-change-animation").forEach((element) => {
            element.style.opacity = "1";
        });
    }, 2000);    
}

window.changeToCz = animation => {
    let delay = 0;
    if (animation) {
        lanChangeAnimation();
        delay = 1500;
    }

    localStorage.setItem("lan", "cz");

    setTimeout(() => {
        if (document.body.id === "index") {
            document.querySelectorAll("#contents a")[0].innerHTML = "WEBOVÉ STRÁNKY >";
            document.querySelectorAll("#contents a")[1].innerHTML = "KONTAKT >";
            document.querySelectorAll("#contents a")[2].innerHTML = "KDO JSEM >";
            document.querySelectorAll("#contents a")[3].innerHTML = "ONLINE PLATFORMY >";
        } else if (document.body.id === "websites") {
            document.querySelectorAll("h1")[0].innerHTML = "Webové stránky";
            document.querySelector(".main-p").innerHTML = "Díky naslouchání svým zakazníkům, dokážu vytvořit stránky s vizuálním stylem a obsahem který si přeje zákazník.<br>Snažím se vytvářet stránky které jsou efektivní, intuitivní a dobře vypadající.<br>Také se snažím udělat proces co nejsnažší pro zakazníka a proto nabízím hosting zadarmo, a pokud má zakazník zájem, mohu zakoupit doménu za něj.";
            document.querySelectorAll("h3")[0].innerHTML = "Stránka pro audio dokumentaristku Brit Jensen";
            document.querySelectorAll("h3")[1].innerHTML = "Stránka pro sochaře a fotografa Jiřího Plieštika";
            document.querySelectorAll("h3")[2].innerHTML = "Stránka pro socioložku Kateřinu Nedbálkovou";
            document.querySelectorAll("h3")[3].innerHTML = "Stránka pro dokumenta-<br>ristku Evu Lammelovou";
            document.querySelectorAll("h1")[1].innerHTML = "ZÍSKEJTE SVÉ";
            document.querySelectorAll("h3")[4].innerHTML = '- Zdarma hosting <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[5].innerHTML = '- Vlastní design <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[6].innerHTML = '- Bezbolestný proces <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[7].innerHTML = '- Nízká cena v porovnání s agenturami <span style="color: var(--green)">✔</span>';
            document.querySelector("#getyoursnow button").innerHTML = "KONTAKT";
        } else if (document.body.id === "contact") {
            document.querySelector("h1").innerHTML = "Kontakt";
        } else if (document.body.id === "whoiam") {
            document.querySelector("h1").innerHTML = "Kdo jsem";
            document.querySelectorAll("h2")[0].innerHTML = "Místo pobytu";
            document.querySelectorAll("h3")[0].innerHTML = "Dánsko";
            document.querySelectorAll("h2")[1].innerHTML = "Vzdělání";
            document.querySelectorAll("h2")[2].innerHTML = "Občanství";
            document.querySelectorAll("h3")[2].innerHTML = "České, dánské";
        }

        if (document.body.id != "index") {
            document.querySelectorAll("#navigation-links a")[1].innerHTML = "WEBY";
            document.querySelectorAll("#navigation-links a")[2].innerHTML = "KONTAKT";
            document.querySelectorAll("#navigation-links a")[3].innerHTML = "KDO JSEM";
        }

    }, delay);
}

window.changeToEn = animation => {
    let delay = 0;
    if (animation) {
        lanChangeAnimation();
        delay = 1500;
    }

    localStorage.setItem("lan", "en");

    setTimeout(() => {
        if (document.body.id === "index") {
            document.querySelectorAll("#contents a")[0].innerHTML = "WEBSITES >";
            document.querySelectorAll("#contents a")[1].innerHTML = "CONTACT >";
            document.querySelectorAll("#contents a")[2].innerHTML = "WHO I AM >";
            document.querySelectorAll("#contents a")[3].innerHTML = "ONLINE PLATFORMS >";
        } else if (document.body.id === "websites") {
            document.querySelectorAll("h1")[0].innerHTML = "Websites";
            document.querySelector(".main-p").innerHTML = "By listening carefully to my customers, I am able to create websites with the visual style and content they desire.<br>I strive to create websites that are effective, intuitive, and good looking.<br>I walso want to make the process as easy as possible for the customer, therefore I offer free hosting,<br>and if desired, I can purchase a domain name on the customers behalf, so they don't need to worry.";
            document.querySelectorAll("h3")[0].innerHTML = "Website for audio documentarist Brit Jensen.";
            document.querySelectorAll("h3")[1].innerHTML = "Website for sculptor and photographer Jiří Plieštik.";
            document.querySelectorAll("h3")[2].innerHTML = "Website for sociologist Kateřina Nedbálková";
            document.querySelectorAll("h3")[3].innerHTML = "Website for documentarist Eva Lammelová";
            document.querySelectorAll("h1")[1].innerHTML = "GET YOURS NOW";
            document.querySelectorAll("h3")[4].innerHTML = '- Free hosting <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[5].innerHTML = '- Custom design <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[6].innerHTML = '- Pain-free process <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[7].innerHTML = '- Low price compared to web development agencies <span style="color: var(--green)">✔</span>';
            document.querySelector("#getyoursnow button").innerHTML = "CONTACT";
        } else if (document.body.id === "contact") {
            document.querySelector("h1").innerHTML = "Contact";
        } else if (document.body.id === "whoiam") {
            document.querySelector("h1").innerHTML = 'Who I am';
            document.querySelectorAll("h2")[0].innerHTML = "Place of residence";
            document.querySelectorAll("h3")[0].innerHTML = "Denmark";
            document.querySelectorAll("h2")[1].innerHTML = "Education";
            document.querySelectorAll("h2")[2].innerHTML = "Citizenship";
            document.querySelectorAll("h3")[2].innerHTML = "Czech, Denish";
        }

        if (document.body.id != "index") {
            document.querySelectorAll("#navigation-links a")[1].innerHTML = "WEBSITES";
            document.querySelectorAll("#navigation-links a")[2].innerHTML = "CONTACT";
            document.querySelectorAll("#navigation-links a")[3].innerHTML = "WHO I AM";
        }

    }, delay);
}

if (localStorage.getItem("lan") === "cz") {
   changeToCz(); 
}


// other stuff:

window.openContact = () => {
    window.location.href = "contact.html";
}

window.copyMail = () => {
    document.querySelector("#copy-mail").innerHTML = '<img src="tick icon.png"/>';
    navigator.clipboard.writeText("tadeastpj@gmail.com");

    setTimeout(() => {
        document.querySelector("#copy-mail").innerHTML = '<img src="copy icon.png"/>';
    }, 1500);
}


// lan buttons animation:
const url = new URL(window.location.href);

if (document.body.id != "index") {
    if (url.searchParams.get("prev") === "index") {
        document.querySelector("#lan-btns").style.transition = "transform 0.5s linear, margin 0.5s linear, opacity 0.5s linear";
    }

    setTimeout(() => {
        document.querySelector("#lan-btns").classList.remove("big");
    }, 0);

    document.querySelector("#lan-btns").style.opacity = "1";
} else {

    document.querySelector("#lan-btns").style.transition = "transform 0.5s linear, margin 0.5s linear, opacity 0.5s linear";
    document.querySelector("#lan-btns").style.opacity = "1";
    
    setTimeout(() => {
        document.querySelector("#lan-btns").classList.add("big");
    }, 0);
}

// change website images for phone:
if (visualViewport.width < 600) {
    document.querySelectorAll("#websites-con img")[0].src = "britjensendkphone.jpg";
    document.querySelectorAll("#websites-con img")[1].src = "jiripliestiktopphone.jpg";
    document.querySelectorAll("#websites-con img")[2].src = "nedbalkoczphone.PNG";
    document.querySelectorAll("#websites-con img")[3].src = "lammelovacomphone.jpg";
}

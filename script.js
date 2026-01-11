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
            document.querySelector(".main-p").innerHTML = "Vytvářím webové stránky pro lidi a malé podniky. Používám HTML, CSS, JS a jiné technologie, které nemusíte znát, pro vytváření a hostování webových stran na míru. Níže jsou některé které jsem vytvořil v minulosti.";
            document.querySelectorAll("h3")[0].innerHTML = "Stránka pro audio dokumentaristku Brit Jensen";
            document.querySelectorAll("h3")[1].innerHTML = "Stránka pro sochaře a fotografa Jiřího Plieštika";
            document.querySelectorAll("h3")[2].innerHTML = "Stránka pro socioložku Kateřinu Nedbálkovou";
            document.querySelectorAll("h3")[3].innerHTML = "Stránka pro dokumenta-<br>ristku Evu Lammelovou";
            document.querySelectorAll("h1")[1].innerHTML = "ZÍSKEJTE SVÉ";
            document.querySelectorAll("h3")[4].innerHTML = '- Vlastní design (ne jen šablona) <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[5].innerHTML = '- Určeno i pro mobily <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[6].innerHTML = '- Zdarma hosting <span style="color: var(--green)">✔</span>';
            document.querySelector("#getyoursnow button").innerHTML = "KONTAKT";
        } else if (document.body.id === "contact") {
            document.querySelector("h1").innerHTML = "Kontakt";
        } else if (document.body.id === "whoiam") {
            document.querySelector("h1").innerHTML = "Kdo jsem";
            document.querySelectorAll("h2")[0].innerHTML = "Místo pobytu";
            document.querySelectorAll("h3")[0].innerHTML = "Dánsko";
            document.querySelectorAll("h2")[1].innerHTML = "Jazyky";
            document.querySelectorAll("h3")[1].innerHTML = "Český, anglický, dánský";
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
            document.querySelector(".main-p").innerHTML = "I create websites for people and small businesses. I use HTML, CSS, JS and other technologies you don’t need to know about to create custom websites and host them. Below are some I have done in the past.";
            document.querySelectorAll("h3")[0].innerHTML = "Website for audio documentarist Brit Jensen.";
            document.querySelectorAll("h3")[1].innerHTML = "Website for sculptor and photographer Jiří Plieštik.";
            document.querySelectorAll("h3")[2].innerHTML = "Website for sociologist Kateřina Nedbálková";
            document.querySelectorAll("h3")[3].innerHTML = "Website for documentarist Eva Lammelová";
            document.querySelectorAll("h1")[1].innerHTML = "GET YOURS NOW";
            document.querySelectorAll("h3")[4].innerHTML = '- Custom design (not just a template) <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[5].innerHTML = '- Mobile friendly <span style="color: var(--green)">✔</span>';
            document.querySelectorAll("h3")[6].innerHTML = '- Free hosting <span style="color: var(--green)">✔</span>';
            document.querySelector("#getyoursnow button").innerHTML = "CONTACT";
        } else if (document.body.id === "contact") {
            document.querySelector("h1").innerHTML = "Contact";
        } else if (document.body.id === "whoiam") {
            document.querySelector("h1").innerHTML = 'Who I am';
            document.querySelectorAll("h2")[0].innerHTML = "Place of residence";
            document.querySelectorAll("h3")[0].innerHTML = "Denmark";
            document.querySelectorAll("h2")[1].innerHTML = "Languages";
            document.querySelectorAll("h3")[1].innerHTML = "English, Danish, Czech";
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

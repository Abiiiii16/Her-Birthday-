
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Elements
    // ===============================

    const music = document.getElementById("bgMusic");
    const line = document.getElementById("line");
    const story = document.getElementById("story");
    const gift = document.getElementById("gift");
    const letter = document.getElementById("letter");
    const cake = document.getElementById("cake");
    const birthdayBackground = document.getElementById("birthdayBackground");
    const revealCake = document.getElementById("revealCake");

    // Check that all essential elements exist
    if (!line || !story || !gift || !letter || !cake ||
        !birthdayBackground || !revealCake) {
        console.error("A required birthday page element is missing.");
        return;
    }

    // ===============================
    // Background Music
    // ===============================

    document.addEventListener("click", () => {
        if (music) {
            music.play().catch(() => {
                console.log("Click again if the browser blocked the music.");
            });
        }
    }, { once: true });

    // ===============================
    // Movie Story
    // ===============================

    const messages = [
        "❤️ I have something to tell you...",
        "✨ Since you came into my life...",
        "🥹 Every day became brighter...",
        "🌸 Every smile of yours means the world to me...",
        "🎂 Today is your special day...",
        "💖 Happy Birthday My Love...",
        "❤️ I LOVE YOU ❤️"
    ];

    let index = 0;
    let storyTimer;

    function nextMessage() {
        line.style.opacity = "0";

        storyTimer = setTimeout(() => {
            line.textContent = messages[index];
            line.style.opacity = "1";

            if (index === messages.length - 1) {
                line.classList.add("final");
            }

            index++;

            if (index < messages.length) {
                storyTimer = setTimeout(nextMessage, 2500);
            } else {
                storyTimer = setTimeout(() => {
                    gift.classList.add("show");
                }, 2000);
            }
        }, 500);
    }

    storyTimer = setTimeout(nextMessage, 1000);

    // ===============================
    // Gift Click: Open Letter
    // ===============================

    gift.addEventListener("click", () => {
        gift.classList.remove("show");
        gift.style.pointerEvents = "none";

        if (storyTimer) {
            clearTimeout(storyTimer);
        }

        letter.classList.add("show");
    });

    // ===============================
    // Love Button: Reveal Cake
    // ===============================

    revealCake.addEventListener("click", () => {
        revealCake.disabled = true;

        // Close the letter
        letter.classList.remove("show");

        // Fade away the story
        story.classList.add("hide");

        // Change to the magical birthday background
        setTimeout(() => {
            document.body.classList.add("cake-scene");
            birthdayBackground.classList.add("show");
        }, 700);

        // Bring in the cake
        setTimeout(() => {
            cake.classList.add("show");
        }, 1500);
    });

    // ===============================
    // Floating Hearts
    // ===============================

    function createHeart() {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.textContent = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 35) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }

    for (let i = 0; i < 20; i++) {
        createHeart();
    }

    setInterval(createHeart, 900);

    // ===============================
    // Falling Roses
    // ===============================

    const roses = [
        "/static/images/Rose.png",
        "/static/images/Rose pink.png",
        "/static/images/Rose white.png"
    ];

    function createRose() {
        const rose = document.createElement("img");

        rose.className = "rose";
        rose.src = roses[Math.floor(Math.random() * roses.length)];
        rose.alt = "";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.width = (45 + Math.random() * 45) + "px";
        rose.style.animationDuration = (7 + Math.random() * 6) + "s";

        rose.onerror = () => rose.remove();

        document.body.appendChild(rose);

        setTimeout(() => rose.remove(), 14000);
    }

    for (let i = 0; i < 6; i++) {
        createRose();
    }

    setInterval(createRose, 1400);

});
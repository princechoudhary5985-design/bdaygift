const helloKitty = document.getElementById('helloKitty');
const message = document.getElementById('message');
const nextPage = document.getElementById('nextPage');

helloKitty.addEventListener('click', () => {
    // Show the birthday message with animation
    message.style.opacity = 1;
    message.classList.add('show');

    // Create multiple balloons
    for (let i = 0; i < 20; i++) {
        createBalloon();
    }

    // Show "Next Page" button after 10 seconds
    setTimeout(() => {
        nextPage.style.opacity = 1;
    }, 10000); // 10000 ms = 10 seconds
});

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Random balloon color
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

    // Random horizontal position
    balloon.style.left = Math.random() * window.innerWidth + 'px';

    // Random animation duration
    balloon.style.animationDuration = 4 + Math.random() * 3 + 's';

    document.body.appendChild(balloon);

    // Remove balloon after animation
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });
}

// Go to next page (replace URL with your actual next page)
function goNextPage() {
    window.location.href = "nextpage.html"; // change to your next page
}


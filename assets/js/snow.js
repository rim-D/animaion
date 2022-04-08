let count = 0;

function snow() {
    const el = document.createElement('div');
    el.classList.add('snow');
    el.style.left = `${Math.random() * (window.innerWidth - 1) + 1}px`;
    el.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`;
    el.style.animationDely = `${Math.random() * (10 - 1) + 1}s`;
    el.style.opacity = `${Math.random()}`;

    document.body.appendChild(el); // .createElement()하여 node생성 후 .appendChild해야함

    if (count < 900) {
        window.requestAnimationFrame(snow);
        count++;
    }
}

snow();


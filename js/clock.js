const localTime = document.querySelector('.clock');

const gifftime = () => {
    localTime.textContent = (new Date()).toLocaleTimeString('hu');
    localTime.textContent.length !== 8 ? localTime.textContent = '0' + localTime.textContent : localTime.textContent;
    window.setTimeout(() => {
        gifftime();
    }, 1000);
}

gifftime();

function updateCurrentTime() {
    const currentTime = new Date().toISOString();
    document.getElementById(`current-time`).textContent = `Current Time (UTC): ${currentTime}`;
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();
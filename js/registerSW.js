if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(reg => {
        console.log("Success.");
    })
    .catch(error => {
        console.log(error);
    });
}
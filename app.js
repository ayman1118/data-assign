
document.getElementById('fetchButton').addEventListener('click', function() {
    const apiUrl = document.getElementById('apiUrl').value;
    const outputelement= document.getElementById('outputelement');


    if (apiUrl) {
        fetch(apiUrl)
            .then(object=> {
                if (!object.ok) {
                    throw new Error('Network response was not ok ' + object.statusText);
                }
                return object.json();
            })
            .then(data => {
                outputelement.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
            })
            .catch(error => {
                outputelement.innerHTML = '<div class="error">Error: ' + error.message + '</div>';
            });
    } else {
        outputelement.innerHTML = '<div class="error">Please enter a valid API URL.</div>';
    }
});
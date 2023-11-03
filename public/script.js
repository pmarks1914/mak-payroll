document.getElementById('resultForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var examYear = document.getElementById('examYear').value;
    var examNumber = document.getElementById('examNumber').value;
    var cardSerial = document.getElementById('cardSerial').value;
    var cardPin = document.getElementById('cardPin').value;
    var examType = document.getElementById('examType').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'proxy.php?url=https://www.waecdirect.org/DisplayResult.aspx', true); // Change the URL to proxy.php
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            document.getElementById('resultOutput').innerHTML = xhr.responseText;
        } else {
            console.error('Error:', xhr.status, xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Network error');
    };

    var formData = 'examYear=' + encodeURIComponent(examYear) +
                   '&examNumber=' + encodeURIComponent(examNumber) +
                   '&cardSerial=' + encodeURIComponent(cardSerial) +
                   '&cardPin=' + encodeURIComponent(cardPin) +
                   '&examType=' + encodeURIComponent(examType);

    xhr.send(formData);
});

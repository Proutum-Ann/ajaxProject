document.getElementById("load").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "friends.json", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById("output").innerHTML = `placeholder`
        }
    }
    xhr.send()
})
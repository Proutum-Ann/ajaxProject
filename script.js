document.getElementById("load").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "mole.json", true);
    xhr.onload = function() {

        if (xhr.status === 200) {
            const characterM = JSON.parse(xhr.responseText);
            console.log(characterM)

            const cardContainer = document.getElementById('output')

            cardContainer.innerHTML = ''

            const cardHTML = document.createElement('div')
            cardHTML.classList = "col-12 col-md-4 col-lg-3"

            characterM.forEach(c => {

                const hobbyList = c.hobbies.map(
                    hobby => `<span class="badge bg-info text-dark me-1">${hobby}</span>`
                ).join('')

                cardHTML.innerHTML = `
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="${c.icon}">
                                </div>
                                <div class="col-md-8">

                                    <h5 class="card-title">${c.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${c.role}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">${c.age}</h6>

                                    <p class="card-text">
                                        <b>Hobbies:</b><br> ${hobbyList}
                                    </p>

                                </div>
                            </div>

                            <p class="card-text">${c.desc}</p>
                        </div>
                    </div>
                `
            })

            cardContainer.appendChild(cardHTML)
        } else {
            console.log("Error loading JSON file.");
        }
    }
    xhr.send()
})
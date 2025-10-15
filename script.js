document.getElementById("load").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "mole.json", true);
    xhr.onload = function() {

        if (xhr.status === 200) {
            const characterM = JSON.parse(xhr.responseText);
            console.log(characterM)

            const cardContainer = document.getElementById('output')

            cardContainer.innerHTML = ''

            characterM.forEach(c => {

                const hobbyList = c.hobbies.map(
                    hobby => `<span class="badge text-dark me-1">${hobby}</span>`
                ).join('')

                if (c.role === "Leader") {
                    c.bg = '#adffe7'
                } else if (c.role === "Deputy") {
                    c.bg = '#57b5e0'
                } else if (c.role === "Healer") {
                    c.bg = '#45d368'
                } else if (c.role === "Warrior") {
                    c.bg = '#d34563'
                } else if (c.role === "Apprentice") {
                    c.bg = '#e0578b'
                } else if (c.role === "Queen") {
                    c.bg = '#c957e0'
                } else if (c.role === "Kit") {
                    c.bg = '#ffa7e5'
                } else if (c.role === "Elder") {
                    c.bg = '#867658'
                }

                const cardHTML = document.createElement('div')
                cardHTML.classList = "col-6 col-md-4 col-xl-3 my-2"

                cardHTML.innerHTML = `
                    <div class="card shadow-sm h-100">
                        <div class="card-body" style="background-color: ${c.bg}">
                            <div class="row">
                                <div class="col-md-6">
                                    <img class="w-100" src="${c.icon}">

                                </div>
                                <div class="col-md-6">

                                    <h5 class="card-title">${c.name}</h5>
                                    <h6 class="card-subtitle mb-2">${c.role}</h6>
                                    <h6 class="card-subtitle mb-2">${c.age}</h6>

                                    <p class="card-text">
                                        <b>Current:</b> ${c.aff.current}<br>
                                        <b>Past:</b> ${c.aff.past}
                                    </p>

                                </div>
                            </div>
                            <p class="card-text w-100">
                                <b>Hobbies:</b><br> ${hobbyList}
                            </p>

                            <p class="card-text">${c.desc}</p>
                        </div>
                    </div>
                `

                cardContainer.appendChild(cardHTML)
            })

        } else {
            console.log("Error loading JSON file.");
        }
    }
    xhr.send()
})

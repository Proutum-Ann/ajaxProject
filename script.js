document.getElementById("load").addEventListener("click", function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "mole.json", true);
    xhr.onload = function() {

        if (xhr.status === 200) {
            const characterM = JSON.parse(xhr.responseText);

            const cardContainer = document.getElementById('output')

            characterM.forEach(characterM => {
                const hobbyList = characterM.hobbies.map(
                    hobby => `<span class="badge bg-info text-dark me-1">${hobby}</span>`
                ).join('')

                cardContainer.innerHTML = `
                <div class="col-12 col-md-4 col-lg-3">
                    <div class="card shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title">${characterM.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${characterM.role}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">${characterM.age}</h6>
                            <p class="card-text">${characterM.aff.current}</p>
                            <p class="card-text">${characterM.aff.past}</p>
                            
                            <p class="card-text">
                                <b>Hobbies:</b><br> ${hobbyList}
                            </p>

                            <p class="card-text">${characterM.desc}</p>
                        </div>
                    </div>
                </div>
                `
            })
        }
    }
    xhr.send()
})
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addFortuneBtn = document.getElementById('addFortuneBtn')
// const deleteForBtn = document.getElementsByClassName('.deleteBtn')

const baseURL = 'http://localhost:4000'

const getCompliment = () => {
    axios.get(`${baseURL}/api/compliment/`)
        .then(res => {
            const compliment = res.data;
            alert(compliment);
    });
};

const getFortune = () => {
    axios.get(`${baseURL}/api/fortune`)
        .then(res => {
            const fortune = res.data
            alert(fortune)
        })
}

const submitHandler = () => {
    let newFortune = document.querySelector('#fortuneImputTxt')

    let bodyObj = {
        newFortune: newFortune.value
    }

    addFortune(bodyObj)
}


const addFortune = (body) => {
    axios.post(`${baseURL}/api/fortune`, body)
        .then(res => console.log(res)
    )
}

const createFortuneCard = (fortuneObj) => {
    const fortuneCard = document.createElement("div")
    document.querySelector('#fortunesContainer').appendChild(fortuneCard)
    fortuneCard.classList.add('fortuneCard')

    fortuneCard.innerHTML = `<p>${fortuneObj.fortune}</p> <button onclick='deleteFortune("${fortuneObj.id}")'>delete</button> <div class="likeCounter"><button onclick="updateCounter(${fortuneObj.id}, 'plus')">+</button><label for="likesCounter">Likes:</label><p class="likesCounter">${fortuneObj.likes}</p><button onclick="updateCounter(${fortuneObj.id}, 'minus')">-</button></div>`

}

const updateCounter = (id, type) => {
    axios.put(`${baseURL}/api/fortune/${id}`, {type})
        .then(res => getAllFortunes()
    )
}

const getAllFortunes = () => {
    document.querySelector('#fortunesContainer').innerHTML = '<h2>Fortunes:</h2>'
    axios.get(`${baseURL}/api/fortunes`)
        .then(res => {
            fortunes = res.data
            for (let i = 0; i < fortunes.length; i++) {
                createFortuneCard(fortunes  [i])
            }
        })
}

const deleteFortune = (id) => {
    axios.delete(`${baseURL}/api/fortune/${id}`)
        .then(res => getAllFortunes())
}

getAllFortunes()

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', submitHandler)


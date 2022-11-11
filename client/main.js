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
            // console.log(res)
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
}

const createFortuneCard = (Fortune) => {
    const fortuneCard = document.createElement("div")
    document.querySelector('#fortunesContainer').appendChild(fortuneCard)
    fortuneCard.classList.add('fortuneCard')

    fortuneCard.innerHTML = `<p>${Fortune}</p> <button onclick='deleteFortune("${Fortune}")'>delete</button> `
}

const getAllFortunes = () => {
    document.querySelector('#fortunesContainer').innerHTML = ''
    axios.get(`${baseURL}/api/fortunes`)
        .then(res => {
            fortunesArr = res.data
            for (let i = 0; i < fortunesArr.length; i++) {
                createFortuneCard(fortunesArr[i])
            }
        })
}

const deleteFortune = (fortunetxt) => {
    axios.delete(`${baseURL}/api/fortune/${fortunetxt}`)
        .then(res => getAllFortunes())
}

getAllFortunes()

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', submitHandler)


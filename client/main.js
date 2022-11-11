const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addFortuneBtn = document.getElementById('addFortuneBtn')

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

const getAllFortunes = () => {
    axios.get(`${baseURL}/api/fortunes`)
        .then(res => {
            fortunesArr = res.data
            for (let i = 0; i < fortunesArr.length; i++) {
                let node = document.createElement('p')
                node.textContent = fortunesArr[i]
                document.querySelector('#fortunesContainer').appendChild(node)
            }
        })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addFortuneBtn.addEventListener('click', submitHandler)

getAllFortunes()

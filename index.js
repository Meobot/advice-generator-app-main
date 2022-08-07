const advice = document.getElementById("advice-paragraph")
const adNum = document.getElementById("advice-number")

document.getElementById("btn").addEventListener("click", () => {
    getAdvice()
})

const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random())
    .then(res => res.json())
    .then(data => {
        adNum.textContent = `ADVICE #${data.slip.id}`
        advice.textContent = `"${data.slip.advice}"`
    })
}
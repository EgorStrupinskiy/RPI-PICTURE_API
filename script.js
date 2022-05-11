document.getElementById("input_form").addEventListener("submit", (e) => {
    e.preventDefault()
    document.getElementById("content-loader").style.display = "flex"
    document.getElementById("content").style.display = "none"
    document.getElementById("content-error").style.display = "none"
    const num = document.getElementById("number").value
    loadData(num)
    // setDate(date)
})

const updateData = (data) => {
    let elem
    if (data.code == 400) {
        document.getElementById("content-loader").style.display = "none"
        document.getElementById("content-error").style.display = "flex"
    } else {
        document.getElementById("api__title").innerText = data.text
        // document.getElementById("api__description").innerText = data.explanation
        document.getElementById("content-loader").style.display = "none"
        document.getElementById("content").style.display = "flex"
    }
}

const loadData = (num) => {
    document.getElementById("content-connection-error").style.display = "none"
    fetch(`http://numbersapi.com/${num}/year?json`)
        .then((response) => {
            return response.json()
        })
        .catch(() => {
            offlineHandler()
        })
        .then((data) => {
            if (data) {
                localStorage.setItem("data", JSON.stringify(data))
                // localStorage.setItem("date", document.getElementById("date-input").value)
                updateData(data)
            }
        })
}

const setDate = (date) => {
    // const d = new Date(date)
    // document.getElementById("date-input").valueAsDate = da
    // document.getElementById("date").innerHTML = d.toLocaleString("ru", {
    //     year: "numeric",
    //     month: "numeric",
    //     day: "numeric"
    // })
}

const offlineHandler = () => {
    document.getElementById("content-loader").style.display = "none"
    document.getElementById("content-connection-error").style.display = "flex"
}

const data = localStorage.getItem("data")
const date = localStorage.getItem("date")
if (data && date) {
    updateData(JSON.parse(data))
    setDate(date)
} else {
    setDate(Date.now())
    loadData(document.getElementById("date-input").value)
}
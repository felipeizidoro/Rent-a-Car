let days = document.getElementById("getDays")
let km = document.getElementById("getKm")
let answer = document.getElementById("answer")
let carSelected = document.getElementById("chooseCategory")

function changeCategory(priceDaysArg, priceKmArg){ 
    let indiceSelect = carSelected.options[carSelected.selectedIndex]
    let value = indiceSelect.value
    let carImageElm = document.querySelector(`.${value}`)
    let priceDays = 0
    let priceKm = Number(priceKmArg * 0.20)
    if(value === "CategoryA"){
        priceDays = Number(priceDaysArg * 39.90) 
    } else if(value === "CategoryB"){
        priceDays = Number(priceDaysArg * 69.90) 
    } else if(value === "CategoryC"){
        priceDays = Number(priceDaysArg * 99.90)   
    }
    
    return {
        category: indiceSelect.innerHTML, 
        priceDays, 
        priceKm, 
        carImage: carImageElm.getAttribute("src") 
    }
}

function rent(){
   const result = changeCategory(days.value, km.value)
   let total = result.priceDays + result.priceKm
    answer.innerHTML = `
        <h1>You rented a car from ${result.category}</h1>
        <p class="paragraph">The value will be US$${result.priceDays.toFixed(2)} per ${days.value} days, with an addition of US$${result.priceKm.toFixed(2)} in kilometers.</p>
        <p class="paragraph"><strong>Total: US$${total.toFixed(2)}.</strong></p>
        <img src="${result.carImage}" alt=""></img>
    `  
}


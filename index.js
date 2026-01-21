/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-unit")
const unitInput = document.getElementById("unit-input")
const metersFeetsContainer = document.getElementById("meters-feets")
const litersGallonsContainer = document.getElementById("liters-gallons")
const kilosPoundsContainer = document.getElementById("kilos-pounds")
const hint = document.getElementById("hint")


const metersToFeets = (meters) => {
    return meters * 3.281
}

const feetsToMeters = (feets) => {
    return feets / 3.281
}

const litersToGallons = (liters) => {
    return liters * 0.264
}

const gallonsToLiters = (gallons) => {
    return gallons / 0.264
}

const kilogramsToPounds = (kilos) => {
    return kilos * 2.204
}

const poundsToKilograms = (pounds) => {
    return pounds / 2.204
}
const displayConversion = (units, convertFrom, convertTo) => {

    const { value, name } = convertFrom
    const { value: toValue, name: toName } = convertTo
    return `${units} ${name} = ${toValue.toFixed(3)} ${toName} | ${units} ${toName} = ${value.toFixed(3)} ${name}`

}
const calculateConversions = () => {
    let units = unitInput.value
    if (!units) {
        hint.innerText = "Please enter a unit to start converting"
        return
    }
    units = Number(units)
    hint.innerText = ""
    convertBtn.innerText = "Converting..."
    convertBtn.disabled = true

    const feets = metersToFeets(units);
    const meters = feetsToMeters(units);

    const liters = gallonsToLiters(units);
    const gallons = litersToGallons(units);

    const kilos = poundsToKilograms(units);
    const pounds = kilogramsToPounds(units);

    const feetsAndMeters = displayConversion(units, {
        name: "meters",
        value: meters
    },
        {
            name: "feet",
            value: feets
        }
    );
    metersFeetsContainer.textContent = feetsAndMeters

    const litersAndGallons = displayConversion(units,
        {
            name: "liters",
            value: liters
        },
        {
            name: "gallons",
            value: gallons
        }
    )
    litersGallonsContainer.textContent = litersAndGallons

    const kilosAndPounds = displayConversion(units,
        {
            name: "kilos",
            value: kilos
        },
        {
            name: "pounds",
            value: pounds
        }
    )
    kilosPoundsContainer.textContent = kilosAndPounds
    convertBtn.innerText = "Convert"
    convertBtn.disabled = false
}
convertBtn.addEventListener("click", calculateConversions)
unitInput.addEventListener("change", calculateConversions)
const button_id=document.getElementById("submit");

const getAirQuality = async (city) => {
    cityName.innerHTML = city
    const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e819584369mshf0ac52e388f50bbp102158jsnd56aef177e70',
            'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response =  await fetch(url, options);

        const result = await response.text();
        const obj=JSON.parse(result);
        console.log(obj);
        CO.innerHTML = obj.CO.aqi;
        NO2.innerHTML = obj.NO2.aqi;
        O3.innerHTML = obj.O3.aqi;
        SO2.innerHTML = obj.SO2.aqi;

        PM25.innerHTML = obj["PM2.5"].aqi;
        PM10.innerHTML = obj.PM10.aqi;
        Overall_AQI.innerHTML = obj.overall_aqi;

        CO_Conc.innerHTML = obj.CO.concentration;
        NO2_Conc.innerHTML = obj.CO.concentration;
        O3_Conc.innerHTML = obj.CO.concentration;
        CO_Conc.innerHTML = obj.CO.concentration;
        SO2_Conc.innerHTML = obj.SO2.concentration;

    } catch (error) {
        console.error(error);
    }
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getAirQuality(city.value)
})
getAirQuality("Delhi")

 // ---------------------------------------------------for Hyderabad------------------------------------------------
getAirQuality1 = async () => {
    const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Hyderabad`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e819584369mshf0ac52e388f50bbp102158jsnd56aef177e70',
            'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response =  await fetch(url, options);
        const result = await response.text();
        const obj=JSON.parse(result);
        console.log(obj);
        COH.innerHTML = obj.CO.aqi;
        NO2H.innerHTML = obj.NO2.aqi;
        O3H.innerHTML = obj.O3.aqi;
        SO2H.innerHTML = obj.SO2.aqi;

        PM25H.innerHTML = obj["PM2.5"].aqi;
        PM10H.innerHTML = obj.PM10.aqi;
        Overall_AQIH.innerHTML = obj.overall_aqi;
    } catch (error) {
        console.error(error);
    }
}
getAirQuality1();

// ---------------------------------------------------for Kolkata------------------------------------------------
getAirQuality2 = async () => {
    const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Kolkata`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e819584369mshf0ac52e388f50bbp102158jsnd56aef177e70',
            'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response =  await fetch(url, options);
        const result = await response.text();
        const obj=JSON.parse(result);
        console.log(obj);
        COK.innerHTML = obj.CO.aqi;
        NO2K.innerHTML = obj.NO2.aqi;
        O3K.innerHTML = obj.O3.aqi;
        SO2K.innerHTML = obj.SO2.aqi;

        PM25K.innerHTML = obj["PM2.5"].aqi;
        PM10K.innerHTML = obj.PM10.aqi;
        Overall_AQIK.innerHTML = obj.overall_aqi;
    } catch (error) {
        console.error(error);
    }
}
getAirQuality2();

// ---------------------------------------------------for Bangalore------------------------------------------------
getAirQuality3 = async () => {
    const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Bangalore`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e819584369mshf0ac52e388f50bbp102158jsnd56aef177e70',
            'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response =  await fetch(url, options);
        const result = await response.text();
        const obj=JSON.parse(result);
        console.log(obj);
        COB.innerHTML = obj.CO.aqi;
        NO2B.innerHTML = obj.NO2.aqi;
        O3B.innerHTML = obj.O3.aqi;
        SO2B.innerHTML = obj.SO2.aqi;

        PM25B.innerHTML = obj["PM2.5"].aqi;
        PM10B.innerHTML = obj.PM10.aqi;
        Overall_AQIB.innerHTML = obj.overall_aqi;
    } catch (error) {
        console.error(error);
    }
}
getAirQuality3();

// ---------------------------------------------------for Mumbai------------------------------------------------
getAirQuality4 = async () => {
    const url = `https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=San-Francisco`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e819584369mshf0ac52e388f50bbp102158jsnd56aef177e70',
            'x-rapidapi-host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response =  await fetch(url, options);
        const result = await response.text();
        const obj=JSON.parse(result);
        console.log(obj);
        COS.innerHTML = obj.CO.aqi;
        NO2S.innerHTML = obj.NO2.aqi;
        O3S.innerHTML = obj.O3.aqi;
        SO2S.innerHTML = obj.SO2.aqi;

        PM25S.innerHTML = obj["PM2.5"].aqi;
        PM10S.innerHTML = obj.PM10.aqi;
        Overall_AQIS.innerHTML = obj.overall_aqi;
    } catch (error) {
        console.error(error);
    }
}
getAirQuality4();
// dark mode button
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
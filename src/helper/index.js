export const updateState = data => {
    const city = data.city.name;
    const days = [];
    const dayIndices = getDayIndices(data);

    for (let i = 0; i < 5; i++) {
        days.push({
            date: data.list[dayIndices[i]].dt_txt,
            weather_desc: data.list[dayIndices[i]].weather[0].description,
            icon: data.list[dayIndices[i]].weather[0].icon,
            temp: data.list[dayIndices[i]].main.temp
        });
    }

    return { city, days }
};


const getDayIndices = data => {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < 4; i++) {
        while (
            tmp === data.list[index].dt_txt.slice(8, 10) ||
            data.list[index].dt_txt.slice(11, 13) !== '15'
        ) {
            index++;
        }
        dayIndices.push(index);
        tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
};

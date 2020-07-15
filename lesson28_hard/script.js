document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const select = document.getElementById("cars"),
    output = document.getElementById("output");

	
	const getData = () => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open("GET", "./cars.json");
      request.setRequestHeader("Content-type", "application/json");
      request.addEventListener("readystatechange", () => {
				if (request.readyState !== 4) {
					return;
				}
        if (request.status === 200) {
					const response = JSON.parse(request.responseText);
					resolve(response);
        } else {
					reject(request.statusText)
        }
      });
      request.send();
    });
  };

  const setData = (data) => {
    if (select.value !== 'no') {
      data.cars.forEach((item) => {
        if (item.brand === select.value) {
          const { brand, model, price } = item;
          output.innerHTML = `Тачка ${brand} ${model} <br>
                  Цена: ${price}$`;
        } 
      });
    } else {
      output.innerHTML = 'выбери тачку';
    }
  };

  const setError = (error) => {
    console.warn(`Произошла ошибка! ${error}`);
	};
	const s = () => {
		getData()
			.then(setData)
			.catch(setError)
	}
	select.addEventListener("change", s);

});

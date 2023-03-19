const API_KEY = process.env.API_KEY;

const getCity = () => {
    return (
        
        async function call() {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=La Plata,arg&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error)) 
          }
    );
  };

  export default getCity;
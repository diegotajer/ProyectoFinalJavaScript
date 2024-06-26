async function getMovieInfo(titulo) {
    const apiKey = "cbe2c1a5" 
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(titulo)}&apikey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const movieData = await response.json();
        displayMovieInfo(movieData);
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
  }


let plotSpanish="";

  //Traduce el argumento de la peli
  function traducir(argumento)  {
    let text = argumento.trim();
    if (!text) return;
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=en-GB|es-ES`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        plotSpanish = data.responseData.translatedText;
      });
  };
  
  
  
  //muestra info de la peli en español
  function displayMovieInfo(movie) {
    if (movie.Response === 'True') {
        traducir(movie.Plot);
        
    setTimeout(() => {
      Swal.fire({
        position: "center",
        background: "#eee",
        title: `Película: ${movie.Title} \nAño: ${movie.Year} \nActores: ${movie.Actors} \nDirector: ${movie.Director} 
        \nArgumento: ${plotSpanish} \nRating IMDB:${movie.imdbRating}`,
        showConfirmButton: false,
      });
    }, 5000); // Espera de 5 segundos
  };
  }

export  default getMovieInfo;

import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Utilities/Card";
import { Movies } from "./components/Movies";
import { PostData } from "./PostData";

function App() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieHandler();
  }, []);

  // const fetchMovieHandler = ()=>{
  //  fetch('https://swapi.dev/api/films/').then(resp=>{
  //   return resp.json()
  //  }).then((data)=>{
  //   const updatedMovie = data.results.map((arr)=>{
  //     return {
  //       title: arr.title,
  //       prep: arr.opening_crawl
  //     }
  //   })
  //   setMovie(updatedMovie)
  //  })

  // }

  async function fetchMovieHandler() {
    setisLoading(true);
    setError(null);
    try {
      const res = await fetch("https://post-data-48498-default-rtdb.firebaseio.com/movie.json", {
        method: "GET"
      });

      if (!res.ok) {
        throw new Error("something went wrong!");
      }

      const data = await res.json();
      console.log(data)

      const loadedMovie = []

      for (const key in data){
        loadedMovie.push({
          id:key,
          title: data[key].title,
          note:data[key].note,
          date: data[key].date,
          coverImage: data[key].coverImage
        })
      }
     
     
      setMovie(loadedMovie);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  }

  async function postMovieData (dataInput) {
    const res = await fetch("https://post-data-48498-default-rtdb.firebaseio.com/movie.json", {
      method: 'POST',
      body: JSON.stringify(dataInput),
      header: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }

  let content = <p>Found no movies!</p>

  if(movie.length > 0){
    content = <Movies data={movie} fetch={fetchMovieHandler} />
  }

  if(error){
    content = <p>{error}</p>
  }

  if (isLoading){
    content = <p>Loading...</p>
  }


  return (
    <Card>
      <PostData onSaveData = {postMovieData}/>
      <div className={`mt-5`}>
        <button
          className={`py-3 px-5 bg-indigo-500  rounded-lg uppercase text-base font-bold text-white hover:-translate-y-1 transition transform hover:bg-indigo-700 active:ring active:ring-offset-1 active:ring-indigo-600 `}
          onClick={fetch}
        >
          Fetch
        </button>
      </div>
      <div>
        {/* {!isLoading && movie.length > 0 && (
          <Movies data={movie} fetch={fetchMovieHandler} />
        )}
        {!isLoading && movie.length === 0 && !error && <p>Found no movies</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}

        {content}
      </div>
    </Card>
  );
}

export default App;

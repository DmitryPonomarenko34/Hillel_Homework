const obj = {
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/"
  ],
  "species": [
    
  ],
  "vehicles": [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
};

const stringifiedObj = JSON.stringify(obj, null, 2)

function App() {
  return (
    <div className="container">
      <h1 className="mb-2">
        Swapi
      </h1>
      <div className="mb-3">
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="basic-addon3">https://swapi.dev/api/</span>
          <input type="text" className="form-control w-100" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
        </div>
      </div>
      <div className="d-flex gap-1">
        <p className="p-2 bg-secondary text-light rounded-2">People</p>
        <p className="p-2 bg-secondary text-light rounded-2">1</p>
      </div>
      <pre className="border p-2">
        {stringifiedObj}
      </pre>
    </div>
  );
}

export default App;

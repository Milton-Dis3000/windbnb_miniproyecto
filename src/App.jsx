import { useEffect, useState } from "react";
import "./App.css";
import ImagContainer from "./components/ImagContainer";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("stays.json");
      const data = await response.json();
      setData(data);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="container">
        <div className="nav">
          <div className="logoBnb">
            <img id="logotipo" src=".src\icons\starbnb.svg" alt="" />
          </div>
          <div className="search">
            <button id="ubication">
              <h3>Helsinki, Finland</h3>
            </button>
            <button id="ubication">
              <h4>Add guest</h4>
            </button>
            <button id="iconSearch">
              <img
                id="lup"
                src="src\icons\search_FILL0_wght400_GRAD0_opsz48.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="subTitle">
          <h2>Stays in Finland</h2>
          <h3>12 + Stays</h3>
        </div>

        
        <div className="imagGroup">
          <main className="imagecontainer">

            {data.map((post, index) => (
            
              <>
              <img id="principalImage" src={post.photo} alt="bedRoom" />

              <div className="photoFooter">
                <button id="host">
                <h2>{post.button}</h2>
                <p>SUPER HOST</p>
                </button>

              <div className="beds">
                <h4>{post.type}</h4>
              </div>

              <div className="star">
                <img id="iconStar" src="src\icons\starbnb.svg" alt="" />
                <h4>{post.rating}</h4>
              </div>

              </div>

              
              <div className="stylist">
                <h2>{post.title}</h2>
              </div>
              </>
            ))}
        </main>

        </div>

        
      </section>
    </>
  );
}

export default App;

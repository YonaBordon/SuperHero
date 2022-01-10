import "./Team.css";
import {useEffect, useState} from "react";
import {CardGroup, Modal} from "react-bootstrap";
import CardHero from "./Card/CardHero";
import AddHero from "./AddHero";
import DetailHero from "./DetailHero";
import Login from "./Login";

let teamV = [
  {
    id: "",
    name: "",
    imgUrl: "",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null",
    },
  },
  {
    id: "",
    name: "",
    imgUrl: "",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null",
    },
  },
  {
    id: "",
    name: "",
    imgUrl: "",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null",
    },
  },
  {
    id: "",
    name: "",
    imgUrl: "",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null",
    },
  },
  {
    id: "",
    name: "",
    imgUrl: "",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null",
    },
  },
  {
    id: "",
    name: "",
    imgUrl: "",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null",
    },
  },
];

const tkn = window.localStorage.getItem("token");

const Team = () => {
  const [cards, setCards] = useState(teamV);
  const [currentHero, setCurrentHero] = useState({});
  const [allStats, setAllStats] = useState([]);

  const [token, setToken] = useState(tkn);

  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  const [showAdd, setShowAdd] = useState(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

  const [showLogin, setShowLogin] = useState(true);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const updateTeam = (newHero) => {
    let newTeam = teamV;
    const pos = window.localStorage.getItem("currentCard");
    const {id, name, image, powerstats} = newHero;
    //console.log(newHero);
    const heroData = {
      id: id,
      name: name,
      imgUrl: image.url,
      powerstats: {
        intelligence: powerstats.intelligence,
        strength: powerstats.strength,
        speed: powerstats.speed,
        durability: powerstats.durability,
        power: powerstats.power,
        combat: powerstats.combat,
      },
    };
    newTeam[pos] = heroData;
    setCards(newTeam);
    // VER ELIMINAR
    console.log("eliminado");
  };

  return (
    <>
      <div>
        <h3>Tipo Team:</h3>
        <CardGroup className=" d-flex row-cols-lg-6 row-cols-md-3 row-cols-sm-2">
          {cards.map((hero, index) => (
            <CardHero
              key={index}
              pos={index}
              hero={hero}
              updateTeam={updateTeam}
              setCurrentHero={setCurrentHero}
              handleShowAdd={handleShowAdd}
              handleShowDetails={handleShowDetails}
            />
          ))}
        </CardGroup>
        <div className="stats-bottom">
          <div>
            <h3>Stats Acumulados</h3>
          </div>
          <div>
            <h3>Peso y Altura</h3>
          </div>
        </div>
      </div>

      <>
        <AddHero
          showAdd={showAdd}
          updateTeam={updateTeam}
          handleCloseAdd={handleCloseAdd}
        />
        {/* ver esto */}
        <Modal show={showDetails} onHide={handleCloseDetails} size="lg">
          <Modal.Header className=" flex-column-reverse" closeButton>
            <DetailHero
              showDetails={showDetails}
              handleCloseDetails={handleCloseDetails}
              currentHero={currentHero}
            />
          </Modal.Header>
        </Modal>
      </>
      {!token && (
        <Login
          showLogin={showLogin}
          handleCloseLogin={handleCloseLogin}
          setToken={setToken}
        />
      )}
    </>
  );
};

export default Team;

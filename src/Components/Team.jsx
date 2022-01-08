import "./Team.css";
import {useState} from "react";
import {Card, CardGroup, CloseButton, Modal} from "react-bootstrap";
import CardHero from "./Card/CardHero";
import AddHero from "./AddHero";
import DetailHero from "./DetailHero";

const teamV = [
  {
    id: 1,
    name: "A-Bomb",
    imgUrl: "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg",
    powerstats: {
      intelligence: "38",
      strength: "100",
      speed: "17",
      durability: "80",
      power: "24",
      combat: "64",
    },
  },
  {
    id: 2,
    name: "Abe Sapien",
    imgUrl: "https://www.superherodb.com/pictures2/portraits/10/100/956.jpg",
    powerstats: {
      intelligence: "88",
      strength: "28",
      speed: "35",
      durability: "65",
      power: "100",
      combat: "85",
    },
  },
  {
    id: 3,
    name: "Abin Sur",
    imgUrl: "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg",
    powerstats: {
      intelligence: "50",
      strength: "90",
      speed: "53",
      durability: "64",
      power: "99",
      combat: "65",
    },
  },
];

const Team = () => {
  const [cards, setCards] = useState(teamV);
  const [hero, setHero] = useState({});

  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  const [showAdd, setShowAdd] = useState(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

  const renderAll = () => {
    const empty = {
      id: "null",
      name: "",
      imgUrl: "",
      powerstats: {
        intelligence: "-",
        strength: "-",
        speed: "-",
        durability: "-",
        power: "-",
        combat: "-",
      },
    };
    for (let i = cards.length; i < 6; i++) {
      teamV.push(empty);
    }
    return cards;
  };
  return (
    <>
      <div>
        <h3>Tipo Team:</h3>
        <CardGroup className=" row-cols-xl-6 row-cols-md-3 row-cols-sm-2">
          {renderAll().map((hero, index) => (
            <CardHero
              key={index}
              pos={index}
              hero={hero}
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

      <Modal show={showAdd} onHide={handleCloseAdd} size="lg">
        <Modal.Header className=" flex-column-reverse" closeButton>
          <AddHero />
        </Modal.Header>
      </Modal>

      <Modal show={showDetails} onHide={handleCloseDetails} size="lg">
        <Modal.Header className=" flex-column-reverse" closeButton>
          <DetailHero cards={cards} />
        </Modal.Header>
      </Modal>
    </>
  );
};

export default Team;

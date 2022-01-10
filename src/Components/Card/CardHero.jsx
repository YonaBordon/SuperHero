import {Card, CloseButton} from "react-bootstrap";
import CardStats from "./CardStats";

const CardHero = ({
  pos,
  hero,
  updateTeam,
  setCurrentHero,
  handleShowAdd,
  handleShowDetails,
}) => {
  const {id, name, imgUrl, powerstats} = hero;

  const handleClick = () => {
    setCurrentHero(hero);
    //console.log(hero);
    window.localStorage.setItem("currentCard", pos);
    if (name) {
      handleShowDetails();
    } else {
      handleShowAdd();
    }
  };
  const handleDelete = () => {
    window.localStorage.setItem("currentCard", pos);
    const empty = {
      id: "",
      name: "",
      image: "",
      powerstats: {
        intelligence: "null",
        strength: "null",
        speed: "null",
        durability: "null",
        power: "null",
        combat: "null",
      },
    };
    updateTeam(empty);
  };

  return (
    <div>
      <Card className="mx-3 my-5 w-auto" border="dark">
        <CloseButton onClick={handleDelete} />
        <Card.Body onClick={handleClick}>
          <Card.Title className="hero-name text-center">
            {name ? name : "Empty"}
          </Card.Title>
          <Card.Img
            className="hero-img rounded-3 "
            variant="top"
            width={50}
            height={200}
            src={
              imgUrl
                ? imgUrl
                : "https://i.vimeocdn.com/portrait/1274237_300x300.jpg"
            }
          />
          <CardStats powerstats={powerstats} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardHero;

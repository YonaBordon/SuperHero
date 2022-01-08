import {Card, CloseButton} from "react-bootstrap";
import CardStats from "./CardStats";

const CardHero = ({pos, hero, handleShowAdd, handleShowDetails}) => {
  const {id, name, imgUrl, powerstats} = hero;

  const handleClick = () => {
    window.localStorage.setItem("currentCard", pos);
    if (name) {
      handleShowDetails();
    } else {
      handleShowAdd();
    }
  };

  return (
    <div>
      <Card className="mx-3 my-5" border="dark">
        <CloseButton />
        <Card.Body onClick={handleClick}>
          <Card.Title className="hero-name text-center">
            {name ? name : "Empty"}
          </Card.Title>
          <Card.Img
            className="hero-img rounded-3"
            width={150}
            height={250}
            variant="top"
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

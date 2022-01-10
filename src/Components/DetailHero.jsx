import {useEffect, useState} from "react";
import {Alert, Figure, Modal} from "react-bootstrap";
import {searchById} from "../helpers/request";
import Loader from "./Loader";

const DetailHero = ({currentHero}) => {
  const pos = window.localStorage.getItem("currentCard");
  const [hero, setHero] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const currentCard = async () => {
    await searchById(currentHero.id).then((res) => {
      const {data} = res;
      if (data.error) {
        setError(data.error);
      }
      setHero(data);
      setIsLoading(false);
      setError("");
    });
  };
  //console.log(cards[pos].id);
  //console.log(hero);

  useEffect(() => {
    currentCard();
  }, [hero.id]);

  const {name, biography, appearance, work, image} = hero;
  return (
    <>
      {!isLoading && error && (
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      )}
      {!isLoading && (
        <div>
          <Modal.Title className=" text-center">Details</Modal.Title>
          <Modal.Body>
            <Figure>
              <Figure.Image width={150} height={160} src={image.url} />
            </Figure>
            <div>
              <h2>{name}</h2>
              <p>
                Nombre Completo:{" "}
                {biography["full-name"] === null
                  ? name
                  : biography["full-name"]}
              </p>
              <p>
                Alias:
                {biography["aliases"] === null
                  ? "N/A"
                  : biography["aliases"].map((alias) => {
                      return <li>{alias}</li>;
                    })}
              </p>
            </div>
            <div>
              <p>Eye color: {appearance["eye-color"]}</p>
              <p>Hair color: {appearance["hair-color"]}</p>
            </div>
            <div>
              <p>Weight: {appearance["weight"][1]}</p>
              <p>Height: {appearance["height"][1]}</p>
            </div>
            <p>
              Work: {work["occupation"] === null ? "N/A" : work["occupation"]}
            </p>
          </Modal.Body>
        </div>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default DetailHero;

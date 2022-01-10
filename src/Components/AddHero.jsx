import {useEffect, useState} from "react";
import {Alert, Button, Card, CardGroup, Form, Modal} from "react-bootstrap";
import {getHero, searchByName} from "../helpers/request";
import CardHero from "./Card/CardHero";
import CardStats from "./Card/CardStats";
import Loader from "./Loader";

const AddHero = ({showAdd, updateTeam, handleCloseAdd}) => {
  const [find, setFind] = useState("");
  const [heroesList, setHeroesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [newHero, setNewHero] = useState("");

  const getAndRenderHeroes = async () => {
    setIsLoading(true);
    await searchByName(find).then((res) => {
      const {data} = res;
      if (data.error) {
        setError(data.error);
        setIsLoading(false);
        return;
      }
      const {results} = data;
      setHeroesList(results);
      setIsLoading(false);
      setError("");
    });
  };
  //console.log(heroesList);

  useEffect(() => {
    getAndRenderHeroes();
  }, [find]);

  const handleClick = (thisHero) => {
    //console.log(thisHero);
    updateTeam(thisHero);
    setFind("");
    setHeroesList([]);
    handleCloseAdd();
  };

  return (
    <>
      <Modal show={showAdd} onHide={handleCloseAdd} size="lg">
        <Modal.Header className=" flex-column-reverse" closeButton>
          <div>
            <Modal.Title className=" text-center">Find Hero</Modal.Title>

            <Form>
              <Form.Group className="mb-3" controlId="formSearch">
                <Form.Control
                  value={find}
                  onChange={(e) => setFind(e.target.value)}
                  placeholder="Name"
                />
                <Form.Text className="text-muted">
                  Find the hero and select to add.
                </Form.Text>
              </Form.Group>
            </Form>
            {isLoading ? (
              <Loader />
            ) : (
              <CardGroup className=" d-flex row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                {heroesList.map((hero) => (
                  <div>
                    <Card
                      key={hero.id}
                      className="my-2 m-auto"
                      border="dark"
                      style={{width: "12rem"}}
                    >
                      <Card.Body onClick={() => handleClick(hero)}>
                        <Card.Title className="text-center  ">
                          {hero.name}
                        </Card.Title>
                        <Card.Img
                          src={hero["image"].url}
                          width={50}
                          height={200}
                        ></Card.Img>
                        <CardStats powerstats={hero.powerstats} />
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </CardGroup>
            )}
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default AddHero;

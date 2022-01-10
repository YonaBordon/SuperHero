import "./CardStats.css";
const CardStats = ({powerstats}) => {
  const {combat, durability, intelligence, speed, strength, power} = powerstats;
  return (
    <div className="powerstats d-flex ">
      <div className="stats-info ">
        <i className="fas fa-fist-raised" />
        <p>{combat === "null" ? "0" : combat}</p>
      </div>
      <div className="stats-info">
        <i className="fas fa-battery-full" />
        <p>{durability === "null" ? "0" : durability}</p>
      </div>
      <div className="stats-info">
        <i className="fas fa-brain" />
        <p>{intelligence === "null" ? "0" : intelligence}</p>
      </div>
      <div className="stats-info">
        <i className="fas fa-tachometer-alt" />
        <p>{speed === "null" ? "0" : speed}</p>
      </div>
      <div className="stats-info">
        <i className="fas fa-dumbbell" />
        <p>{strength === "null" ? "0" : strength}</p>
      </div>
      <div className="stats-info">
        <i className="fas fa-bolt"></i>
        <p>{power === "null" ? "0" : power}</p>
      </div>
    </div>
  );
};

export default CardStats;

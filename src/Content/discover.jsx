import discover from "../Image/Discover.png";

function Discover() {
  return <img className="Discover" src={discover} alt="discover" />;
}

export default function Discovery() {
  return (
    <div className="">
      <h1>
        <Discover />
      </h1>
    </div>
  );
}

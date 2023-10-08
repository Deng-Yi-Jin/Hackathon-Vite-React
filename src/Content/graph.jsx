import list_project from "../Image/Projects.png";

function L_Projects() {
  return <img className="List_project" src={list_project} alt="List Project" />;
}

export default function Graph() {
  return (
    <div className="">
      <h1>
        <L_Projects />
      </h1>
    </div>
  );
}

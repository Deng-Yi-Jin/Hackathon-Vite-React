import jobs from "../Image/Jobs.png";

function Jobs() {
  return <img className="Jobs" src={jobs} alt="Jobs" />;
}

export default function Job_finder() {
  return (
    <div className="">
      <h1>
        <Jobs />
      </h1>
    </div>
  );
}

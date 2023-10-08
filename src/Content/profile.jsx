import intra_profile from "../Image/Intra_profile.png";
import agenda from "../Image/Agenda.png";
import achivement from "../Image/image.png"
import BasicModal from "../Modal/modal";

function Agenda() {
	return <img className="Agenda" src={agenda} alt="Agenda" />;
  }
  
  function IntraImage() {
	return <img className="Intra" src={intra_profile} alt="Intra" />;
  }

  function Achivement()
  {
	  return <img className="Achivement" src={achivement} alt="Achivement" />;
  }

export default function Profile(){
	return <div className="">
		<h1>
		  <IntraImage />
          <Agenda />
		  <Achivement />
			<BasicModal />
		</h1>	
	</div>
}
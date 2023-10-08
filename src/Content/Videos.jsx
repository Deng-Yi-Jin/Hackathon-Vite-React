import videos from "../Image/Videos.png"

function Videos() {
	return <img className="Videos" src={videos} alt="Videos" />;
}

export default function Video(){
	return <div className="">
		<h1>
			<Videos />
		</h1>
	</div>
}

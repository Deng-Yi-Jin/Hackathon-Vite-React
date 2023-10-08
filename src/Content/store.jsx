import store from "../Image/Store.png"

function Store() {
	return <img className="Store" src={store} alt="Store" />;
}

export default function Stores(){
	return <div className="">
		<h1>
			<Store />
		</h1>
	</div>
}
import React from "react";
import "./App.css";
import Hero from "./Components/Hero.tsx";
import Demo from "./Components/Demo.tsx";

function App() {
	return (
		<main className='main'>
			<div className='gradient' />
			<div className='app'>
				<Hero />
				<Demo />
			</div>
		</main>
	);
}

export default App;

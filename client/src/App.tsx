import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import zombiePortrait from "./assets/zombiePortrait.webp";

import Minion from "./components/Minion";

function App() {
	const [count, setCount] = useState(0);
	const pageStyle =
		"h-screen p-5 bg-gray-800 text-white flex flex-col items-center";

	const zombiePortraitData = {
		source: zombiePortrait,
		alt: "5e zombie portrait",
	};

	const minionData: { [key: string]: MinionProps } = {
		hurgus: {
			id: 1,
			portrait: zombiePortraitData,
			name: "Hurgus",
			maxHealth: 22,
			currentHealth: 22,
		},
		burgus: {
			id: 2,
			portrait: zombiePortraitData,
			name: "Burgus",
			maxHealth: 18,
			currentHealth: 18,
		},
		borgus: {
			id: 3,
			portrait: zombiePortraitData,
			name: "Borgus",
			maxHealth: 20,
			currentHealth: 20,
		},
		bingus: {
			id: 4,
			portrait: zombiePortraitData,
			name: "Bingus",
			maxHealth: 25,
			currentHealth: 25,
		},
	};

	return (
		<div className={pageStyle}>
			<div className="minionContainer flex gap-4 mb-8">
				{Object.values(minionData).map((minion) => (
					<Minion key={minion.id} minionData={minion} />
				))}
			</div>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;

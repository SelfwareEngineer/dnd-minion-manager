import { useState } from "react";
import zombiePortrait from "./assets/zombiePortrait.webp";

import Minion from "./components/Minion";

function App() {
	const pageStyle =
		"h-screen p-5 bg-gray-800 text-white flex flex-col items-center";

	const zombiePortraitData = {
		source: zombiePortrait,
		alt: "5e zombie portrait",
	};

	function getTestData(): MinionList {
		return {
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
	}

	const [minionData, setMinionData] = useState<MinionList>({});

	// TODO: Load minion data from local storage or backend

	return (
		<div className={pageStyle}>
			<div className="minionContainer flex gap-4 mb-8">
				{Object.values(minionData).map((minion) => (
					<Minion key={minion.id} minionData={minion} />
				))}
			</div>
			{/*WARN: Dev only. Remove for production. */}
			<button
				className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
				onClick={() =>
					setMinionData((prevData) => ({
						...prevData,
						...getTestData(),
					}))
				}
			>
				Add Test Minions
			</button>
		</div>
	);
}

export default App;

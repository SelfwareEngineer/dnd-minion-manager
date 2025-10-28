import zombiePortrait from "./assets/zombiePortrait.webp";

import Minion from "./components/Minion";

function App() {
	const pageStyle =
		"h-screen p-5 bg-gray-800 text-white flex flex-col items-center";

	const zombiePortraitData = {
		source: zombiePortrait,
		alt: "5e zombie portrait",
	};

	function getTestData(): { [key: string]: MinionProps } {
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

	const minionData = getTestData();

	return (
		<div className={pageStyle}>
			<div className="minionContainer flex gap-4 mb-8">
				{Object.values(minionData).map((minion) => (
					<Minion key={minion.id} minionData={minion} />
				))}
			</div>
		</div>
	);
}

export default App;

// TODO:
// - Prevent form submissions from appearing in URL bar
// - Investigate convention for extracting handlers to separate files
//   - Could do a `deleteFromState` util function that takes a key and state
//     setter but that seems a bit smelly. Want to see if there's a better
//     pattern.
// - Add isDead state to minions and greyed out CSS for visual indicator
// - Load minion data from local storage or backend

import { useState } from "react";
import { zombiePortraitData } from "./modules/portraitData";
import getTestData from "./modules/getTestData";

import Minion from "./components/Minion";
import NewMinionForm from "./components/NewMinionForm";

function App() {
	const [minionData, setMinionData] = useState<MinionList>({});

	function deleteMinion(minionKey: number) {
		setMinionData((prevData) => {
			const newData = { ...prevData };
			delete newData[minionKey];
			return newData;
		});
	}

	function addMinion(e: React.FormEvent) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const newKey = Date.now();
		const newMinionData = new FormData(form);

		const minionHealth = Number(newMinionData.get("maxHealth"));
		const newMinion: MinionProps = {
			portrait: zombiePortraitData,
			name: newMinionData.get("name") as string,
			maxHealth: minionHealth,
			currentHealth: minionHealth,
		};

		setMinionData((prevData) => ({
			...prevData,
			[newKey]: newMinion,
		}));

		form.reset();
	}

	const pageStyle =
		"h-screen p-5 bg-gray-800 text-white flex flex-col items-center";

	return (
		<div className={pageStyle}>
			<div className="minionContainer flex gap-4 mb-8">
				{Object.entries(minionData).map((minionEntry) => {
					return (
						<Minion
							key={minionEntry[0]}
							minionData={minionEntry[1]}
							handleDelete={() =>
								deleteMinion(Number(minionEntry[0]))
							}
						/>
					);
				})}
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
			<NewMinionForm handleSubmit={addMinion} />
		</div>
	);
}

export default App;

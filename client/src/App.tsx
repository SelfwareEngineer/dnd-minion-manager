// TODO:
// - Talk with Lou about using the foundry server as a backend
// - Finish refactoring Minion list styling to CSS grid for better responsiveness
// - Refactor getTestData and getMinionFromForm
//   - Extract static data to `getZombie()` function
//   - Extract dynamic test data to separate JSON file
//   - Have getMinionFromForm call the appropriate get<MinionType>() function
// - Prevent form submissions from appearing in URL bar
// - Add isDead state to minions and greyed out CSS for visual indicator
// - Load minion data from local storage or backend

import { useState } from "react";
import getTestData from "./modules/getTestData";
import getMinionFromForm from "./modules/getMinionFromForm";

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

	function addMinion(e: React.FormEvent<HTMLFormElement>) {
		const newMinion = getMinionFromForm(e);

		setMinionData((prevData) => ({
			...prevData,
			...newMinion,
		}));
	}

	const renderedMinions = Object.entries(minionData).map(([key, minion]) => (
		<Minion
			key={key}
			minionData={minion}
			handleDelete={() => deleteMinion(Number(key))}
		/>
	));

	const pageStyle =
		"h-1/1 p-5 bg-gray-900 text-white flex flex-col items-center";

	return (
		<div className={pageStyle}>
			<div className="minionContainer grid grid-cols-3 gap-4 mb-8">
				{renderedMinions}
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

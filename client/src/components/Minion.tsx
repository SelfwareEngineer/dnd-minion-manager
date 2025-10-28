// Props input here is nice and concise in App.tsx, but feels a bit verbose
// here. Is there a way to make this cleaner?
export default function Minion({ minionData }: { minionData: MinionProps }) {
	const { portrait, name, maxHealth, currentHealth } = minionData;
	return (
		<div className="minionCard flex border rounded-md p-2">
			<div className="portraitContainer w-12 h-12 rounded-sm mr-5 overflow-hidden">
				<img
					className="h-full w-full object-cover"
					src={portrait.source}
					alt={portrait.alt}
				/>
			</div>
			<div className="minionInfo">
				<h3>{name}</h3>
				<p>
					{/* refactor to actual bar later */}
					Health: {currentHealth} / {maxHealth}
				</p>
			</div>
		</div>
	);
}

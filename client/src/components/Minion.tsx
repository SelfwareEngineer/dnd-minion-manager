type Props = {
	minionData: MinionProps;
	handleDelete: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Minion({ minionData, handleDelete }: Props) {
	const { portrait, name, maxHealth, currentHealth } = minionData;
	return (
		<div className="minionCard flex items-center gap-3 border rounded-md p-2">
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
			<button
				onClick={handleDelete}
				className="px-2 py-0.5 bg-red-800 hover:bg-red-900 rounded-sm"
			>
				Delete
			</button>
		</div>
	);
}

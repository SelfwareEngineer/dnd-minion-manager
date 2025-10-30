type Props = {
	minionData: MinionProps;
	handleDelete: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Minion({ minionData, handleDelete }: Props) {
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
			<button
				onClick={handleDelete}
				className="text-red-700 hover:text-red-800"
			>
				Delete
			</button>
		</div>
	);
}

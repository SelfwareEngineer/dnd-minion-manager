type Props = {
	handleSubmit: React.FormEventHandler<HTMLFormElement>;
};
export default function NewMinionForm({ handleSubmit }: Props) {
	const labelStyle = "text-gray-300";
	const inputStyle = "px-2 py-0.5 bg-gray-600 border rounded-md";

	return (
		<form
			onSubmit={handleSubmit}
			className="mt-4 p-4 bg-gray-700 rounded-md flex flex-col items-end gap-4"
		>
			<h2 className="self-center font-bold text-xl">Add New Minion</h2>
			<label htmlFor="name" className={labelStyle}>
				<span
					aria-label="required"
					className="pr-1 text-red-600 text-xl"
				>
					*
				</span>
				Name:{" "}
				<input
					type="text"
					name="name"
					required
					className={inputStyle}
				/>
			</label>
			<label htmlFor="maxHealth" className={labelStyle}>
				<span
					aria-label="required"
					className="pr-1 text-red-600 text-xl"
				>
					*
				</span>
				Max Health:{" "}
				<input
					type="text"
					name="maxHealth"
					required
					className={inputStyle}
				/>
			</label>
			<button className="px-4 py-2 bg-green-600 hover:bg-green-700 self-center rounded-md">
				Create New Minion
			</button>
		</form>
	);
}

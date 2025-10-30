type Props = {
	handleSubmit: React.FormEventHandler<HTMLFormElement>;
};
export default function NewMinionForm({ handleSubmit }: Props) {
	const labelStyle = "text-gray-300";
	const inputStyle = "bg-gray-600 border rounded-md";

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name" className={labelStyle}>
				Name:{" "}
			</label>
			<input type="text" name="name" className={inputStyle} />
			<label htmlFor="maxHealth" className={labelStyle}>
				Max Health:{" "}
			</label>
			<input type="text" name="maxHealth" className={inputStyle} />
			<button className="bg-green-500">Create New Minion</button>
		</form>
	);
}

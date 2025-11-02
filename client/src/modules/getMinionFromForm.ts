import { zombiePortraitData } from "./portraitData";
export default function getMinionFromForm(e: React.FormEvent<HTMLFormElement>) {
	e.preventDefault();
	const form = e.target as HTMLFormElement;
	const newKey = Date.now();
	const newMinionData = new FormData(form);

	const minionHealth = Number(newMinionData.get("maxHealth"));
	const newMinion: MinionProps = {
		portrait: zombiePortraitData,
		// WARN: dunno if forcing string typecast is safe here
		name: newMinionData.get("name") as string,
		maxHealth: minionHealth,
		currentHealth: minionHealth,
	};

	form.reset();

	return { [newKey]: newMinion };
}

import { zombiePortraitData } from "./portraitData";

export default function getTestData(): MinionList {
	return {
		1: {
			portrait: zombiePortraitData,
			name: "Hurgus",
			maxHealth: 22,
			currentHealth: 22,
		},
		2: {
			portrait: zombiePortraitData,
			name: "Burgus",
			maxHealth: 18,
			currentHealth: 18,
		},
		3: {
			portrait: zombiePortraitData,
			name: "Borgus",
			maxHealth: 20,
			currentHealth: 20,
		},
		4: {
			portrait: zombiePortraitData,
			name: "Bingus",
			maxHealth: 25,
			currentHealth: 25,
		},
	};
}

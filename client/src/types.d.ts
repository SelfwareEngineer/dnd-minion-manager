type ImgData = {
	source: string;
	alt: string;
};

type MinionProps = {
	portrait: ImgData;
	name: string;
	maxHealth: number;
	currentHealth: number;
};

type MinionList = { [key: number]: MinionProps };

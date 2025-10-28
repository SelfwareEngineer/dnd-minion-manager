type ImgData = {
	source: string;
	alt: string;
};

type MinionProps = {
	id?: number;
	portrait: ImgData;
	name: string;
	maxHealth: number;
	currentHealth: number;
};

type MinionList = { [key: string]: MinionProps };

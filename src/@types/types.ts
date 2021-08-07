type ActuatorLink = {
	title: string;
	href: string;
	templated: boolean;
};

type ActuatorLinks = [
	title: string,
	subObject: { href: string; templated: boolean }
];

type BeanResponse = {
	title: string;
	sub: {
		aliases: string[];
		scope: string;
		type: string;
		resource: string;
		dependencies: string[];
	};
};
type Bean = {
	title: string;
	aliases: string[];
	scope: string;
	type: string;
	resource: string;
	dependencies: string[];
};

export type { ActuatorLink, ActuatorLinks, BeanResponse, Bean };

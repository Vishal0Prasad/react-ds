export type TreeBranch = {
	label: string;
	id: number;
	branches?: Tree;
};

export type Tree = Array<TreeBranch>;

export const mockTreeList: Tree = [
	{
		label: "Stem1",
		id: 1,
		branches: [
			{
				label: "Branch1",
				id: 2,
				branches: [
					{
						label: "Branch3",
						id: 3,
						branches: [],
					},
					{
						label: "Branch4",
						id: 4,
						branches: [],
					},
				],
			},
			{
				label: "Branch2",
				id: 5,
				branches: [
					{
						label: "Branch5",
						id: 6,
						branches: [],
					},
					{
						label: "Branch6",
						id: 7,
						branches: [],
					},
				],
			},
		],
	},
	{
		label: "Stem2",
		id: 8,
		branches: [
			{
				label: "Branch7",
				id: 9,
				branches: [
					{
						label: "Branch9",
						id: 10,
						branches: [],
					},
					{
						label: "Branch10",
						id: 11,
						branches: [],
					},
				],
			},
			{
				label: "Branch8",
				id: 12,
				branches: [],
			},
		],
	},
	{
		label: "Stem3",
		id: 13,
		branches: [
			{
				label: "Branch11",
				id: 14,
				branches: [],
			},
			{
				label: "Branch12",
				id: 15,
				branches: [],
			},
		],
	},
];

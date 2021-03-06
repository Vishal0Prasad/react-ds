import React, { Fragment } from "react";

import { Tree, TreeBranch } from "../data/tree";
import TreeItem from "./TreeItem";

type TreeListProps = {
	data: Tree;
};

const TreeList = (props: TreeListProps) => {
	const { data } = props;

	const generateTree = (branch: TreeBranch) =>
		branch?.branches && (
			<TreeItem
				id={String(branch.id)}
				label={branch.label}
				key={branch.id}
				// isSelected={branch?.selected}
			>
				{branch?.branches?.map((branch: TreeBranch) => {
					return <Fragment key={branch.id}>{generateTree(branch)}</Fragment>;
				})}
			</TreeItem>
		);

	return (
		<div>
			{data.map((datum: TreeBranch) => {
				return <div key={datum.id}>{generateTree(datum)}</div>;
			})}
		</div>
	);
};

export default TreeList;

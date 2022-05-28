import React, { Fragment } from "react";

import { Tree, TreeBranch } from "../data/tree";
import TreeItem from "./TreeItem";

type TreeListProps = {
	data: Tree;
};

const TreeList = (props: TreeListProps) => {
	const { data } = props;

	const generateTree = (branch: TreeBranch) => {
		return (
			<>
				{branch?.branches && branch.branches.length > 0 ? (
					<TreeItem id={String(branch.id)} label={branch.label} key={branch.id}>
						{branch?.branches?.map((branch: TreeBranch) => {
							return (
								<Fragment key={branch.id}>{generateTree(branch)}</Fragment>
							);
						})}
					</TreeItem>
				) : (
					<>
						<div key={branch.id} id={String(branch.id)}>
							{branch.label}
						</div>
					</>
				)}
			</>
		);
	};
	return (
		<div>
			{data.map((datum: TreeBranch) => {
				return <div key={datum.id}>{generateTree(datum)}</div>;
			})}
		</div>
	);
};

export default TreeList;

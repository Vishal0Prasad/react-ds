import React from "react";
import "./TreeItem.scss";

type TreeItemProps = {
	id: string;
	label: string;
	children: Array<JSX.Element>;
};

const TreeItem = ({ label, children }: TreeItemProps) => {
	return (
		<div>
			<div>{label}</div>
			<div className="child-style">{children}</div>
		</div>
	);
};

export default TreeItem;

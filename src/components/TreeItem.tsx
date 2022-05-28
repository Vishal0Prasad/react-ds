import React from "react";

type TreeItemProps = {
	id: string;
	label: string;
	children: Array<JSX.Element>;
};

const TreeItem = ({ label, children }: TreeItemProps) => {
	return <div>{label}</div>;
};

export default TreeItem;

import React, { useState } from "react";
import "./TreeItem.scss";

type TreeItemProps = {
	id: string;
	label: string;
	isSelected?: boolean;
	children: Array<JSX.Element>;
};

const TreeItem = ({ label, children, isSelected }: TreeItemProps) => {
	const [isOpen, setOpen] = useState<boolean | null>(null);
	// const [selected, setSelected] = useState(isSelected);

	return (
		<div>
			<div>
				{children.length > 0 && (
					<span className="parent-style" onClick={() => setOpen(!isOpen)}>
						{isOpen ? `▼` : `►`}
					</span>
				)}
				{
					<span
					/* onClick={(e: React.MouseEvent<HTMLInputElement>) => {
							setSelected(!selected);
						}} */
					>
						{label}
					</span>
				}
			</div>
			<div className="child-style">{isOpen && children}</div>
		</div>
	);
};

export default TreeItem;

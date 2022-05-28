import React from 'react';
import { Tree } from '../data/tree';

type TreeListProps = {
    data: Tree
}

const TreeList = (props : TreeListProps) => {

    const { data } = props;

    return (
        <div>
            {data[0]?.label}
        </div>
    );
};

export default TreeList;
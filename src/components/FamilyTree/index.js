import { uniqueId, map } from "lodash";
import React, { Component } from "react";
import ParentNode from "../ParentNode/index.js";
import { TreeJson } from "./constants";

import Draggable from 'react-draggable';

export default class FamilyTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tree: TreeJson,
    };
  }

  /**
   * Update state tree at the index
   */
  updateTree = (data, atIndex) => {
    console.log('saa',this.state.tree)
    let treeData = this.state.tree;
    treeData[atIndex] = data;
    this.setState({
      tree: treeData,
    });
    console.log('rrrr',data)
  };

  render() {
    const { tree } = this.state;
    console.log('treee',this.state)
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <React.Fragment>
        <Draggable {...dragHandlers}  className="mouse-pointer">
        <div className="family-tree">
          <div className="node-list">
            {map(tree, (ele, idx) => (
              <ParentNode
                key={uniqueId("parent-")}
                data={ele}
                updateTree={(data) => this.updateTree(data, idx)}
                isRoot={true}
              />
            ))}
          </div>
        </div>
        </Draggable>
      </React.Fragment>
    );
  }
}



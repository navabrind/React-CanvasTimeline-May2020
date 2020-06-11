import React, { Component } from 'react';
import moment from 'moment';
import FamilyTree from '../FamilyTree/index'
import { uniqueId, map } from "lodash";
import { FaPlus, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default class BoxNode extends Component { 
    constructor(props) {
    super(props); 
    this.state={
      index:''
    }
   
    }
  

     onAdd = () => { 
        this.props.onBoxNodeAddClick(this.props.val)
      };
      // EIDT FUNCTION WILL FIRE ON EDIT EVENT============
      onEdit =(parentIndex,childIndex) =>{
        console.log('saiiiiiii',parentIndex,childIndex)
        this.props.onBoxNodeEditClick(parentIndex,childIndex)       
      }
      // DELETE FUNCTION WILL FIRE ON DELETE EVENT==============//
      onDelete =(parentIndex,childIndex) =>{
        console.log('wwwww',parentIndex)
        this.props.onBoxDeleteClick(parentIndex,childIndex)       
      }

    render () {
        return (
           
                <div >
                   {/* <div className='harizantal-Line'></div> */}
                {/*<div className='harizantal-Line4'></div> */}
                  <div className="nodeNewdetails">
                    {!this.props.data.isEditable &&<p>{this.props.name}</p>}
                   
                      {this.props.data.isEditable && (
                        <input
                          type="text"
                          className="form-control inlineEdit"
                          defaultValue={this.props.name}
                          onBlur={this.onEdit}
                          />
                    )}
                      <button
                type="button"
                 className="button button-default"
                 onClick={() => this.onEdit(this.props.parentIndex,this.props.childIndex)}
               >
                <FaPen />
                </button>

                    <button
                      type="button"
                      className="button button-default"
                     onClick={() => this.onAdd()}
                     >
                  <FaPlus />
                </button>
                <button
              type="button"
              className="button button-delete"
              onClick={() => this.onDelete(this.props.parentIndex,this.props.childIndex)}
            >
              {console.log('oooo',this.props.parentIndex)}
              <MdDelete />
            </button>
                        

                </div>
                </div>
           
        )
    }

}
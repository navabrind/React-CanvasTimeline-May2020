import React, { Component, Fragment } from 'react';
import moment from 'moment';
import FamilyTree from '../FamilyTree/index'
import { uniqueId, map } from "lodash";
import BoxNode from './BoxNode'
export default class TimeLineWithBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDates: false,
            isDisplay: false,
            boxData: [],
            isBoxShow: false,
            val:[]

        }
        this.dateButtonClick = this.dateButtonClick.bind(this)
        this.onBoxNodeAddClick = this.onBoxNodeAddClick.bind(this)
        this.onBoxNodeEditClick =this.onBoxNodeEditClick.bind(this)
        this.onBoxNodeDeleteClick =this.onBoxNodeDeleteClick.bind(this)
    }

    onBoxNodeAddClick(val) {
        console.log('hello', this.state.boxData)
        let boxData = this.state.boxData
        let index = boxData.findIndex(function (value) {
            return value.index === val.index
        })
        if (index != -1) {
            boxData[index].boxData.push({
                name: "Project",
            })
        }
        this.setState({
            boxData: boxData
        })

    }
    onBoxNodeEditClick (parentIndex,childIndex) {
        let boxData= this.state.boxData
        boxData[parentIndex].boxData[childIndex].isEditable=true

        
        console.log('mmmmmm',boxData)
        this.setState({
            boxData:boxData
        })

    }
    // onBoxNodeDeleteClick (parentIndex,childIndex) {
    //     console.log('GGG',childIndex.findIndex())
    //     let boxData= this.state.boxData
    //     boxData[parentIndex].boxData.splice(childIndex.findIndex(),1)
    //     this.setState({
    //         boxData:boxData
    //     }
    //     )
    //     console.log('eeee',boxData)
    // }
    
    onBoxNodeDeleteClick(parentIndex, childIndex) {
        
       
        console.log('first ****',parentIndex, childIndex);
        
        
        const boxData = this.state.boxData
        console.log('GGGG', boxData)
        console.log(boxData[parentIndex].boxData,'ppppp');
        boxData[parentIndex].boxData.splice(childIndex, 1);
        console.log(boxData,'44444');    
        this.setState({
            boxData:boxData
        })
      }
    // onBoxNodeDeleteClick(itemToBeDeleted){
        
    //     var newItem=this.state.items.filter((boxData)=>{
    //         console.log('tttt',newItem)
    //         return boxData !=itemToBeDeleted
    //     });
    //     this.setState({items:newItem})
    // }
   
    
    dateButtonClick = (val) => {
        // console.log('uuuuu')

        let boxData = this.state.boxData
        let index = boxData.findIndex(function (value) {
            return value.year === val.year
        })
        if (index != -1) {
            boxData[index].isShow = true
        }

        // const { isDisplay } = this.state
        this.setState({
            isBoxShow: true,
            boxData: boxData,
            showDates: true,
        })
    }

    // updateTree = (data, atIndex) => {
    //     console.log('saa', data)
    //     let treeData = this.state.boxData;
    //     treeData[atIndex].boxData.push(data)
    //     this.setState({
            
    //         boxData: treeData,
    //     });
       
    // };

    

    componentDidMount() {
        let strtYr = parseInt(moment(this.props.startDate, "YYYY-MM-DD").format("YYYY"));
        let endYr = parseInt(moment(this.props.endDate, "YYYY-MM-DD").format("YYYY"));
      if(strtYr<endYr) {
        let x = [];
        let i = 0
        for (let j = strtYr; j <= endYr; j++) {
            let data = {
                year: strtYr++,
                index: i,
                isShow: false,
                boxData: [{
                    name: "Project",
                    isEditable:false,
                    isdelete:false
                }
                ]
            }
            i++;
            x.push(data)
        }

        this.setState({
            boxData: x,
            isBoxShow: true,
            showDates: true,
            isDisplayDateWithLine: true
        })

      }
      else{
          alert('start year shoud be less than end year!')
      }
    }


    render() {
        return (
            <Fragment >
                
                {this.state.boxData && this.state.boxData.map((val,parentIndex) => {
                    return (
                        <Fragment>
                         
                            <div className="col-sm-5 col-md-5">
                                <div className="row f-r">
                                {val.index%2!==0 && val.isShow && val.boxData.map((data,index) => {
                                    return (
                                        <div>
                                            
                                
                                    <BoxNode parentIndex={parentIndex} childIndex={index} name={data.name} data={data} val={val} 
                                    onBoxNodeAddClick={this.onBoxNodeAddClick}
                                    onBoxNodeEditClick={this.onBoxNodeEditClick}
                                    onBoxDeleteClick={this.onBoxNodeDeleteClick}
                                    />
                                    <div className='harizantal-Line'></div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                            </div>

                            <div className="col-sm-2 col-md-1 m-w-4" style={{margin:'15px'}}>
                                <div style={{flex:1,height:'120px',width:'2px',backgroundColor:'#ccc',marginLeft: '29px',marginBottom: '-85px'}}></div>
                                <button onClick={() => this.dateButtonClick(val)}  style={{margin: '13px'}}>
                                    {val.year}
                                </button>
                            </div>
                           
                            <div className="col-sm-5 col-md-5">
                            <div className="row">
                                
                            
                                {val.index%2===0 && val.isShow && val.boxData.map((data,index) => {
                                    return(
                                        <div> <div className='harizantal-Line4'></div>
                                             <BoxNode parentIndex={parentIndex} childIndex={index} name={data.name} data={data} val={val} onBoxNodeAddClick={this.onBoxNodeAddClick}
                                    onBoxNodeEditClick={this.onBoxNodeEditClick}
                                    onBoxDeleteClick={this.onBoxNodeDeleteClick}
                                    />

                                            </div>
                                    )
                                })
                                }
                            </div>
                        </div>                            

                        </Fragment>
                    )

                })
                }
            </Fragment>

        )
    }
}
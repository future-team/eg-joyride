/**
 * Created by mac on 16/5/9.
 */

import React,{PropTypes,Component} from 'react';
import classnames from 'classnames';
require ('../css/pager.less');

export default class Pager extends Component{
    static propTypes = {
        //
        total:PropTypes.number,
        current:PropTypes.number,
        changeCallback:PropTypes.func

    };
    static defaultProps = {
        total:0,
        current:0,
        changeCallback:function(){}
    };
    constructor(props,context){
        super(props,context);
    }

    render(){
        let {total,current}=this.props,
            _this=this,
            pageList=[];
        for(let index=0;index<total;index++){
            pageList.push(
                <i onClick={function(){
                      if(index==current){return;}
                      _this.props.changeCallback(index)
                   }}
                   className={(index==current?'active':'')}>
                </i>)
        }
        return(<div className='eg-pager-container'>
            {pageList}
        </div>)
    }
}


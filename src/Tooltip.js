/**
 * Created by mac on 16/5/9.
 */

import React,{PropTypes,Component} from 'react';
import classnames from 'classnames';
require ('../css/Joyride.less');

export default class Overlay extends Component{
    static propTypes = {
        //
        steps:PropTypes.array,
        holePadding:PropTypes.number,
        //何时显示遮罩块，可选always、hover（always会一直显示，hover只有在鼠标移动到的时候会显示）默认always
        show:PropTypes.string,
        //overlay的内容
        overlayContent:React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.element
        ])

    };
    constructor(props,context){
        super(props,context);
        this.state={
            index:0
        }
    }

    componentDidMount(){
        this.renderOverlay();
    }
    static defaultProps = {
        position:'bottom-right',
        show:'always',
        holePadding:5
    };
    nextStep(){
        let {steps}=this.props,
            {index}=this.state;
        index+=1;
        if(index>=steps.length){
            index=-1;
        }
        this.setState({
            index,index
        })
    }
    componentDidUpdate(){
        this.renderOverlay();
    }
    getOffset( el ) {
        var elemRect = el.getBoundingClientRect();
        return { top:elemRect.top+ window.scrollY, left: elemRect.left+ window.scrollX };
    }
    renderOverlay(){
        let {steps,holePadding}=this.props,
            {index}=this.state,
            hole=this.refs.hole,
            currentStep=steps[index],
            stepDom=document.querySelectorAll(currentStep.selector)[0];
        let offset=this.getOffset(stepDom);
        hole.style.left=offset.left-holePadding+'px';
        hole.style.top=offset.top-holePadding+'px';
        hole.style.width=stepDom.clientWidth+2*holePadding+'px';
        hole.style.height=stepDom.clientHeight+2*holePadding+'px';

    }
    render(){
        return(<div>
            {this.props.children}
            <div className='eg-joyride-container'>
                <div
                    ref='hole'
                    className='joyride-hole'>
                    <span>上一步</span>
                    <span onClick={::this.nextStep}>下一步</span>
                </div>
                <div className='joyride-tooltip'>

                </div>
            </div>
        </div>)
    }
}


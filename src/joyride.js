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
        tooltipMargin:PropTypes.number,
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
        holePadding:5,
        tooltipMargin:10
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
    preStep(){
        let {steps}=this.props,
            {index}=this.state;
        index-=1;
        if(index<0){
            index=steps.length-1;
        }
        this.setState({
            index,index
        })
    }
    componentDidUpdate(){
        this.renderOverlay();
    }
    getDimension( el ) {
        var elemRect = el.getBoundingClientRect();
        return {
            top:elemRect.top+ window.scrollY,
            left: elemRect.left+ window.scrollX,
            width:el.clientWidth,
            height:el.clientHeight
        };
    }
    renderOverlay(){
        let {steps,holePadding,tooltipMargin}=this.props,
            {index}=this.state,
            hole=this.refs.hole,
            holeStyle=hole.style,
            tooltip=this.refs.tooltip,
            tooltipStyle=tooltip.style,
            currentStep=steps[index],
            stepDom=document.querySelectorAll(currentStep.selector)[0],
            stepPosition=currentStep.position;
        //hole
        let holeDimension=this.getDimension(stepDom),
            holeLeft=holeDimension.left-holePadding,
            holeTop=holeDimension.top-holePadding,
            holeWidth=holeDimension.width+2*holePadding,
            holeHeight=holeDimension.height+2*holePadding;

        holeStyle.left=holeLeft+'px';
        holeStyle.top=holeTop+'px';
        holeStyle.width=holeWidth+'px';
        holeStyle.height=holeHeight+'px';

        //tooltip 不考虑冲突，只考虑用户设置的position
        let tooltipDimension=this.getDimension(tooltip),
            tooltipTop=0,
            tooltipLeft=0;
        switch (stepPosition){
            case 'top':
                tooltipTop=holeTop-tooltipMargin-tooltipDimension.height;
                tooltipLeft=holeLeft;
                //TODO
                break;
            case 'bottom':
                tooltipTop=holeTop+holeHeight+tooltipMargin;
                tooltipLeft=holeLeft;
                //TODO
                break;
            case 'left':
                tooltipLeft=holeLeft-tooltipMargin-tooltipDimension.width;
                tooltipTop=holeTop;
                //TODO
                break;
            case 'right':
                tooltipLeft=holeLeft+holeWidth+tooltipMargin;
                tooltipTop=holeTop;
                //TODO
                break;
        }
        tooltipStyle.left=tooltipLeft+'px';
        tooltipStyle.top=tooltipTop+'px';
        window.scrollTo(0,tooltipTop);
        tooltipStyle.opacity=1;
    }
    render(){
        let {steps,holePadding}=this.props,
            {index}=this.state,
            currentStep=steps[index]||{};
        return(<div>
            {this.props.children}
            <div className='eg-joyride-container'>
                <div
                    ref='hole'
                    className='joyride-hole'>
                    <span  onClick={::this.preStep}>上一步</span>
                    <span onClick={::this.nextStep}>下一步</span>
                </div>
                <div ref='tooltip' className='joyride-tooltip'>
                    <div>{
                        currentStep.title
                    }</div>
                </div>
            </div>
        </div>)
    }
}


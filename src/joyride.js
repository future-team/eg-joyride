/**
 * Created by mac on 16/5/9.
 */

import React,{PropTypes,Component} from 'react'
import Pager from './pager.js'
require ('../css/index.less')

export default class Overlay extends Component{
    static propTypes = {
        //
        steps:PropTypes.array,
        holePadding:PropTypes.number,
        tooltipMargin:PropTypes.number,
    }
    constructor(props,context){
        super(props,context)
        this.state={
            index:0
        }
    }
    resizeListener(){
        if(this.state.index!=-1){
            this.renderOverlay()
        }
    }
    componentDidMount(){
        this.renderOverlay()
        window.addEventListener('resize',::this.resizeListener)
    }
    componentWillUnmount(){
        window.removeEventListener('resize',::this.resizeListener)
    }
    static defaultProps = {
        holePadding:5,
        tooltipMargin:10
    }
    nextStep(){
        let {steps}=this.props,
            {index}=this.state
        index+=1
        if(index>=steps.length){
            this.close()
        }else{
            this.setState({
                index
            })
        }
    }
    componentDidUpdate(){
        this.renderOverlay()
    }
    getDimension( el ) {
        var elemRect = el.getBoundingClientRect()
        return {
            top:elemRect.top+ window.scrollY,
            left: elemRect.left+ window.scrollX,
            width:el.clientWidth,
            height:el.clientHeight
        }
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
            stepPosition=currentStep.position||'bottom'
        tooltip.className='joyride-tooltip'
        tooltipStyle.opacity=0
        //hole
        let holeDimension=this.getDimension(stepDom),
            holeLeft=holeDimension.left-holePadding,
            holeTop=holeDimension.top-holePadding,
            holeWidth=holeDimension.width+2*holePadding,
            holeHeight=holeDimension.height+2*holePadding

        holeStyle.left=holeLeft+'px'
        holeStyle.top=holeTop+'px'
        holeStyle.width=holeWidth+'px'
        holeStyle.height=holeHeight+'px'

        //tooltip 不考虑冲突，只考虑用户设置的position
        let tooltipDimension=this.getDimension(tooltip),
            tooltipTop=0,
            tooltipLeft=0,
            tooltipWidth=tooltipDimension.width,
            tooltipHeight=tooltipDimension.height


        //可视窗口的上下边界
        let topLine=window.scrollY,
            bottomline=topLine+window.innerHeight,
            overlayTopLine=holeTop,
            overlayBottomLine=holeTop+(tooltipHeight>holeHeight?tooltipHeight:holeHeight)


        switch (stepPosition){
            case 'top':
                tooltipTop=holeTop-tooltipMargin-tooltipHeight
                tooltipLeft=holeLeft
                overlayTopLine=tooltipTop
                overlayBottomLine=holeTop+holeHeight
                //TODO
                break
            case 'bottom':
                tooltipTop=holeTop+holeHeight+tooltipMargin
                tooltipLeft=holeLeft
                overlayTopLine=holeTop
                overlayBottomLine=tooltipTop+tooltipHeight
                //TODO
                break
            case 'left':
                tooltipLeft=holeLeft-tooltipMargin-tooltipWidth
                tooltipTop=holeTop
                //TODO
                break
            case 'right':
                tooltipLeft=holeLeft+holeWidth+tooltipMargin
                tooltipTop=holeTop
                //TODO
                break
        }
        tooltipStyle.left=tooltipLeft+'px'
        tooltipStyle.top=tooltipTop+'px'

        //scroll up or down
        if(overlayTopLine<topLine||overlayBottomLine>bottomline){
            window.scrollTo(0,overlayTopLine)
        }
        tooltip.className='joyride-tooltip animate'
        requestAnimationFrame(function(){
            tooltipStyle.opacity=1
        })
    }
    changePage(index){
        this.setState({
            index
        })
    }
    close(){
        this.setState({
            index:-1
        })
    }
    open(index){
        let {steps}=this.props
        if(index>=0&&index<steps.length){
            this.setState({
                index
            })
        }

    }
    render(){
        let {steps}=this.props,
            {index}=this.state,
            currentStep=steps[index]||{}
        if(index==-1){
            return null
        }else{
            return(
                <div className='eg-joyride-container'>
                    <div ref='hole'
                         className='joyride-hole' />
                    <div ref='tooltip' className='joyride-tooltip'>
                        <div>{
                            currentStep.title
                        }</div>
                        <div>
                            <div className='btn-list'>
                                <span  onClick={::this.close}>跳过</span>
                                <span onClick={::this.nextStep}>{
                                    index==steps.length-1?'关闭':'下一步'
                                }</span>
                            </div>
                            <Pager total={steps.length} current={index} changeCallback={::this.changePage} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}


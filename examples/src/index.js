import React, { Component ,PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import Joyride from '../../src/joyride.js';
class Demo extends Component{

    constructor(props,context){
        super(props,context);
    }
    openSecond(){
        this.refs.joyride.open(1)
    }
    render(){
        return (
            <Joyride
                ref='joyride'
                steps={[
                    {
                    title: 'Title only Hahahahahhah !',
                    selector:'#step1',
                    position:'bottom'
                    },
                    {
                    title: 'Title only Hahahahahhah !',
                    selector:'#step2',
                    position:'top'
                    },
                    {
                    title: 'Title only Hahahahahhah !',
                    selector:'#step3',
                    position:'left'
                    },
                    {
                    title: 'Title only Hahahahahhah !',
                    selector:'#step4',
                    position:'right'
                    }
                ]}>
                <div style={{paddingBottom:'500px'}}>
                    <h1>hehehehehe</h1>
                    <button onClick={::this.openSecond}>打开第二步</button>
                    <div
                        id='step1'
                        style={{background:'red',width:'100px',height:'100px'}}>
                        step1
                    </div>
                    <div
                        id='step2'
                        style={{marginTop:'100px',background:'#ff6633',height:'200px'}}>
                        step2
                    </div>
                    <div
                        id='step3'
                        style={{float:'right',width:'200px',height:'200px',background:'green'}}>
                        step3
                    </div>
                    <div
                        id='step4'
                        style={{float:'left',width:'200px',height:'200px',background:'orange'}}>
                        step4
                    </div>
                </div>
            </Joyride>
        )
    }
}



ReactDom.render(
    <Demo></Demo>,
    document.getElementById('root')
);
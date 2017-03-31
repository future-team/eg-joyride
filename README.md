# eg-joyride

页面引导组件，用于高亮某一块区域并添加说明步骤


demo地址 [https://future-team.github.io/eg-joyride/examples/index.html](https://future-team.github.io/eg-joyride/examples/index.html)


```jsx
         openSecond(){
             this.refs.joyride.open(1)
         }
         render(){
             return (
                 <div>
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
                     </Joyride>
                 </div>
             )
         }
```
#### `<Joyride>` Props:
- steps  用于设置引导步骤，为数组，数组中每一项的结构： {title: 'step1 !',selector:'#step1', position:'bottom'}
其中title为提示框中的文案、selector是选择器（string），用于选择需要引导提示的区域，position有四个取值：top,bottom,left,right
用于表示tooltip相对于hole的位置
- holePadding  取值为number，用于设置高亮区域白色的padding，默认为5
- tooltipMargin  取值为number，用于设置高亮区域白色的padding，默认为10



### Contributing

- Fork the project
- Run the project in development view demo: `$ npm run demo`
- Make changes.
- Add appropriate tests
- `$ npm run test`
- If tests don't pass, make them pass.
- Update README with appropriate docs.
- Rnn build
- `$ npm run build`
- Commit and PR.



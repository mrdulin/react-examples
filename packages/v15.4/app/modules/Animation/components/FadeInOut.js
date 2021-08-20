import ReactTransitionGroup from 'react-addons-transition-group';

const transitionName = {
  enter: 'fade-in',
  enterActive: 'fade-in-active',
  leave: 'fade-out',
  leaveActive: 'fade-out-active'
};

const transtionName2 = {
  enter: 'fade-in',
  leave: 'fade-out'
};

/*
 设置的timeout数值大，为了方便观察dom元素的class

 */
const FadeInOutCSSTG = ({children}) => {
  console.log('FadeInOutCSSTG chilren', children);
  return (
    <ReactCSSTransitionGroup
      transitionEnterTimeout={5000}
      transitionLeaveTimeout={5000}
      transitionName={transtionName2}>
      {children}
    </ReactCSSTransitionGroup>
  )
};

/**
 * 使用ReactTransitionGroup
 * 1. ReactTransitionGroup默认渲染一个`span`元素，可以通过`component`属性指定要默认渲染的元素
 */
const FadeInOutTG = ({children}) => {
  console.log('FadeInOutTG render', children);
  return (
    <div>
      <ReactTransitionGroup component='div' className='custom-element' children={children}/>
      {/*下面这种方式报错*/}
      {/*<ReactTransitionGroup component={<div className='custom-element'></div>} children={children}/>*/}
    </div>

  )
};

export {FadeInOutCSSTG, FadeInOutTG};


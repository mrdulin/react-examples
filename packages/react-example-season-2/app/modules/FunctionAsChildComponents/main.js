import Ratio from 'common/js/components/Ratio';

//http://merrickchristensen.com/articles/function-as-child-components.html

export default class extends React.Component {
  render() {
    return (
      <div>
        <Ratio>
          {(width, height, hasComputed) => (
            hasComputed
              ? <img src={require('common/images/2.jpg')} width={width} height={height}/>
              : null
          )}
        </Ratio>

        <Ratio>
          {(width, height, hasComputed) => (
            <div style={{width, height}}>Hello world!</div>
          )}
        </Ratio>
      </div>
    )
  }
}

import style from './style.module.scss';

class Tabs extends React.Component{
  render() {
    const {children} = this.props;

    return (
      <div className={style.tabs}>
        {children}
      </div>
    )
  }
}

export default Tabs;

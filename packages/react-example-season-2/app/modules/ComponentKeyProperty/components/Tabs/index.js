class Tabs extends React.Componnet{
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

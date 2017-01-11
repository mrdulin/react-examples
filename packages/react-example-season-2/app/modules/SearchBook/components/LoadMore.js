const LoadMore = ({show, text}) => {
    if(!show) return null;
    return <p className='load-more-text'>{text}</p>;
}

export default LoadMore;
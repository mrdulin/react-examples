import React, {Component} from 'react';


class GetEveryTypeParams extends Component{
    componentWillMount() {
        //http://localhost:8080/react-router01?name=novaline&age=26
        //http://localhost:8080/react-router01/1?name=novaline&age=26
        //获取查询字符串，例如?name=novaline&age=26
        const queryParams = this.props.location.query;
        //获取params
        const page = this.props.params.page;
        this.setState({
            queryParams,
            page
        })
    }

    render() {
        return(
            <div>
                <h2>获取url中的查询字符串</h2>
                <p>查询字符串：</p>
                <p>name: {this.state.queryParams.name}</p>
                <p>age: {this.state.queryParams.age}</p>
                <p>路由参数：</p>
                <p>page: {this.state.page}</p>
            </div>
        );
    }
}

export default GetEveryTypeParams;

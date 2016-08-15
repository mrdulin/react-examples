import React from 'react';


class TableES6 extends React.Component {

    constructor(props) {
        super(props);

        //ES6的方式初始化state
        this.state = {
            name: 'novaline',
            age: 24
        };

    }

    //mixins,ES6语法不支持mixins

    render() {
        // console.log('es6 initState', this.state);
        const headings = this.props.headings.map((heading, index) => {
            return <th key={index}>{heading}</th>
        });
        const rows = this.props.datas.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{data.who}</td>
                    <td>{data.description}</td>
                    <td>{data.when}</td>
                </tr>
            );
        });
        return (
            <div>
                <h3>{this.props.title}</h3>

                <table>
                    <thead>
                        <tr>
                            {headings}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
};


TableES6.displayName = 'ES6-Table';

//如果组件的props上没有datas属性，则报Warning: Failed propType: Required prop `datas` was not specified in `TableES6`.错误
//如果组件的props上有datas属性，但数据类型不是array,则报Warning: Failed propType: Invalid prop `datas` of type `string` supplied to `TableES6`, expected `array`.
//ES6的propTypes和defaultProps是定义在constructor上，而不是使用定义在类体内
//ES6的方式验证props
TableES6.propTypes = {
    datas: React.PropTypes.array.isRequired
};

//ES6的方式初始化props
TableES6.defaultProps = {
    datas: [{
        "when": "2 minutes ago",
        "who": "Jill Dupre",
        "description": "Created new account"
    }, {
        "when": "1 hour ago",
        "who": "Lose White",
        "description": "Added fist chapter"
    }, {
        "when": "2 hours ago",
        "who": "Jordan Whash",
        "description": "Created new account "
    }]
};

// Table.defaultProps = {
//     datas: '123'
// };

export default TableES6;

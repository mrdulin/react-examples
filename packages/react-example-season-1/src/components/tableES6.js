import React from 'react';


class TableES6 extends React.Component {

    constructor(props) {
        super(props);
    }

    //mixins,ES6语法不支持mixins

    render() {
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

//如果组件的props上没有datas属性，则报Warning: Failed propType: Required prop `datas` was not specified in `TableES6`.错误
//如果组件的props上有datas属性，但数据类型不是array,则报Warning: Failed propType: Invalid prop `datas` of type `string` supplied to `TableES6`, expected `array`.
//ES6的propTypes和defaultProps是定义在constructor上，而不是使用定义在类体内
TableES6.propTypes = {
    datas: React.PropTypes.array.isRequired
};

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

import update from 'immutability-helper';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class ImmutabilityHelper extends React.PureComponent{
    state = {
        rows: [
            {
                items: [
                    {
                        value: 'a',
                        errors: false
                    },
                    {
                        value: 'b',
                        errors: false
                    },
                    {
                        value: 'c',
                        errors: false
                    }
                ]
            }
        ],

        coupons: [
            {
                id: 1,
                title: '优惠劵1'
            },
            {   
                id: 2,
                title: '优惠劵2'
            },
            {
                id: 3,
                title: '优惠劵3'
            }
        ]
    };

    handleButtonClick = e => {
        console.log(e);
        const newState = {
            rows: update(this.state.rows, {
                0: {items: {1: {value: {$set: 'z'}}}}
            })
        };

        this.setState(newState);
    }

    handleCouponClick = (coupon, idx) => {
        const newState = {
            coupons: update(this.state.coupons, {
                [idx]: {
                    isExpand: {$set: !this.state.coupons[idx].isExpand}
                }
            })
        };

        this.setState(newState);
    }

    render() {
        console.count('render count');

        return <div>
            <h2>例1：</h2>
            <Table>
                <TableBody displayRowCheckbox={false}>
                    {
                        this.state.rows.map((row, idx) => {
                            return <TableRow>
                                {
                                    row.items.map((col, index) => {
                                        return <TableRowColumn>{col.value}</TableRowColumn>
                                    })
                                }
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
            <FlatButton label='修改列数据' onClick={this.handleButtonClick}/>

            <Divider />

            <h2>例2：</h2>
            <ul>
                {
                    this.state.coupons.map((coupon, idx) => {
                        return <li onClick={() => this.handleCouponClick(coupon, idx)} key={idx}>
                            <span>{coupon.title}</span>
                            <div>isExpand: {coupon.isExpand ? 'show drop menu' : ''}</div>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

export default ImmutabilityHelper;
import update from 'immutability-helper';
import $update from 'react/lib/update';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

// console.log($update);

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
        ],

        category: {
            lv1: {
                //1: [],
                //2: []
            },
            lv2: {
                //1: [],
                //2: []
            }
        }
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
            coupons: $update(this.state.coupons, {
                [idx]: {
                    isExpand: {$set: !this.state.coupons[idx].isExpand}
                }
            })
        };

        console.log('ref equal', this.state.coupons === newState.coupons);

        this.setState(newState);
    }

    handleCategoryClick = () => {
        // const lv1 = {
        //     1: [1,2,3],
        //     2: [2,3,4]
        // };
        // const lv2 = {
        //     3: [1,2,3],
        //     4: [4,5,6]
        // };

        //false false false
        // const newState = {
        //     category: update(this.state.category, {
        //         lv1: {$set: lv1},
        //         lv2: {$set: lv2}
        //     })
        // }

        //false false false
        // const newState = update(this.state, {
        //     category: {
        //         lv1: {$set: lv1},
        //         lv2: {$set: lv2}
        //     }
        // });

        
        const category = this.state.category;
        let lv1 = category.lv1;
        let lv2 = category.lv2;

        lv1[1] = [];
        lv1[1].push(1,2,3);
        
        lv2[3] = [];
        lv2[3].push(1,2,3);
        

        const newState = update(this.state, {
            category: {
                lv1: {$set: lv1},
                lv2: {$set: lv2}
            }
        });

        console.log(this.state === newState)
        console.log(this.state.category === newState.category);
        console.log(this.state.category.lv1 === newState.category.lv1);

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

            <h2>例3: </h2>
            <FlatButton label='修改category' onClick={this.handleCategoryClick}/>
            <p>{JSON.stringify(this.state.category, null, 4)}</p>
        </div>
    }
}

export default ImmutabilityHelper;
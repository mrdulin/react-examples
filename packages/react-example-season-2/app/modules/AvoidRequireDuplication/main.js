import DuplicationPlaceholder from './components/DuplicationPlaceholder';
import Placeholder from './components/Placeholder';
const placeholderImgUrl = require('common/images/2.jpg');

class AvoidRequireDuplication extends React.PureComponent{
    render() {

        return (
            <div>
                <h3>放在map中require的例子：</h3>
                <ul>
                    {
                        Array.from({length: 3}, () => 0).map((el, idx) => {
                            return <li key={idx}>
                                <DuplicationPlaceholder/>
                            </li>
                        })
                    }
                </ul>

                <h3>在map外require了一次的例子：</h3>
                <ul>
                    {
                        Array.from(Array(3), () => 0).map((el, idx) => {
                            return <li key={idx}>
                                <Placeholder src={placeholderImgUrl}/>
                            </li>
                        })
                    }
                </ul>

                <p>结论：</p>
                <p>两种情况，对于相同的资源，只会require一次。第一个例子虽然require在map中看似require了多次，但实际上require的都是相同的模块（图片）</p>
                <p>仅限于同一个chunk内，如果是多个code splitting的chunk引用了同一个资源，webpack会给每一个chunk中打包一份这个资源模块</p>
            </div>
        )
    }
}

export default AvoidRequireDuplication;
import React, {Component} from 'react';
import DownloadAll from '../../common/components/DownloadAll';

class DownloadAllTest extends Component{

    render() {
        const links = [
            'http://7xp9vw.com1.z0.glb.clouddn.com/image/2.jpg',
            'http://7xp9vw.com1.z0.glb.clouddn.com/image/3.jpg',
            'http://7xp9vw.com1.z0.glb.clouddn.com/image/5.jpg'
        ];

        return <div>
            <DownloadAll links={links}>
                <button type='button'>下载全部</button>
            </DownloadAll>
        </div>
    }

}

export default DownloadAllTest;

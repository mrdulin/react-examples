import React, {Component} from 'react';

class AdorableAvatars extends Component{
    static defaultProps = {
        api: 'https://api.adorable.io/avatars/'
    }
    state = {
        name: 'abott@adorable.io',
        size: 285,
        radius: 0,
        pngValue: false
    }
    render() {
        const {name, size, radius, pngValue} = this.state;
        const {api} = this.props;
        
        return <div id='adorable-avatars'>
            <h2>Adorable Avatars</h2>
            <hr/>
            <section className='adorable-avatars-container'>
                <div className='row'>
                    <div></div>
                </div>
                <div className='row'>
                    <div className='columns m-6'>
                        <div className='form-card'>
                            <div id='name' className="input-container">
                                <label>Identifier</label>
                                <input type="text" id='name' placeholder='enter text' value={name} onChange={this.handleNameChange}/>
                            </div>
                            <div id='size' className="input-container">
                                <label>
                                    Size
                                    <span className='size-value'>{size}</span>
                                    <span>px</span>
                                </label>
                                <input type="range" min='40' max='285' value={size} onChange={this.handleSizeChange}/>
                            </div>
                            <div id='radius' className="input-container">
                                <label>
                                    Border-radius
                                    <span className='radius-value'>{radius}</span>
                                    <span>%</span>
                                </label>
                                <input type="range" min='0' max='50' value={radius} onChange={this.handleRadiusChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="columns m-6 text-center">
                        <div className="container">
                            <img id='demo-image' style={{width: `${size}px`, height: `${size}px`, borderRadius: `${radius}%`}} src={`${api}${size}${name}`} alt="demo-image"/>
                        </div>
                    </div>
                </div>
                <div className="row code-row">
                    <div className="code-wrapper">
                        <code className='block'>
                            <span className="fade">{api}</span>
                            <span className="size-value">{size}</span>
                            <span className="fade">/</span>
                            <span className="name-value">{name}</span>
                            <span className="png-value">.png</span>
                        </code>
                        <a id='copy-button' title='Click to copy me.' className='button' onClick={this.handleCopy}>Copy to Clipboard</a>
                    </div>
                </div>
            </section>
        </div>
    }

    handleCopy = e => {
        const {api} = this.props;
        const {name} = this.state;
        var input = document.createElement('input');
        input.value = `${api}${name}.png`;
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }

    handleSizeChange = e => {
        this.setState({size: e.target.value});
    }

    handleRadiusChange = e => {
        this.setState({radius: e.target.value});
    }

    handleNameChange = e => {
        this.setState({name: e.target.value});
    }
}

export default AdorableAvatars;
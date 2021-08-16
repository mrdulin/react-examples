import React, {Component} from 'react';

class AudioPlayer extends Component{
    static defaultProps = {
        fastForwardStep: 10,
        volumeStep: 0.05,
        minVolume: 0,
        maxVolume: 1,
        maxProgress: 100
    }

    state = {
        progress: 0,
        volume: 0.5
    }

    componentDidMount() {
        this._audio.volume = this.state.volume;
        this._range.value = this.state.volume;

        this._audio.addEventListener('loadedmetadata', this.loadedmetadata.bind(this));
    }

    loadedmetadata(e) {
        const au = e.target;
        const duration = au.duration;
        this._progress.max = duration;
    }

    componentWillUnmount() {
        this._audio.removeEventListener('loadedmetadata', this.loadedmetadata);
    }

    render() {
        const {minVolume, maxVolume, volumeStep, maxProgress} = this.props;
        return <div>
            <ul>
                <li>Gson & Abley,Amasi - Heaven (Radio Edit).mp3</li>
            </ul>
            <audio src="http://7xp9vw.com1.z0.glb.clouddn.com/Gson%20&%20Abley,Amasi%20-%20Heaven%20%28Radio%20Edit%29.mp3"
                 preload="metadata" ref={ref => this._audio = ref} onTimeUpdate={(e) => this.onTimeUpdate(e)}>
                <p>Your browser does not support the <code>audio</code> element </p>
            </audio>

            <div>
                <progress onClick={e => this.handleProgress(e)} value={this.state.progress || 0.1} max={maxProgress}
                    ref={ref => this._progress = ref}></progress>
            </div>

            <div>
                <button type="button" onClick={() => this.play()}>play</button>
                <button type="button" onClick={() => this.pause()}>pause</button>
                <button type="button" onClick={() => this.stop()}>stop</button>

                <button type="button" onClick={() => this.fastForward()}>FastForward</button>
                <button type="button" onClick={() => this.rewind()}>Rewind</button>
            </div>

            <div>
                <label>
                    <input type="range" name="volume" min={minVolume} max={maxVolume} step={volumeStep}
                        onChange={() => this.handleVolume()}
                        ref={ref => this._range = ref}/>
                    volume: <span>{new Number(this.state.volume * 100).toFixed(2) + '%'}</span>
                </label>
            </div>
        </div>
    }

    handleProgress(e) {
        e.persist();
        // console.log(e);
        const prg = e.target;
        const percent = e.clientX / e.target.clientWidth;
        // console.log(percent);
        this._audio.currentTime = percent * this._progress.max;
    }

    play() {
        if(this._audio.ended || this._audio.paused) {
            this._audio.play();
        }
    }

    pause() {
        this._audio.pause();
    }

    stop() {
        this.pause();
        this._audio.currentTime = 0;
    }

    handleVolume() {
        const value = this._range.value;
        console.log('volume: %s', value);
        this._audio.volume = value;
        this.setState({volume: value});
    }

    fastForward() {
        this._audio.currentTime += this.props.fastForwardStep;
    }

    rewind() {
        this._audio.currentTime -= this.props.fastForwardStep;
    }

    onTimeUpdate(e) {
        const {currentTime, duration} = this._audio;
        // console.log('currentTime: %s', currentTime);
        // console.log('duration: %s', duration);
        this.setState({progress: currentTime});
    }

}

export default AudioPlayer;

class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        //mediaplayer method
        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        console.log(this.media.paused);
        (this.media.paused) ? this.play() : this.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
}



export default MediaPlayer
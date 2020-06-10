import MediaPlayer from "../MediaPlayer";

class Autoplay {
    constructor() { }
    run(player: MediaPlayer) {
        if (!player.muted) {
            player.muted = true;
        }
        player.play();
    }
}
export default Autoplay
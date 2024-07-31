import { BigPlayButton, ControlBar, ForwardControl, PlaybackRateMenuButton, Player, ReplayControl } from "video-react";

export default function Player1() {
    return (
        <Player
            poster='https://upload.wikimedia.org/wikipedia/commons/6/69/Sintel_Cover_Durian_Project.jpg'
            src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            fluid={false}
            width={512}
            height={256}
            muted={false}
            autoPlay={false}
            startTime={0}
        >
            <BigPlayButton position="center">

            </BigPlayButton>
            <ControlBar autoHide={true} autoHideTime={5000}>
                <PlaybackRateMenuButton rates={[5, 3, 2, 1, 0.5, 0.1]} />
                <ReplayControl seconds={5} order={2.1} />
                <ReplayControl seconds={10} order={2.2} />
                <ReplayControl seconds={30} order={2.3} />
                <ForwardControl seconds={5} order={3.1} />
                <ForwardControl seconds={10} order={3.2} />
                <ForwardControl seconds={30} order={3.3} />
            </ControlBar>
        </Player>
    );
}
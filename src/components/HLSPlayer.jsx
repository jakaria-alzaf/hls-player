import { useEffect } from 'react';
import { useRef } from 'react';
import Hls from 'hls.js';
import Poster from "../../public/vite.svg"


const HLSPlayer = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;

		let hlsInstance;

		if (Hls.isSupported()) {
			hlsInstance = new Hls();
			hlsInstance.loadSource("http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8");
			hlsInstance.attachMedia(videoElement);
		} else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
			videoElement.src = 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8';
		}
		return () => {
			if (hlsInstance) {
				hlsInstance.destroy();
			}
		};
	}, []);

	return (
		<div>
			{/*  */}
			{/* autoPlay */}
			<video ref={videoRef} controls width="640" height="360" poster={Poster} />
		</div>
	);
};

export default HLSPlayer;

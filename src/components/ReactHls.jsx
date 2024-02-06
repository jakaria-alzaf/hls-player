
import ReactPlayer from 'react-player';

const ReactHLS = () => {
	return (
		<div>
			<div style={{ width: '640px', height: '360px' }}>
				<ReactPlayer
					url="http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8" // replace with your HLS video URL
					controls={true}
					width="300"
					height="360"
					config={{
						hls: {
							startLevel: 0, // Set the initial quality level
							// Other hls.js options can be added here
						},
					}}
				/>
			</div>
		</div>
	);
};

export default ReactHLS;

import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            rel="0"
            fs="0"
            allowFullScreen
            title="Embedded Youtube"
        />
    </div>
)

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
}

export default YoutubeEmbed;
import React from "react";

function Musiclist() {

    return (
        <div className="Music">
            <h2>🎵To Day Music...🎵</h2>
            <div className="Music_1">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/KzZIkmNYRXs?si=uSf0VfbutsiIoxiI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="Music_2">
                <iframe width="400" height="200" src="https://www.youtube.com/embed/gw3ltsoYBtI?si=2ZUGGRbBhj-g4wQu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        </div>
    )
};
export default Musiclist;
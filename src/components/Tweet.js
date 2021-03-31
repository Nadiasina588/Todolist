import React from "react";

const Tweet = (name) => (
    <div>
        <h1>{name.name}</h1>
        <h2>{name.tweet}</h2>
    </div>
);
export default Tweet;
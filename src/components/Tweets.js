import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
    const tweets = [
        {
            name: "deved",
            tweet: "I don't neet alcohol"
        },
        {
            name: 'Transvery media',
            tweet: "Whats up guys , Im out taking abreak"
        },
        {
            name: "Nadiasina",
            tweet: "I m Developper website"
        },
    ];

    return (
   <section>
   {tweets.map((tweet) => 
   <Tweet name= {tweet.name} tweet= {tweet.tweet} /> 
   )}
    </section>
    )
}
export default Tweets;
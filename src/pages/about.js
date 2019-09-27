import React from 'react';

export function About() {
    return (
        <div className="Content-all">
            <h2>About Me</h2>
            <div className="Content-text">
                <p>
                    My name is Rachel Ik. I have basic background in C++ and Matlab which I learnt a decade ago in university. I'd been working as a Product Engineer (manufacturing field) for about 6 years altogether. Mainly, my job was to handle product's trials and modification until commercialisation. I do not have much instance on coding. At times, I wished I knew because I dealt with large amount of information and data processing.
                </p>
                <p>    
                    I managed to make a few Excel VBA code to automate documentation. I looked at my senior's VBA on automated data collection while looking for information online. My code wasn't versatile or user friendly with my limited coding skills but good enough to save me for the day. Now, I've decided to look into web and app development which I believe, could enlighten daily tasks. This is also the reason that I have been looking into TechLadies Bootcamp.                    
                </p>
                <p>
                    I like animals but I am also afraid of them unless they are family's or friend's. I am fond of Minions because I felt that we were like them. For example, getting into troubles while making things happen or when figuring things out, and it turned out good (sometimes). They are happy and fun.
                </p>
            </div>
            <br />
            <div>
            <img src={"../minions-laugh.jpg"} className="pic" alt="Two minions laughing" />
                {/* img from https://bit.ly/2lnr8xT */}
            </div>
            <br />
        </div>
    );
}
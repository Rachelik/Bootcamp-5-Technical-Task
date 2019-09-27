import React from 'react';

export function Index() {
    return (
        <div className="Content-all">
            <h2>Home</h2>
               <div className="Content-descpiption">
                    <img src={"../minions.webp"} className="pic" alt="Two minions looking at each other" />
                    {/* img from https://bit.ly/2kK1UJH */}
                    <p>Web Application for <a className="App-link" href="http://www.techladies.co/" target="_blank" rel="noopener noreferrer">TechLadies</a> Bootcamp#5</p> 
                </div> 
        </div>
    );
}

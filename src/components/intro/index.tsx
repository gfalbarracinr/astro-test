import React from "react"
import expertiseData from "../../data/expertise.json"
import "./index.css"
function Intro() {
    return ( 
        <article>
            <h1 className="title">Our expertise, your business</h1>
            <p className="text"> Our talented team of engineers has mastered advanced technologies in key areas and thrives on driving innovation with forward-looking companies.</p>
            <section className="section-container">
            { expertiseData.map((pic) => (
                <div key={pic.text} className="expertise-img" style={{backgroundImage: `url(/src/assets/${pic.img})`}}>
                    <h3 className="expertise-title">{pic.text}</h3>
                </div>
            ))
            }
            </section>
        </article>
    );
}

export default Intro;
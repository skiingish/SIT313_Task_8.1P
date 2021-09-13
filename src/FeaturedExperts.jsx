import React from "react";
import './css/FeaturedExperts.css';
import ExpertCard from "./ExpertCard";
import expertList from "./expertList";

const FeaturedExperts = () => {
    return (
        <div>
            <h1 class="experts-gallery-title">Featured Experts</h1>
            <div class="expert-gallery">
                <div class="expert-row">
                    {expertList.map((expert) =>
                        <ExpertCard
                            key={expert.key}
                            avatar={expert.avatar}
                            name={expert.name}
                            jobTitle={expert.jobTitle}
                            description={expert.description}
                            rating={expert.rating}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default FeaturedExperts;
import React from "react";
import './css/ExpertCard.css'

function ExpertCard(props) {
    return (
        <div className="expert-col">
            <div class="expert">
                <img src={props.avatar} alt="" />
                <p class="expert-name">{props.name}</p>
                <p class="expert-job-title">{props.jobTitle}</p>
                <p class="expert-description">{props.description}</p>
                <p class="expert-rating">{props.rating}</p>
            </div>
        </div>
    )
}

export default ExpertCard;
import React from "react";
const faker = require('faker');


function Expert() {
    faker.seed(Math.round(Math.random() * 1000));
    let image = faker.image.people();

    return(
        <div class="expert">
            <img src={image} alt=""/>
            <p class="expert-name">{faker.name.firstName()} {faker.name.lastName()}</p>
            <p class="expert-job-title">{faker.name.jobTitle()}</p>
            <p class="expert-description">{faker.company.catchPhrase()}</p>
            <p class="expert-rating">{faker.finance.amount(0,5)} Stars</p>
        </div>
    )
}

export default Expert;
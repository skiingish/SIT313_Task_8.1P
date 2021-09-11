import React from "react";
import Expert from "./Expert";

function FeaturedExperts() {
    return(
        <div>
            <h1 class="experts-gallery-title">Featured Experts</h1>
            <div class="expert-gallery">
                <div class="expert-row">
                    <div class="expert-col">
                        <Expert />
                    </div>
                    <div class="expert-col">
                        <Expert />
                    </div>
                    <div class="expert-col">
                        <Expert />
                    </div>
                </div>
                <div class="expert-row">
                    <div class="expert-col">
                        <Expert />
                    </div>
                    <div class="expert-col">
                        <Expert />
                    </div>
                    <div class="expert-col">
                        <Expert />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedExperts;
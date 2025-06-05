
import { select } from "d3";
import { interpolate } from "flubber";

const happyFace = {
    leftEye:"M73 37C73 57.4345 56.6584 74 36.5 74C16.3416 74 0 57.4345 0 37C0 16.5655 16.3416 0 36.5 0C56.6584 0 73 16.5655 73 37Z",
    rightEye:"M292 37C292 57.4345 275.658 74 255.5 74C235.342 74 219 57.4345 219 37C219 16.5655 235.342 0 255.5 0C275.658 0 292 16.5655 292 37Z",
    mouth: "M275 212.17C275 242.822 218.14 267.67 148 267.67C77.8598 267.67 21 242.822 21 212.17C21 181.518 77.8598 223.67 148 223.67C218.14 223.67 275 181.518 275 212.17Z"
}

const sadFace = {
    leftEye:"M236 176C236 193.673 192.678 176 119.5 176C46.3223 176 14 193.673 14 176C14 158.327 46.3223 144 119.5 144C192.678 144 236 158.327 236 176Z" ,
    rightEye:"M236 9.49999C236 30.763 219.211 48 198.5 48C177.789 48 161 30.763 161 9.49999C161 -11.763 177.789 9.5 198.5 9.5C219.211 9.5 236 -11.763 236 9.49999Z",
    mouth: "M75 9.99999C75 30.4345 58.2107 47 37.5 47C16.7893 47 0 30.4345 0 9.99999C0 -10.4345 16.7893 9.99999 37.5 9.99999C58.2107 9.99999 75 -10.4345 75 9.99999Z"
}

const faces = [happyFace, sadFace];

document.addEventListener("DOMContentLoaded", () => {
    let currentFaceIndex=0;
    let morphing = false;

    function morphToFace(targetFaceIndex) {
        if(morphing) {
            return;
        }

        morphing = true;

        const targetFace = faces[targetFaceIndex];

        const leftEyeInterpolator = interpolate(
            faces[currentFaceIndex].leftEye,
            targetFace.leftEye,
            {maxSegmentLength: 0.1}
        )

        const rightEyeEyeInterpolator = interpolate(
            faces[currentFaceIndex].rightEye,
            targetFace.rightEye,
            {maxSegmentLength: 0.1}
        )

        const mouthInterpolator = interpolate(
            faces[currentFaceIndex].mouth,
            targetFace.mouth,
            {maxSegmentLength: 0.1}
        )

        select("#leftEye")
        .transition(1000)
        .duration(700)
        .attrTween("d", () => leftEyeInterpolator)


        select("#rightEye")
        .transition(1000)
        .duration(700)
        .attrTween("d", () => rightEyeEyeInterpolator)


        select("#mouth")
        .transition(1000)
        .duration(700)
        .attrTween("d", () => mouthInterpolator)
        .on("end", () => {
            currentFaceIndex = targetFaceIndex;
            morphing = false;
        })
    }

document.querySelector("#button").addEventListener("click", () => {morphToFace(1)});
})
<script setup>
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
    showSlider("next");
};
prevDom.onclick = function () {
    showSlider;
};

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let timeAutoRun;
function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemthumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        listItemDom.appendChils(itemSlider[0]);
        thumbnailDom.appendChils(itemthumbnail[0]);
        carouselDom.classList.add("next");
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prevend(itemSlider[positionLastItem]);
        thumbnailDom.prevend(itemthumbnail[positionLastItem]);
        carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
    }, timeRunning);
    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
</script>

<template>
    <!-- carousel -->
    <div class="carousel">
        <!-- list item -->
        <div class="list">
            <div class="item">
                <img src="@/assets/img/1.jpg" alt="" />
                <div class="content">
                    <div class="author">les Genres dans</div>
                    <div class="title">THEMATIQUE</div>
                    <div class="topic">VIE ASSOCCIATIVE</div>
                    <div class="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sint natus excepturi recusandae temporibus
                        exercitationem maiores! Illum facilis quis nostrum
                        laborum cupiditate, id sint repellat tenetur ab, maxime,
                        at doloribus!
                    </div>
                    <div class="buttons">
                        <button>EN SAVOIR PLUS</button>
                        <button>DOCUMENTAIRE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/2.jpg" alt="" />
                <div class="content">
                    <div class="author">les Genres dans</div>
                    <div class="title">THEMATIQUE</div>
                    <div class="topic">VIE ASSOCCIATIVE</div>
                    <div class="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sint natus excepturi recusandae temporibus
                        exercitationem maiores! Illum facilis quis nostrum
                        laborum cupiditate, id sint repellat tenetur ab, maxime,
                        at doloribus!
                    </div>
                    <div class="buttons">
                        <button>EN SAVOIR PLUS</button>
                        <button>DOCUMENTAIRE</button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/3.jpg" alt="" />
                <div class="content">
                    <div class="author">les Genres dans</div>
                    <div class="title">THEMATIQUE</div>
                    <div class="topic">VIE ASSOCCIATIVE</div>
                    <div class="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt sint natus excepturi recusandae temporibus
                        exercitationem maiores! Illum facilis quis nostrum
                        laborum cupiditate, id sint repellat tenetur ab, maxime,
                        at doloribus!
                    </div>
                    <div class="buttons">
                        <button>EN SAVOIR PLUS</button>
                        <button>DOCUMENTAIRE</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- thumbnail -->
        <div class="thumbnail">
            <div class="item">
                <img src="@/assets/img/1.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/2.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/3.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
            <div class="item">
                <img src="@/assets/img/1.jpg" alt="" />
                <div class="content">
                    <div class="title">Name Slider</div>
                    <div class="des">Description</div>
                </div>
            </div>
        </div>
        <!-- arrows -->
        <div class="arrows">
            <button class="prev"><</button>
            <button class="next">></button>
        </div>
        <div class="time"></div>
    </div>
</template>

<style setup>
.carousel {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
}
.carousel .list .item {
    padding: absolute;
    inset: 0 0 0 0;
}
.carousel .list .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.carousel .list .item .content {
    position: absolute;
    top: 20%;
    width: 1140px;
    max-width: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
}
.carousel .list .item .content .author {
    font-weight: bold;
    letter-spacing: 10px;
}
.carousel .list .item .content .title,
.carousel .list .item .content .topic {
    font-weight: bold;
    font-size: 4em;
    line-height: 1.3em;
}
.carousel .list .item .content .topic {
    color: #9ad35a;
}
.carousel .list .item .content .buttons {
    display: grid;
    grid-template-columns: repeat(2, 190px);
    grid-template-rows: 40px;
    gap: 5px;
    margin-top: 20px;
}
.carousel .list .item .content button {
    border: none;
    background-color: #eee;
    letter-spacing: 3px;
    font-family: Poppins;
    font-weight: 500;
}
.carousel .list .item .content button:nth-child(2) {
    background-color: transparent;
    color: #582c4d;
    border: 1px solid #582c4d;
}
/* thumbnail */
.thumbnail {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
}
.thumbnail .item {
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
}
.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.thumbnail .item .content {
    position: absolute;
    color: #fff;
    bottom: 10px;
    left: 10px;
    right: 10px;
}
.thumbnail .item .content .title {
    font-weight: bold;
}
/* arrows */
.arrows {
    position: absolute;
    top: 80%;
    right: 52%;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
}
.arrows button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #eee4;
    border: none;
    font-family: monospace;
    color: #fff;
    font-weight: bold;
    font-size: large;
    transition: 0.5s;
    z-index: 100;
}
.arrows button:hover {
    background-color: #eee;
    color: #555;
}
.carousel .list .item:nth-child(1) {
    z-index: 1;
}
.carousel .list .item:nth-child(1) .author,
.carousel .list .item:nth-child(1) .title,
.carousel .list .item:nth-child(1) .topic,
.carousel .list .item:nth-child(1) .des,
.carousel .list .item:nth-child(1) .buttons {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;
}
@keyframes showContent {
    to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
}
.carousel .list .item:nth-child(1) .title {
    animation-delay: 1.2s;
}
.carousel .list .item:nth-child(1) .topic {
    animation-delay: 1.4s;
}
.carousel .list .item:nth-child(1) .des {
    animation-delay: 1.6s;
}
.carousel .list .item:nth-child(1) .buttons {
    animation-delay: 1.8s;
}
/* effect next clik  */
.carousel.next .item:nth-child(1) img {
    width: 150px;
    height: 220px;
    position: absolute;
    left: 50%;
    bottom: 50%;
    animation: showImage 0.5s linear 1 forwards;
}
@keyframes showImage {
    to {
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: 0;
    }
}
.carousel.next .thumbnail .item:nth-child(1) {
    width: 0;
    overflow: hidden;
    animation: showThumbnail 0.5s linear 1 forwards;
}
@keyframes showThumbnail {
    to {
        width: 150px;
    }
}
.carousel.next .thumbnail {
    transform: translateY(150px);
    animation: transformThumbnail 0.5s linear 1 forwards;
}
@keyframes transformThumbnail {
    to {
        transform: translateX(0);
    }
}
/* effect prev clik  */
.carousel.prev .list .item:nth-child(2) {
    z-index: 2;
}
.carousel.prev .list .item:nth-child(2) img {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: outImage 0.5s linear 1 forwards;
}
@keyframes transformThumbnail {
    to {
        width: 150;
        height: 220px;
        border-radius: 20px;
        left: 50%;
        bottom: 50px;
    }
}
.carousel.prev .thumbnail .item:nth-child(1) {
    width: 0;
    overflow: hidden;
    opacity: 0;
    animation: showTumbnail 0.5s linear 1 forwards;
}
.carousel.prev
    .list
    .item:nth-child(2)
    .author
    .carousel.prev
    .list
    .item:nth-child(2)
    .title
    .carousel.prev
    .list
    .item:nth-child(2)
    .topic
    .carousel.prev
    .list
    .item:nth-child(2)
    .des
    .carousel.prev
    .list
    .item:nth-child(2)
    .buttons {
    animation: contentOut 1.5s linear 1 forwards;
}
@keyframes contentOut {
    to {
        transform: translateX(-150px);
        filter: blur(20px);
        opacity: 0;
    }
}
.carousel.next .arrows button,
.carousel.prev .arrows button {
    pointer-events: none;
}
/* time */
time {
    width: 0%;
    height: 5px;
    background-color: #f1683a;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
}
.carousel.next .time,
.carousel.prev .time {
    width: 100%;
    animation: timeRunning 2s linear 1 forwards;
}
@keyframes timeRunning {
    to {
        width: 0;
    }
}
@media screen and (max-width: 678px) {
    .carousel .list .item .content {
        padding-right: 0;
    }
    .carousel .list .item .content .title {
        font-size: 30px;
    }
}
</style>

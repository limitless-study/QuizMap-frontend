import { css } from '@emotion/react';

const global = css`
* {
    margin: 0;
    padding: 0;
}

html, body, main {
    height : 100vh;
}

body {
    font-size: 16px;
    line-height: 1.5;
    background: #FFF;
    color: #000;
}

ul {
    list-style: none;
}

a {
    color: black;
    text-decoration: none;
}

.card-player {
    max-width: 600px;
    min-height: calc(100vh - 3em);
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}

.swipe-wrapper {
    width: 100%;
    text-align: center;
    margin-bottom: 2em;
}

.card-player .flip-card.swipe-initial {
    animation: scaleInCenter .4s forwards;
}

.card-player .flip-card.swipe-left {
    -webkit-animation: swipeLeft .7s forwards;
    -moz-animation: swipeLeft .7s forwards;
    animation: swipeLeft .7s forwards;
  }

.card-player .flip-card.swipe-right {
    -webkit-animation: swipeRight .7s forwards;
    -moz-animation: swipeRight .7s forwards;
    animation: swipeRight .7s forwards;
}

@keyframes scaleInCenter {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

@-webkit-keyframes swipeLeft {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-2000px);
    }
  }
  @-moz-keyframes swipeLeft {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-2000px);
    }
  }
  @keyframes swipeLeft {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-2000px);
    }
}
 
@-webkit-keyframes swipeRight {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(2000px);
    }
  }
  @-moz-keyframes swipeRight {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(2000px);
    }
  }
  @keyframes swipeRight {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(2000px);
    }
}

.flip-card-wrapper {
    width: 100%;
    display: inline-block;
}

.card-flip {
    perspective: 1000px;
    z-index: auto;
}

.card-flipper {
    position: relative;
    width: 100%;
    height: 100%;
}

.card-front {
    width: 60%;
    backface-visibility: hidden;
    left: 0px;
    position: relative;
    top: 0px;
    transform: rotateY(0deg);
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all 0.6s ease 0s;
}

.card-back {
    width: 60%;
    backface-visibility: hidden;
    left: 0px;
    position: absolute;
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.6s ease 0s;
}

.flip-card-side {
    border-radius: 12px;
    border: 1px solid lightgray;
    box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
    width: 100%;
    min-height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    box-sizing: border-box;
}
`;

export default global;

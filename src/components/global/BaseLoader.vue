<template>
  <span
    class="base-loader base-loader--indeterminate"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="22.06896551724138 22.06896551724138 44.13793103448276 44.13793103448276"
      style="transform: rotate(0deg);"
    >
      <circle
        fill="transparent"
        cx="44.13793103448276"
        cy="44.13793103448276"
        r="20"
        stroke-width="4.137931034482759"
        stroke-dasharray="125.664"
        stroke-dashoffset="125.66370614359172px"
        class="base-loader__overlay"
      />
    </svg>
  </span>
</template>

<script>
export default {}
</script>

<style>
.base-loader {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
}
svg:not(:root) {
    overflow: hidden;
}
.base-loader svg {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
}
.base-loader--indeterminate svg {
    animation: progress-circular-rotate 1.4s linear infinite;
    transform-origin: center center;
    transition: all 0.2s ease-in-out;
}
.base-loader--indeterminate .base-loader__overlay {
    animation: progress-circular-dash 1.4s ease-in-out infinite;
    stroke-linecap: round;
    stroke-dasharray: 80, 200;
    stroke-dashoffset: 0px;
}
.base-loader__overlay {
    stroke: currentColor;
    z-index: 2;
    transition: all 0.6s ease-in-out;
}

@-webkit-keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -125px;
  }
}

@keyframes progress-circular-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100, 200;
    stroke-dashoffset: -125px;
  }
}
@-webkit-keyframes progress-circular-rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes progress-circular-rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>

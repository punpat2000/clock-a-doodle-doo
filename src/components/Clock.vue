<template>
  <div class="vertical-center">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1920" height="1080" fill="#F8F8FA" />
      <g filter="url(#filter0_d)">
        <rect
          class="clickable"
          x="1601"
          y="75"
          width="241"
          height="75"
          rx="26"
          fill="white"
        />
        <rect
          x="1604.5"
          y="78.5"
          width="234"
          height="68"
          rx="22.5"
          stroke="#D5B6F1"
          stroke-width="7"
        />
      </g>
      <g filter="url(#filter1_d)">
        <path
          d="M1649.47 121.112L1651.94 118.52H1657.87L1660.19 121.112H1649.47ZM1660.96 120.056L1658.37 117.584V111.68L1660.96 109.328V120.056ZM1651.53 110.192C1650.97 109.744 1650.4 109.304 1649.83 108.872L1651.53 107.6H1658.08L1659.76 108.872L1658.08 110.192H1651.53ZM1649.44 96.728H1660.17L1657.79 99.32H1651.91L1649.44 96.728ZM1648.67 108.488V97.76L1651.27 100.088V106.04L1648.67 108.488ZM1669.02 121.112L1671.49 118.52H1677.42L1679.77 121.112H1669.02ZM1668.33 109.328L1670.89 111.824V117.704L1668.33 120.056V109.328ZM1671.09 110.192C1670.49 109.728 1669.93 109.288 1669.41 108.872L1671.09 107.6H1677.64L1679.32 108.872L1677.64 110.192H1671.09ZM1669 96.728H1679.7L1677.37 99.32H1671.45L1669 96.728ZM1668.25 108.488V97.76L1670.82 100.088V106.04L1668.25 108.488ZM1694.53 120.056L1691.94 117.584V111.68L1694.53 109.328V120.056ZM1685.84 98.888C1685.28 98.44 1684.72 98.016 1684.16 97.616L1685.84 96.32H1700.58L1702.26 97.616L1700.58 98.888H1694.46V108.488L1691.87 106.16V100.232L1693.28 98.888H1685.84ZM1713.72 120.056L1711.13 117.584V111.68L1713.72 109.328V120.056ZM1705.04 98.888C1704.48 98.44 1703.92 98.016 1703.36 97.616L1705.04 96.32H1719.77L1721.45 97.616L1719.77 98.888H1713.65V108.488L1711.06 106.16V100.232L1712.48 98.888H1705.04ZM1732.92 120.056L1730.33 117.584V111.68L1732.92 109.328V120.056ZM1732.87 97.76V108.488L1730.28 106.16V100.232L1732.87 97.76ZM1743.52 107.288V96.512L1746.12 98.888V104.816L1743.52 107.288ZM1758.14 96.512V107.288L1755.55 104.912V99.008L1758.14 96.512ZM1743.45 108.104L1746.04 110.576V116.504L1743.45 118.856V108.104ZM1758.07 118.856L1755.48 116.36V110.456L1758.07 108.104V118.856ZM1747.34 103.616V98.744L1754.16 110.216V115.112L1747.34 103.616ZM1764.64 121.112L1767.11 118.52H1773.04L1775.37 121.112H1764.64ZM1763.92 109.328L1766.51 111.824V117.704L1763.92 120.056V109.328ZM1776.13 120.056L1773.54 117.584V111.68L1776.13 109.328V120.056ZM1766.7 110.192C1766.14 109.744 1765.57 109.304 1765 108.872L1766.7 107.6H1773.25L1774.93 108.872L1773.25 110.192H1766.7ZM1764.61 96.728H1775.34L1772.97 99.32H1767.09L1764.61 96.728ZM1763.85 108.488V97.76L1766.44 100.088V106.04L1763.85 108.488ZM1783.83 121.112L1786.31 118.52H1792.23L1794.56 121.112H1783.83ZM1795.33 120.056L1792.74 117.584V111.68L1795.33 109.328V120.056ZM1785.9 110.192C1785.34 109.744 1784.77 109.304 1784.19 108.872L1785.9 107.6H1792.45L1794.13 108.872L1792.45 110.192H1785.9ZM1783.81 96.728H1794.54L1792.16 99.32H1786.28L1783.81 96.728ZM1783.04 108.488V97.76L1785.63 100.088V106.04L1783.04 108.488Z"
          fill="#B87FEC"
        />
      </g>
      <g
        class="clickable"
        @click="onClick"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <g filter="url(#filter2_d)">
          <rect
            x="685"
            y="879"
            width="549"
            height="126"
            rx="42"
            v-bind:fill="mainBtn.color"
          />
          <rect
            x="688.5"
            y="882.5"
            width="542"
            height="119"
            rx="38.5"
            v-bind:stroke="mainBtn.strokeColor"
            stroke-width="7"
          />
        </g>
        <g filter="url(#filter3_d)">
          <path v-bind:d="mainBtn.path" v-bind:fill="mainBtn.fontColor" />
        </g>
      </g>
      <path
        d="M1406 185H1467V221H1406V185Z"
        fill="#D5B6F1"
        stroke="#B87FEC"
        stroke-width="4"
      />
      <rect
        x="929"
        y="185"
        width="61"
        height="36"
        fill="#D5B6F1"
        stroke="#B87FEC"
        stroke-width="4"
      />
      <rect
        x="452"
        y="185"
        width="61"
        height="36"
        fill="#D5B6F1"
        stroke="#B87FEC"
        stroke-width="4"
      />
      <rect
        x="1374"
        y="215"
        width="125"
        height="60"
        fill="#D5B6F1"
        stroke="#B87FEC"
        stroke-width="4"
      />
      <rect
        x="897"
        y="215"
        width="125"
        height="60"
        fill="#D5B6F1"
        stroke="#B87FEC"
        stroke-width="4"
      />
      <rect
        x="420"
        y="215"
        width="125"
        height="60"
        fill="#D5B6F1"
        stroke="#B87FEC"
        stroke-width="4"
      />
      <g filter="url(#filter4_d)">
        <rect
          x="177"
          y="269"
          width="1566"
          height="530"
          rx="127"
          fill="#D5B6F1"
        />
        <rect
          x="180.5"
          y="272.5"
          width="1559"
          height="523"
          rx="123.5"
          stroke="#B87FEC"
          stroke-width="7"
        />
      </g>
      <g filter="url(#filter5_d)">
        <circle cx="1437" cy="534" r="200" fill="white" />
        <circle cx="1437" cy="534" r="198" stroke="#B87FEC" stroke-width="4" />
      </g>
      <g filter="url(#filter6_d)">
        <circle cx="960" cy="534" r="200" fill="white" />
        <circle cx="960" cy="534" r="198" stroke="#B87FEC" stroke-width="4" />
      </g>
      <g filter="url(#filter7_d)">
        <circle cx="483" cy="534" r="200" fill="white" />
        <circle cx="483" cy="534" r="198" stroke="#B87FEC" stroke-width="4" />
      </g>
      <path
        d="M1478.58 638.439C1479.37 638.672 1480.21 638.217 1480.44 637.422L1484.24 624.467C1484.47 623.672 1484.01 622.839 1483.22 622.606C1482.42 622.373 1481.59 622.828 1481.36 623.623L1477.98 635.139L1466.47 631.763C1465.67 631.53 1464.84 631.986 1464.61 632.781C1464.37 633.576 1464.83 634.409 1465.62 634.642L1478.58 638.439ZM1436.68 562.72L1477.68 637.72L1480.32 636.28L1439.32 561.28L1436.68 562.72Z"
        fill="#D5B6F1"
      />
      <path
        d="M1438.06 396.939C1437.47 396.354 1436.53 396.354 1435.94 396.939L1426.39 406.485C1425.81 407.071 1425.81 408.021 1426.39 408.607C1426.98 409.192 1427.93 409.192 1428.51 408.607L1437 400.121L1445.49 408.607C1446.07 409.192 1447.02 409.192 1447.61 408.607C1448.19 408.021 1448.19 407.071 1447.61 406.485L1438.06 396.939ZM1438.5 562V398H1435.5V562H1438.5Z"
        fill="#D5B6F1"
      />
      <path
        d="M1001.58 635.439C1002.37 635.672 1003.21 635.217 1003.44 634.422L1007.24 621.467C1007.47 620.672 1007.01 619.839 1006.22 619.606C1005.42 619.373 1004.59 619.828 1004.36 620.623L1000.98 632.139L989.467 628.763C988.672 628.53 987.839 628.986 987.606 629.781C987.373 630.576 987.828 631.409 988.623 631.642L1001.58 635.439ZM959.684 559.72L1000.68 634.72L1003.32 633.28L962.316 558.28L959.684 559.72Z"
        fill="#D5B6F1"
      />
      <path
        d="M961.061 393.939C960.475 393.354 959.525 393.354 958.939 393.939L949.393 403.485C948.808 404.071 948.808 405.021 949.393 405.607C949.979 406.192 950.929 406.192 951.515 405.607L960 397.121L968.485 405.607C969.071 406.192 970.021 406.192 970.607 405.607C971.192 405.021 971.192 404.071 970.607 403.485L961.061 393.939ZM961.5 559V395H958.5V559H961.5Z"
        fill="#D5B6F1"
      />
      <path
        d="M524.578 635.439C525.373 635.672 526.206 635.217 526.439 634.422L530.237 621.467C530.47 620.672 530.014 619.839 529.219 619.606C528.424 619.373 527.591 619.828 527.358 620.623L523.982 632.139L512.467 628.763C511.672 628.53 510.839 628.986 510.606 629.781C510.373 630.576 510.828 631.409 511.623 631.642L524.578 635.439ZM482.684 559.72L523.684 634.72L526.316 633.28L485.316 558.28L482.684 559.72Z"
        fill="#D5B6F1"
      />
      <path
        d="M484.061 393.939C483.475 393.354 482.525 393.354 481.939 393.939L472.393 403.485C471.808 404.071 471.808 405.021 472.393 405.607C472.979 406.192 473.929 406.192 474.515 405.607L483 397.121L491.485 405.607C492.071 406.192 493.021 406.192 493.607 405.607C494.192 405.021 494.192 404.071 493.607 403.485L484.061 393.939ZM484.5 559V395H481.5V559H484.5Z"
        fill="#D5B6F1"
      />
      <g filter="url(#filter8_d)">
        <path v-bind:d="rightDigit.path" fill="#B87FEC" />
      </g>
      <g filter="url(#filter9_d)">
        <path v-bind:d="middleDigit.path" fill="#B87FEC" />
      </g>
      <g filter="url(#filter10_d)">
        <path v-bind:d="leftDigit.path" fill="#B87FEC" />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="1601"
          y="75"
          width="250"
          height="84"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="1644.67"
          y="93.32"
          width="154.655"
          height="32.792"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d"
          x="685"
          y="879"
          width="558"
          height="135"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d"
          x="837.247"
          y="908.52"
          width="253.262"
          height="74.112"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d"
          x="177"
          y="269"
          width="1575"
          height="539"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d"
          x="1237"
          y="334"
          width="409"
          height="409"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d"
          x="760"
          y="334"
          width="409"
          height="409"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d"
          x="283"
          y="334"
          width="409"
          height="409"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d"
          x="1288.27"
          y="468.912"
          width="296.77"
          height="105.536"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d"
          x="811.268"
          y="468.912"
          width="296.77"
          height="105.536"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d"
          x="334.268"
          y="468.912"
          width="296.77"
          height="105.536"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Button } from './models';
import { startBtn, stopBtn } from './presets';
import { Digits, NumberOptions } from './digits';

export default class Clock extends Vue {
  private isRunning = false;
  private isHovered = false;
  mainBtn: Button = { ...startBtn };
  leftDigit = new Digits(NumberOptions.LEFT, 25, 99);
  middleDigit = new Digits(NumberOptions.MIDDLE, 25, 99);
  rightDigit = new Digits(NumberOptions.RIGHT, 25, 99);

  private applyStart(): void {
    this.mainBtn = { ...startBtn };
  }

  private applyStop(): void {
    this.mainBtn = { ...stopBtn };
  }

  onClick(): void {
    this.leftDigit.start();
    this.rightDigit.start();
    this.middleDigit.start();
    if (this.isRunning) {
      this.applyStart();
      this.isRunning = false;
    } else {
      this.applyStop();
      this.isRunning = true;
    }

    if (this.isHovered) {
      this.onMouseEnter();
    }
  }

  onMouseEnter(): void {
    this.mainBtn.color = this.mainBtn.hoverColor;
    this.isHovered = true;
  }

  onMouseLeave(): void {
    if (this.isRunning) {
      this.applyStop();
    } else {
      this.applyStart();
    }
    this.isHovered = false;
  }
}
</script>

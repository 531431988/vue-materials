<template>
  <div class="vui-loading">
    <div
      :class="`container animation-${i + 1}`"
      :key="i"
      v-for="(item, i) in element"
      v-if="(i + 1) === parseInt(type)"
    >
      <div :class="`shape shape${n + 1}`" :key="n" v-for="(child, n) in item"></div>
    </div>
    <div>{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: [Number, String],
      default: 4
    },
    text: {
      type: String,
      default: '玩命加载中'
    }
  },
  components: {

  },
  data () {
    return {
      element: new Array(6).fill(4)
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
//Colors Variables
$primary: #20a0ff; // blue
$success: #13c688; // green
$danger: #ed4014; // red
$warning: #ff8740; // yellow
$mainBgc: #03002e;
// Container and shapes dimentions
$containerDimentions: 30px;
$shapeDimentions: 10px;

// custom translation for each shape in an animation
@mixin customTranslate($shape, $tx, $ty) {
  @if $shape == 1 {
    transform: translate($tx, $ty);
  } @else if $shape == 2 {
    transform: translate(-$ty, $tx);
  } @else if $shape == 3 {
    transform: translate($ty, -$tx);
  } @else if $shape == 4 {
    transform: translate(-$tx, -$ty);
  }
}
.vui-loading {
  text-align: center;
  .container {
    text-align: center;
    width: $containerDimentions;
    height: $containerDimentions;
    margin: 0 auto 10px;
    position: relative;
    &.animation-1 {
      transform: rotate(45deg);
    }
    &.animation-2,
    &.animation-4 {
      transform: rotate(10deg);
      .shape {
        border-radius: $shapeDimentions/2;
      }
    }
    &.animation-2,
    &.animation-3,
    &.animation-4 {
      animation: rotation 2s infinite;
    }
    &.animation-3 {
      .shape1 {
        border-top-left-radius: $shapeDimentions;
      }
      .shape2 {
        border-top-right-radius: $shapeDimentions;
      }
      .shape3 {
        border-bottom-left-radius: $shapeDimentions;
      }
      .shape4 {
        border-bottom-right-radius: $shapeDimentions;
      }
    }
    &.animation-4,
    &.animation-5 {
      transform: rotate(45deg);
    }
    &.animation-5 {
      .shape {
        width: 15px;
        height: 15px;
      }
    }
    &.animation-6 {
      .shape {
        width: 12px;
        height: 12px;
        border-radius: 2px;
      }
      animation: rotation 1s infinite;
    }
    .shape {
      position: absolute;
      width: $shapeDimentions;
      height: $shapeDimentions;
      border-radius: 1px;
      &.shape1 {
        left: 0;
        background-color: $primary;
      }
      &.shape2 {
        right: 0;
        background-color: $success;
      }
      &.shape3 {
        bottom: 0;
        background-color: $warning;
      }
      &.shape4 {
        bottom: 0;
        right: 0;
        background-color: $danger;
      }
    }
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@for $i from 1 through 6 {
  @for $j from 1 through 4 {
    $duration: 0.5s;
    $timing: ease;
    $delay: 0s;
    $direction: alternate;

    $a: null;
    @if $i==1 {
      $a: 16px;
    } @else if $i==2 {
      $a: 20px;
    } @else if $i==3 {
      $a: 5px;
    } @else if $i==4 {
      $a: 5px;
      $duration: 0.3s;
      @if $j == 2 or $j == 3 {
        $delay: 0.3s;
      }
    } @else if $i==5 {
      $a: 15px;
      $duration: 2s;
      $direction: reverse;
    } @else if $i==6 {
      $a: 18px;
      $timing: linear;
      $duration: 2s;
      $direction: normal;
    }

    .animation-#{$i} {
      .shape#{$j} {
        animation: animation#{$i}shape#{$j}
          $duration
          $timing
          $delay
          infinite
          $direction;
      }
    }
    @if $i == 5 or $i == 6 {
      @keyframes animation#{$i}shape#{$j} {
        0% {
          transform: translate(0, 0);
        }
        25% {
          @include customTranslate($j, 0, $a);
        }
        50% {
          @include customTranslate($j, $a, $a);
        }
        75% {
          @include customTranslate($j, $a, 0);
        }
      }
    } @else {
      @keyframes animation#{$i}shape#{$j} {
        from {
          transform: translate(0, 0);
        }
        to {
          @include customTranslate($j, $a, $a);
        }
      }
    }
  }
}
</style>

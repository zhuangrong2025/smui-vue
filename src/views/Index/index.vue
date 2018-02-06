<template>
  <div>
    <div class="demo-container">
      <!--表单-->
      <h2 class="demo-title"><span>表单</span></h2>
      <div class="demo-components">
        <router-link :to="{path: '/button', query: {timestamp: Number(new Date())}}">
          <i class="button"></i>
          <p>button</p>
        </router-link>
        <router-link :to="{path: '/input', query: {timestamp: Number(new Date())}}">
          <i class="input"></i>
          <p>input</p>
        </router-link>
        <router-link :to="{path: '/cell', query: {timestamp: Number(new Date())}}">
          <i class="list"></i>
          <p>list</p>
        </router-link>
        <router-link :to="{path: '/buttonbar', query: {timestamp: Number(new Date())}}">
          <i class="buttonbar"></i>
          <p>buttonbar</p>
        </router-link>
        <router-link :to="{path: '/checkbox', query: {timestamp: Number(new Date())}}">
          <i class="checkbox"></i>
          <p>checkbox</p>
        </router-link>
        <router-link :to="{path: '/radio', query: {timestamp: Number(new Date())}}">
          <i class="radio"></i>
          <p>radio</p>
        </router-link>
        <router-link :to="{path: '/switch', query: {timestamp: Number(new Date())}}">
          <i class="switch"></i>
          <p>switch</p>
        </router-link>
        <router-link :to="{path: '/textarea', query: {timestamp: Number(new Date())}}">
          <i class="textarea"></i>
          <p>textarea</p>
        </router-link>
        <router-link :to="{path: '/select', query: {timestamp: Number(new Date())}}">
          <i class="select"></i>
          <p>select</p>
        </router-link>
      </div>
      <!--//表单-->
      <div class="demo-space"></div>
      <!--基础组件-->
      <h2 class="demo-title"><span>基础组件</span></h2>
      <div class="demo-components">
        <router-link :to="{path: '/panel', query: {timestamp: Number(new Date())}}">
          <i class="panel"></i>
          <p>panel</p>
        </router-link>
        <router-link :to="{path: '/article', query: {timestamp: Number(new Date())}}">
          <i class="article"></i>
          <p>article</p>
        </router-link>
        <router-link :to="{path: '/badge', query: {timestamp: Number(new Date())}}">
          <i class="badge"></i>
          <p>badge</p>
        </router-link>
        <router-link :to="{path: '/flex', query: {timestamp: Number(new Date())}}">
          <i class="flex"></i>
          <p>flex</p>
        </router-link>
        <router-link :to="{path: '/space', query: {timestamp: Number(new Date())}}">
          <i class="space"></i>
          <p>white space</p>
        </router-link>
        <router-link :to="{path: '/grid', query: {timestamp: Number(new Date())}}">
          <i class="grid"></i>
          <p>gird</p>
        </router-link>
        <router-link :to="{path: '/icon', query: {timestamp: Number(new Date())}}">
          <i class="icon"></i>
          <p>icon</p>
        </router-link>
      </div>
      <!--//基础组件-->
      <div class="demo-space"></div>
      <!--操作反馈-->
      <h2 class="demo-title"><span>操作反馈</span></h2>
      <div class="demo-components">
        <router-link :to="{path: '/actionsheet', query: {timestamp: Number(new Date())}}">
          <i class="actionsheet"></i>
          <p>actionsheet</p>
        </router-link>
        <router-link :to="{path: '/toast', query: {timestamp: Number(new Date())}}">
          <i class="toast"></i>
          <p>toast</p>
        </router-link>
        <router-link :to="{path: '/dialog', query: {timestamp: Number(new Date())}}">
          <i class="dialog"></i>
          <p>dialog</p>
        </router-link>
        <router-link :to="{path: '/toMessage', query: {timestamp: Number(new Date())}}">
          <i class="message"></i>
          <p>message</p>
        </router-link>
        <router-link :to="{path: '/picker', query: {timestamp: Number(new Date())}}">
          <i class="picker"></i>
          <p>picker</p>
        </router-link>
        <router-link :to="{path: '/datePicker', query: {timestamp: Number(new Date())}}">
          <i class="datePicker"></i>
          <p>datePicker</p>
        </router-link>
      </div>
      <!--//操作反馈-->
      <div class="demo-space"></div>
      <!--导航相关-->
      <h2 class="demo-title"><span>导航和搜索</span></h2>
      <div class="demo-components">
        <router-link :to="{path: '/navbar', query: {timestamp: Number(new Date())}}">
          <i class="navbar"></i>
          <p>navbar</p>
        </router-link>
        <router-link :to="{path: '/tabbar', query: {timestamp: Number(new Date())}}">
          <i class="tabbar"></i>
          <p>tabbar</p>
        </router-link>
        <router-link :to="{path: '/searchbar', query: {timestamp: Number(new Date())}}">
          <i class="searchbar"></i>
          <p>searchbar</p>
        </router-link>
        <router-link :to="{path: '/swiper', query: {timestamp: Number(new Date())}}">
          <i class="swiperx"></i>
          <p>swiper</p>
        </router-link>
      </div>
      <!--//导航相关-->
      <div class="demo-space"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>

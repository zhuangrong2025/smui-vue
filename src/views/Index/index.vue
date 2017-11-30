<template>
  <div>
    <div class="demo-container">
      <!--表单-->
      <h2 class="demo-title">表单</h2>
      <div class="demo-components">
        <router-link :to="{path: '/button', query: {timestamp: new Date()}}">
          <i class="button"></i>
          <p>button</p>
        </router-link>
        <router-link :to="{path: '/input', query: {timestamp: new Date()}}">
          <i class="input"></i>
          <p>input</p>
        </router-link>
        <router-link :to="{path: '/cell', query: {timestamp: new Date()}}">
          <i class="list"></i>
          <p>list</p>
        </router-link>
        <router-link :to="{path: '/checkbox', query: {timestamp: new Date()}}">
          <i class="checkbox"></i>
          <p>checkbox</p>
        </router-link>
        <router-link :to="{path: '/radio', query: {timestamp: new Date()}}">
          <i class="radio"></i>
          <p>radio</p>
        </router-link>
        <router-link :to="{path: '/switch', query: {timestamp: new Date()}}">
          <i class="switch"></i>
          <p>switch</p>
        </router-link>
        <router-link :to="{path: '/textarea', query: {timestamp: new Date()}}">
          <i class="textarea"></i>
          <p>textarea</p>
        </router-link>
        <router-link :to="{path: '/select', query: {timestamp: new Date()}}">
          <i class="select"></i>
          <p>select</p>
        </router-link>
      </div>
      <!--//表单-->
      <div class="demo-space"></div>
      <!--基础组件-->
      <h2 class="demo-title">基础组件</h2>
      <div class="demo-components">
        <router-link :to="{path: '/panel', query: {timestamp: new Date()}}">
          <i class="panel"></i>
          <p>panel</p>
        </router-link>
        <router-link :to="{path: '/article', query: {timestamp: new Date()}}">
          <i class="article"></i>
          <p>article</p>
        </router-link>
        <router-link :to="{path: '/badge', query: {timestamp: new Date()}}">
          <i class="badge"></i>
          <p>badge</p>
        </router-link>
        <router-link :to="{path: '/flex', query: {timestamp: new Date()}}">
          <i class="flex"></i>
          <p>flex</p>
        </router-link>
        <router-link :to="{path: '/space', query: {timestamp: new Date()}}">
          <i class="space"></i>
          <p>white space</p>
        </router-link>
        <router-link :to="{path: '/grid', query: {timestamp: new Date()}}">
          <i class="grid"></i>
          <p>gird</p>
        </router-link>
        <router-link :to="{path: '/icon', query: {timestamp: new Date()}}">
          <i class="icon"></i>
          <p>icon</p>
        </router-link>
      </div>
      <!--//基础组件-->
      <div class="demo-space"></div>
      <!--操作反馈-->
      <h2 class="demo-title">操作反馈</h2>
      <div class="demo-components">
        <router-link :to="{path: '/actionsheet', query: {timestamp: new Date()}}">
          <i class="actionsheet"></i>
          <p>actionsheet</p>
        </router-link>
        <router-link :to="{path: '/toast', query: {timestamp: new Date()}}">
          <i class="toast"></i>
          <p>toast</p>
        </router-link>
        <router-link :to="{path: '/dialog', query: {timestamp: new Date()}}">
          <i class="dialog"></i>
          <p>dialog</p>
        </router-link>
        <router-link :to="{path: '/toMessage', query: {timestamp: Number(new Date())}}">
          <i class="message"></i>
          <p>message</p>
        </router-link>
      </div>
      <!--//操作反馈-->
    </div>
    
    
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>

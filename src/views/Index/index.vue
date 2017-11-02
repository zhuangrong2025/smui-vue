<template>
  <div>
    <div class="demo-container">
      <!--表单-->
      <h2 class="demo-title">表单</h2>
      <div class="demo-components">
        <router-link to="button">
          <i class="button"></i>
          <p>button</p>
        </router-link>
        <router-link to="checkbox">
          <i class="checkbox"></i>
          <p>checkbox</p>
        </router-link>
        <router-link to="radio">
          <i class="radio"></i>
          <p>radio</p>
        </router-link>
        <router-link to="button">
          <i class="button"></i>
          <p>button</p>
        </router-link>
        <router-link to="input">
          <i class="input"></i>
          <p>input</p>
        </router-link>
        <router-link to="textarea">
          <i class="textarea"></i>
          <p>textarea</p>
        </router-link>
      </div>
      <!--//表单-->
      <div class="demo-space"></div>
      <!--列表-->
      <h2 class="demo-title">列表</h2>
      <div class="demo-components">
        <router-link :to="{name: 'cell', params:{ linkId: 'text'}}">
          <i class="cell-text"></i>
          <p>with text</p>
        </router-link>
        <router-link :to="{name: 'cell', params:{ linkId: 'text-icon'}}">
          <i class="cell-text-icon"></i>
          <p>with text-icon</p>
        </router-link>
        <router-link :to="{name: 'cell', params:{ linkId: 'link'}}">
          <i class="cell-link"></i>
          <p>with link</p>
        </router-link>
        <router-link :to="{name: 'cell', params:{ linkId: 'link-text'}}">
          <i class="cell-link-text"></i>
          <p>with link-text</p>
        </router-link>
        <router-link :to="{name: 'cell', params:{ linkId: 'link-text-icon'}}">
          <i class="cell-link-text-icon"></i>
          <p>with link-text-icon</p>
        </router-link>
      </div>
      <!--//列表-->
      
    </div>
    
    
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>

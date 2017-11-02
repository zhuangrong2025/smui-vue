<template>
 <div>
  <!--带说明的列表项-->
  <div class="sm-cells-title" id="text">带说明的列表项</div>
  <div class="sm-cells">
    <div class="sm-cell">
      <div>标题文字1</div>
      <span>说明文字</span>
    </div>
  </div>
  <!--带图标、说明的列表项-->
  <div class="sm-cells-title" id="text-icon">带图标、说明的列表项</div>
  <div class="sm-cells">
    <div class="sm-cell">
      <i class="smui-icon-safe-success"></i>
      <div>标题文字2</div>
      <span>说明文字</span>
    </div>
    <div class="sm-cell">
      <i class="smui-icon-waiting"></i>
      <div>标题文字2</div>
      <span>说明文字</span>
    </div>
  </div>
  
  <!--带跳转的列表项-->
  <div class="sm-cells-title" id="link">带跳转的列表项</div>
  <div class="sm-cells">
    <a href="javascript:;" class="sm-cell"> 
      <div>标题文字3</div>
      <span></span>
    </a>
    <a href="javascript:;" class="sm-cell"> 
      <div>标题文字3</div>
      <span></span>
    </a>
    </ul>
  </div>
  <!--带说明、跳转的列表项-->
  <div class="sm-cells-title" id="link-text">带说明、跳转的列表项</div>
  <div class="sm-cells">
    <a href="javascript:;" class="sm-cell">
      <div>标题文字4</div>
      <span>说明文字</span>
    </a>
    <a href="javascript:;" class="sm-cell">
      <div>标题文字4</div>
      <span>说明文字</span>
    </a>
  </div>
  <!--带图标、说明、跳转的列表项-->
  <div class="sm-cells-title" id="link-text-icon">带图标、说明、跳转的列表项</div>
  <div class="sm-cells">
    <a href="javascript:;" class="sm-cell">
      <i class="smui-icon-safe-success"></i>
      <div>标题文字5</div>
      <span>说明文字</span>
    </a>
    <a href="javascript:;" class="sm-cell">
      <i class="smui-icon-waiting"></i>
      <div>标题文字5</div>
      <span>说明文字</span>
    </a>
  </div>
  
</div>
</template>
<script>
export default {
  name: 'list',
  data(){
    return{
      linkId: this.$route.params.linkId
    }
  },
  mounted(){
    this.$nextTick(function () {
      var linkId = this.linkId
      $("#" + linkId).css({"color":"#4b8fff", "font-size": "16px", "font-weight": "bold" })
    })
  },
}
</script>
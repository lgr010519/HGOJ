<template>
  <div>
    <span>HGOJ Designed By Joe &copy; 2022</span>
    <span>湘ICP备19014665号</span>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
div{
  height: 35px;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #eee;
  background-color: #fff;
}
div span{
  position: fixed;
  font-size: 12px;
  color: #666;
}
div span:nth-child(1){
  bottom: 10px;
  left: 220px;
}
div span:nth-child(2){
  bottom: 10px;
  right: 10px;
}
</style>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  move()
})
var i = 0;
var width = 10;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var id = setInterval(frame, 20);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
} 
</script>

<template >
  <div class="loading-container">
    <div id="myProgress">
      <p id="loading">Loading...</p>
      <div id="myBar"></div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
.loading-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
}

#myProgress{
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1.0);
    outline: solid;
    width: 75vw;
    display: flex;
}

#loading{
  width: inherit;
  position: absolute;
  font-size: 1.5em;
  color: rgb(0, 0, 0);
}

#myBar {
    border-radius: 20px;
    height: 40px;
    background-color: #DF7A44; /* 50% opacity background only */
}

</style>
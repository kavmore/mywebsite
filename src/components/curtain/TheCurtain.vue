<template>
  <div class="background-container" :style="`background: url('${bgimg[activebg]}') no-repeat center/cover; `">

      <button class="arrow left-arrow" id="left" @click="toLeft">
        <i class="fa fa-arrow-left"></i>
      </button>
      <button class="arrow right-arrow" id="right" @click="toRight">
        <i class="fa fa-arrow-right"></i>
      </button>
 
    <div class="clock-container" >
      <div class="clock">
        <div class="needle hour" :style="hourStyle"></div>
        <div class="needle minute" :style="minuteStyle"></div>
        <div class="needle second" :style="secondStyle"></div>
        <div class="center-point" ></div>
      </div>
      <div class="time" :innerHTML="militaryTime"></div>
      <div class="date" :innerHTML="dates"></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bg1:require('@/assets/showcase-tesla.jpg'),
      bg2:require('@/assets/showcase-auroras.jpg'),
      bg3:require('@/assets/showcase-panther.jpg'),
      bg4:require('@/assets/showcase-coding.jpg'),
      bg5:require('@/assets/showcase-cottonbro.jpg'),
      activebg:1,
      days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      hourStyle:'',
      minuteStyle:'',
      secondStyle:'',
      militaryTime:'',
      dates:'',
      scale: function(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
    }
  },
  computed:{
    bgimg(){
      return [this.bg1,this.bg2,this.bg3,this.bg4,this.bg5];
    },
  },
  methods:{
    toLeft(){
      this.activebg--;
      if(this.activebg < 1){
        this.activebg = this.bgimg.length-1;
      }
    },
    toRight(){
      this.activebg++;
      if(this.activebg > this.bgimg.length-1){
        this.activebg = 0;
      }
    },
    setTime(){
      const time = new Date();
      const month = time.getMonth();
      const day = time.getDay();
      const date = time.getDate();
      const hours = time.getHours();
      const hoursForClock = hours % 12;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      this.hourStyle = `transform: translate(-50%, -100%) rotate(${this.scale(hoursForClock, 0, 11, 0, 360)}deg);`;
      this.minuteStyle = `transform: translate(-50%, -100%) rotate(${this.scale(minutes, 0, 59, 0, 360)}deg);`;
      this.secondStyle = `transform: translate(-50%, -100%) rotate(${this.scale(seconds, 0, 59, 0, 360)}deg);`;

      this.militaryTime = `${hours}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`;
      this.dates = `${this.days[day]}, ${this.months[month]} <span class="circle">${date}</span>`;
    },
  },
  mounted(){
    setInterval(() => {
      this.setTime();
    }, 1000);
    setInterval(() => {
      this.toRight();
    }, 5000);
  }
}
</script>

<style scoped>

.background-container {
  /* background: url('../../assets/showcase-tesla.jpg') no-repeat; */
  height: 95vh;
  position: relative;
  width: 100%;
  transition: 0.4s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* background-position: center center;
  background-size: cover; */
}


.background-container::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}


/* 钟 Clock*/
.clock-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.clock {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
}

.needle {
  background-color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform: bottom center;
  transition: all 0.5s ease;
}

.needle.hour {
  transform: translate(-50%, -100%) rotate(0deg);
  transform-origin: bottom right;
}

.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  transform-origin: bottom right;
}

.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  transform-origin: bottom right;
  background-color: #e74c3c;
}

.center-point {
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
}

.center-point::after {
  content: '';
  background-color: #000;
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
}

.time {
  font-size: 60px;
  color: #aaa;
}

.date {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.date .circle {
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  transition: all 0.5s ease-in;
  font-size: 12px;
}

.turning {
  transform: translate(-50%, -100%) rotate();
}

/* 左右按钮 */
.arrow {
  position: absolute;
  background-color: transparent;
  padding: 20px;
  color: #fff;
  font-size: 30px;
  border: 2px solid orange;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.arrow:focus {
  outline: 0;
}

.left-arrow {
  left: calc(15vw - 65px);
}

.right-arrow {
  right: calc(15vw - 65px);
}

button {
  z-index: 2;
}

</style>
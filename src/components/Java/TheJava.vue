<template>
    <nav class="navbar" id="sidebar-wrapper" :class="{active: toggle}" role="navigation">
        <div class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Lightweight Java Game Library <br>(轻量级JAVA游戏库)</a>
            <div class="dropdown-menu">
                <lwjgl-list v-for="lwjglItem in lwjglItems" :key="lwjglItem.id" :packageName="lwjglItem.packageName"></lwjgl-list>
            </div>
        </div>
    </nav>
    <button type="button" @click="toggleSide" :class="{active: toggle}">
        <div class="line line1"></div>
        <div class="line line2"></div>
    </button>

    <div class="container-xl">
        <table class="table table-bordered table-hover table-sm table-responsive-xl">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">类型</th>
                    <th scope="col">存储需求</th>
                    <th scope="col">取值范围</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>int</td>
                    <td>4字节</td>
                    <td>-2_147_483_648 ~ 2_147_483_647(刚刚超过20亿)</td>
                </tr>
                <tr>
                    <td>short</td>
                    <td>2字节</td>
                    <td>-32_768 ~ 32_767</td>
                </tr>
                <tr>
                    <td>long</td>
                    <td>8字节</td>
                    <td>-9_223_372_036_854_775_808 ~ 9_223_372_036_854_775_807</td>
                </tr>
                <tr>
                    <td>byte</td>
                    <td>1字节</td>
                    <td>-128 ~ 127</td>
                </tr>
            </tbody>
        </table>
        <p>
            int类型最常用，大数字用long类型，byte和short类型用于特定场景，如底层文件处理或存储空间很宝贵的大数组。<br>
            long类型数值有一个后缀L或l(如1000000L)。十六进制数值有个前缀0x或0X(如0xCAFE)。八进制有一个前缀0(如010对应十进制的8)，易混淆，不建议使用八进制。<br>
            从Java7开始，加上前缀0b或0B就可以写二进制数。如，0b1001就是9。还可以为数字字面量加下划线，如用1_000_000，只是为了易读性，Java编译器会去除这些下划线。
        </p>
        <table class="table table-bordered table-hover table-sm table-responsive-xl">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">类型</th>
                    <th scope="col">存储需求</th>
                    <th scope="col">取值范围</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>float</td>
                    <td>4字节</td>
                    <td>大约 正负3.402_823_47E+38F(有效位数为6~7位)</td>
                </tr>
                <tr>
                    <td>double</td>
                    <td>8字节</td>
                    <td>大约 正负1.797_693_134_862_315_70E+308(有效位数为15位)</td>
                </tr>
            </tbody>
        </table>
        <p>
            float类型的数值有一个后缀F或f(如，3.14F)。没有后缀的F的浮点数值(如3.14)总是默认为double类型。也可以在浮点数值后面添加后缀D或d(如，3.14D)。
        </p>
        <table class="table table-bordered table-hover table-sm table-responsive-xl">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">类型</th>
                    <th scope="col">存储需求</th>
                    <th scope="col">取值范围</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>int</td>
                    <td>4字节</td>
                    <td>-2_147_483_648 ~ 2_147_483_647(刚刚超过20亿)</td>
                </tr>
                <tr>
                    <td>short</td>
                    <td>2字节</td>
                    <td>-32_768 ~ 32_767</td>
                </tr>
                <tr>
                    <td>long</td>
                    <td>8字节</td>
                    <td>-9_223_372_036_854_775_808 ~ 9_223_372_036_854_775_807</td>
                </tr>
                <tr>
                    <td>byte</td>
                    <td>1字节</td>
                    <td>-128 ~ 127</td>
                </tr>
            </tbody>
        </table>
        <div class="bg-secondary">
            <p><strong>注释：</strong>从Java10开始，对于局部变量，如果可以从变量的初始值推断出它的类型，就不再需要声明类型。只需要使用关键字var而无须指定类型：</p>
            <pre>
            <code>var vacationDays = 12; //vacationDays is an int</code>
            <code>var greeting = "Hello"; //greeting is a String</code>
        </pre>
        </div>
        <p>关键字final表示这个变量只能被赋值一次。一旦被赋值之后，就不能够再更改了。习惯上，常量名使用全大写。</p>
        <p>在Java中，经常希望某个常量可以在一个类的多个方法中使用，通常将这些常量称为类常量。可以使用关键字static final设置一个类常量。</p>
        <div>
            <h6 class="font-weight-bold">枚举类型</h6>
            <p>
                有时候，变量的取值只在一个有限的集合内。例如，销售的服装或比萨只有小、中、大和超大这四种尺寸。<br>
                针对这种情况，可以自定义枚举类型。枚举类型包括有限个命名的值。例如，<br>
                <code>enum Size{ SMALL, MEDIUM, LARGE, EXTRA_LARGE};</code> <br>
                现在，可以声明这种类型的变量：
                <code>Size s = Size.MEDIUM;</code><br>
            </p>    
            <p>Size类型的变量只能存储这个类型声明中给定的某个枚举值，或者特殊值null</p>
    </div>
</div>
</template>

<script>
import lwjglList from './lwjglList.vue';

export default {
  components: { lwjglList },
  inject: ['lwjglItems'],
  data(){
      return{
          toggle: false
      }
  },
  methods:{
      toggleSide(){
          this.toggle = !this.toggle;
      }
  }
}
</script>

<style scoped>

#sidebar-wrapper {
  position: absolute;
  width: 300px;
  left: 0;
  top: 5vh;
  background-color: #2f2f2f;
  transform: translateX(-300px);
  transition: transform 0.5s ease;
}

#sidebar-wrapper.active {
    transform: translateX(0px);
    transition: transform 0.5s ease;
}

#sidebar-wrapper .dropdown > a:hover {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
  -webkit-transition: -webkit-transform 0.5s ease;
  transition: -webkit-transform 0.5s ease;
  transition: transform 0.5s ease;
  transition: transform 0.5s ease, -webkit-transform 0.5s ease;
}

#sidebar-wrapper a {
  color: #fff;
  display: block;
  text-decoration: none;
}

#sidebar-wrapper .dropdown-menu {
  background-color: #2f2f2f;
  padding: 10px;
}

#sidebar-wrapper .dropdown-menu a:hover {
  background-color: #fff;
  color: #000;
}

button {
    background-color: #2f2f2f;
    border: 0;
    cursor: pointer;
    padding: 0;
    position: absolute;
    height: 50px;
    width: 50px;
    transition: transform 0.5s ease;
}

button:focus {
    outline: 0;
}

.line {
    background-color: #5290f9;
    height: 2px;
    width: 25px;
    position: absolute;
    top: 33%;
    left: 20%;
}

.line1{
    transition: transform 0.5s linear;
}

.line2 {
    top: auto;
    bottom: 33%;
    transition: transform 0.5s linear;
}

button.active {
    transform: translateX(250px);
    transition: transform 0.5s ease;
}

button.active .line1 {
    transform: rotate(-45deg) translateX(-1.9px) translateY(9px);
    transition: transform 0.5s linear;
}

button.active .line2 {
    transform: rotate(45deg) translateX(-1.3px) translateY(-8px);
    transition: transform 0.5s linear;
}

code {
  color: #000;
}
</style>
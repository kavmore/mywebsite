<template>
    <div class="container-xl">
        <table class="table table-bordered table-hover table-sm ">
            <thead class="thead-dark">
                <tr>
                    <th>整型</th>
                    <th>描述</th>
                    <th>长度</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>short</td>
                    <td>16位</td>
                    <td>32767</td>
                </tr>
                <tr>
                    <td>int</td>
                    <td>16-32位</td>
                    <td>2147483647</td>
                </tr>
                <tr>
                    <td>long</td>
                    <td>32-64位</td>
                    <td>2147483647</td>
                </tr>
                <tr>
                    <td>long long</td>
                    <td>大于64位</td>
                    <td>9223372036854775807</td>
                </tr>
            </tbody>
        </table>
        <div>
            <h6 class="font-weight-bold">变量命名方案</h6>
            <p><code>nMyWeight</code> ==> n表示这是整数值</p>
            <p><code>(str/sz)MyWeight</code> ==> str/sz表示这是空字符结束的字符串</p>
            <p><code>bMyWeight</code> ==> b表示这是布尔值</p>
            <p><code>pMyWeight</code> ==> p表示指针</p>
            <p><code>cMyWeight</code> ==> c表示单个字符</p>
        </div>
        <div>
            <h6 class="font-weight-bold">指针和自由存储空间</h6>
            <p>指针是一个变量，其存储的是值的地址，而不是值本身。只需对变量应用地址运算符(&amp;),就可以获得它的位置；例如：如果home是一个变量，则&amp;home是它的地址。</p>
            <h6 class="font-weight-bold">程序清单</h6>
            <pre><code>
                    #include &lt;iostream&gt;
                    int main(){
                        using namespace std;
                        int donuts = 6;
                        double cups = 4.5;

                        cout &lt;&lt; "donuts value = " &lt;&lt; donuts;
                        cout &lt;&lt; " and donuts address = " &lt;&lt; &amp;donuts &lt;&lt; endl;
                        cout &lt;&lt; "cups value = " &lt;&lt; cups;
                        cout &lt;&lt; " and cups address = " &lt;&lt; &amp;cups &lt;&lt; endl;
                        return 0;
                    }
            </code></pre>
            <p>可能输出为:<br/>
                <code>donuts value = 6 and donuts address = 0x0065fd40</code><br/>
                <code>cups value = 4.5 and cups address = 0x0065fd44</code>
            </p>
            <p>显示地址时，该实现的cout使用十六进制表示法，因为这是常用于描述内存的表示法(有些实现可能使用十进制表示法)。
                在该实现中，donuts的存储位置比cups要低。两个地址的差为0x0065fd44-0x0065fd40(即4)。这是有意义的，
                因为donuts的类型为int，而这种类型使用4哥字节。当然，不同系统给定的地址值可能不同。有些系统可能先存储cups，
                再存储donuts，这样两个地址值的差将为8个字节，因为cups的类型为double。另外，在有些系统中，可能不会将这两个变量存储在相邻的内存单元中。</p>
        </div>

    </div>
</template>

<style scoped>
code {
    color: #000;
}

table {
    display: inline;
}

div {
    border-top: 2px solid black;
}
</style>
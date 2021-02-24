<template>
    <div class="container-xl">
        <h5 class="font-weight-bold">矩阵</h5>
        <p>一个r X c矩阵 表示有r行 c列</p>
        <pre>
              ——            —— 
              | M<sub>11</sub>  M<sub>12</sub>  M<sub>13</sub> |    
         M=   | M<sub>21</sub>  M<sub>22</sub>  M<sub>23</sub> |  
              | M<sub>31</sub>  M<sub>32</sub>  M<sub>33</sub> |      
              ——            ——      
        </pre>
        <p>
            方阵：行数和列数相同的矩阵。<br/>
            方阵的对角线元素：是方阵中行号和列号相同的元素<br/>
            对角矩阵：一个矩阵所有非对角线元素都为0 <br/>
            单位矩阵：一种特殊的对角矩阵，即对角线元素为1，其他为0的矩阵<br/>
            任何一个矩阵乘以单位矩阵都将得到原矩阵。
        </p>
        <pre>
            ——       ——  
            | 1  0  0 |    
            | 0  1  0 |   
            | 0  0  1 |  
            ——       —— 
        </pre>
        <p>一个向量也可以看做一个矩阵，行向量就是1Xn的矩阵 M=[m1,m2,m3,m4....]</p>
        <pre>
              —    —
              | M<sub>1</sub> |    
         M=   | M<sub>2</sub> |  
              | M<sub>3</sub> |      
              | M<sub>4</sub> |  
              —    —  
        </pre>
        <p>转置：就是将矩阵的行向量变成列向量，将列向量变成行向量。</p>
        <pre>
            ——       ——       ——        ——
            | a  b  c |       |  a  d  g |
            | d  e  f |   =   |  b  e  h |
            | g  h  i |       |  c  f  i |
            ——       ——       ——        ——
        </pre>
        <p>矩阵相乘：并不是所有的矩阵相乘都有意义。</p>
        <p>rXn矩阵A能够乘以一个nXc矩阵B，结果为一个rXc矩阵。</p>
        <p>A矩阵的列数和B的行数必须相等。否则AB无意义</p>
        <p>AB矩阵中任意元素'ij'等于A的第i行向量与B的第j列向量的点乘值。</p>
        <pre>
            ——       ——        ——                   ——       ——
            | a<sub>11</sub>  a<sub>12</sub> |       |  b<sub>11</sub>  b<sub>12</sub>  b<sub>13</sub> b<sub>14</sub> b<sub>15</sub>|       | a<sub>11</sub>b<sub>11</sub>+a<sub>12</sub>b<sub>21</sub>  a<sub>11</sub>b<sub>12</sub>+a<sub>12</sub>b<sub>22</sub>  a<sub>11</sub>b<sub>13</sub>+a<sub>12</sub>b<sub>23</sub> a<sub>11</sub>b<sub>14</sub>+a<sub>12</sub>b<sub>24</sub> a<sub>11</sub>b<sub>15</sub>+a<sub>12</sub>b<sub>25</sub>
            | a<sub>21</sub>  a<sub>22</sub> |   *   |  b<sub>21</sub>  b<sub>22</sub>  b<sub>23</sub> b<sub>24</sub> b<sub>25</sub>|  =    | a<sub>21</sub>b<sub>11</sub>+a<sub>22</sub>b<sub>21</sub>  a<sub>21</sub>b<sub>12</sub>+a<sub>21</sub>b<sub>22</sub>
            | a<sub>31</sub>  a<sub>32</sub> |       ——                   ——       | a<sub>31</sub>b<sub>11</sub>+a<sub>32</sub>b<sub>21</sub>  a<sub>31</sub>b<sub>12</sub>+a<sub>32</sub>b<sub>22</sub>
            | a<sub>41</sub>  a<sub>42</sub> |                                     | a<sub>41</sub>b<sub>11</sub>+a<sub>42</sub>b<sub>21</sub>  a<sub>41</sub>b<sub>12</sub>+a<sub>42</sub>b<sub>22</sub>
            ——       ——                                      ——
        </pre>
    </div>
</template>
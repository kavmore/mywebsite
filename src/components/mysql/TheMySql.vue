<template>
    <div id="sql">
        <div class="container-xl">
            <div class="card table-responsive-xl">
            <table class="table table-bordered table-hover table-sm ">
                <thead class="thead-dark">
                <tr>
                    <th>字符串文本类型</th>
                    <th>描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CHAR(size)</td>
                    <td>保存固定长度的字符串(可包含字母、数字以及特殊字符)，()内指定字符串长度，最多255个字符。</td>
                </tr>
                <tr>
                    <td>VARCHAR(size)</td>
                    <td>
                    保存可变长度的字符串(可包含字母、数字以及特殊字符)，()内指定字符串最大长度，最多255个字符。<br>
                    注释：如果值的长度大于255，则被转换成TEXT类型。
                    </td>
                </tr>
                <tr>
                    <td>TINYTEXT</td>
                    <td>存放最大长度为255个字符的字符串。</td>
                </tr>
                <tr>
                    <td>TEXT</td>
                    <td>存放最大长度为65,535个字符的字符串。</td>
                </tr>
                <tr>
                    <td>BLOB</td>
                    <td>用于BLOBs(Binary Large Objects)。存放最多65,535字节的数据。</td>
                </tr>
                <tr>
                    <td>MEDIUMTEXT</td>
                    <td>存放最大长度为16,777,215个字符的字符串。</td>
                </tr>
                <tr>
                    <td>MEDIUMBLOB</td>
                    <td>用于BLOBs(Binary Large Objects)。存放最多16,777,215字节的数据。</td>
                </tr>
                <tr>
                    <td>LONGTEXT</td>
                    <td>存放最大长度4,294,967,295个字符的字符串。</td>
                </tr>
                <tr>
                    <td>LONGBLOB</td>
                    <td>用于BLOBs(Binary Large Objects)。存放最多4,294,967,295字节的数据。</td>
                </tr>
                <tr>
                    <td>ENUM(x,y,z,etc.)</td>
                    <td>允许你输入可能值的列表。可以在ENUM列表中列出最大65,535个值。如果列表中不存在插入的值，则插入空值。</td>
                </tr>
                <tr>
                    <td>SET</td>
                    <td>与ENUM类似，SET最多只能包含64个列表项，不过SET可存储一个以上的值。</td>
                </tr>
                </tbody>
            </table>
            <i class="fa fa-angle-double-right fa-lg"></i>
            </div>
            
            <div class="card">
            <table class="table table-bordered table-hover table-sm table-responsive-xl">
                <thead class="thead-dark">
                <tr>
                    <th>日期数据类型</th>
                    <th>描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>DATE()</td>
                    <td>日期。格式:YYYY-MM-DD <br>
                    注释：支持的范围从'1000-01-01'到'9999-12-31'
                    </td>
                </tr>
                <tr>
                    <td>DATETIME()</td>
                    <td>*日期和时间的组合。格式：YYYY-MM-DD HH:MM:SS <br>
                    注释：支持的范围从'1000-01-01 00:00:00'到'9999-12-31 23:59:59'
                    </td>
                </tr>
                <tr>
                    <td>TIMESTAMP()</td>
                    <td>*时间戳。TIMESTAMP值使用Unix纪元('1970-01-01 00:00:00' UTC)至今的描述来存储。格式:YYYY-MM-DD HH:MM:SS
                    <br>
                    注释:支持的范围从'1970-01-01 00:00:01'UTC到'2038-01-09 03:14:07'UTC
                    </td>
                </tr>
                <tr>
                    <td>TIME()</td>
                    <td>时间。格式:HH:MM:SS 注释：支持的范围从'-838:59:59'到'838:59:59'</td>
                </tr>
                <tr>
                    <td>YEAR()</td>
                    <td>2位或4位格式的年 <br>
                    注释：4位格式所允许的值：1901到2155。2位格式所允许的值：1970到2069.
                    </td>
                </tr>
                </tbody>
            </table>
            <i class="fa fa-angle-double-right fa-lg"></i>
            </div>
            <div class="card">
            <table class="table table-bordered table-hover table-sm table-responsive-xl">
                <thead class="thead-dark">
                <tr>
                    <th>数字数据类型</th>
                    <th>描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>TINYINT(size)</td>
                    <td>-128到127常规。0到255无符号*。在括号中规定最大位数。</td>
                </tr>
                <tr>
                    <td>SMALLINT(size)</td>
                    <td>-32768到32767常规。0到65,535无符号*。在括号中规定最大位数。</td>
                </tr>
                <tr>
                    <td>MEDIUMINT(size)</td>
                    <td>-8,388,608到8,388,607普通。0 to 16777215无符号*。在括号中规定最大位数。</td>
                </tr>
                <tr>
                    <td>INT(size)</td>
                    <td>-2,147,483,648到2,147,483,647常规。0到4294967295无符号*。在括号中规定最大位数。</td>
                </tr>
                <tr>
                    <td>BIGINT(size)</td>
                    <td>-9,223,372,036,854,775,808到9,223,372,036,854,775,807常规.0到1,844,674,407,370,955,165无符号*。在括号中规定最大位数。
                    </td>
                </tr>
                <tr>
                    <td>FLOAT(size,d)</td>
                    <td>带有浮动小数点的小数字。在括号中规定最大位数。在 d 参数中规定小数点右侧的最大位数。</td>
                </tr>
                <tr>
                    <td>DOUBLE(size,d)</td>
                    <td>带有浮动小数点的小数字。在括号中规定最大位数。在 d 参数中规定小数点右侧的最大位数。</td>
                </tr>
                <tr>
                    <td>DECIMAL(size,d)</td>
                    <td>作为字符串存储的DOUBLE类型，允许固定的小数点</td>
                </tr>
                </tbody>
            </table>
            <i class="fa fa-angle-double-right fa-lg"></i>
            </div>

            <base-card v-for="sql in sqls" :key="sql.id" :title="sql.title" :sqlCode="sql.sqlCode"></base-card>

            <div class="card">
            <h6>选择名字和出生日列，默认按照升序排列。</h6>
            <pre>
                <code class="code">mysql> SELECT name, birth FROM pet ORDER BY birth;</code>
                <code class="code">mysql> SELECT name, birth FROM pet WHERE MONTH(birth) = MOD(MONTH(CURDATE()), 12) + 1;</code>
            </pre>
            </div>

            <div class="card">
            <h6>查找以b开头的名字</h6>
            <pre>
                <code class="code">mysql> SELECT * FROM pet WHERE name LIKE 'b%';</code>
                <code class="code">mysql> SELECT * FROM pet WHERE REGEXP_LIKE(name,'^b')</code>
            </pre>
            </div>
            <div class="card">
            <h6>查找以fy结尾的名称</h6>
            <pre>
                <code class="code">mysql> SELECT * FROM pet WHERE name LIKE '%fy';</code>
                <code class="code">mysql> SELECT * FROM pet WHERE REGEXP_LIKE(name,'fy$')</code>
            </pre>
            </div>
            <div class="card">
            <h6>查找包含w的名称</h6>
            <pre>
                <code class="code">mysql> SELECT * FROM pet WHERE name LIKE '%w%';</code>
                <code class="code">mysql> SELECT * FROM pet WHERE REGEXP_LIKE(name,'w')</code>
            </pre>
            </div>
            <div class="card">
            <h6>查找正好包含五个字符的名字</h6>
            <pre>
                <code class="code">mysql> SELECT * FROM pet WHERE name LIKE '_____'</code>
                <code class="code">mysql> SELECT * FROM pet WHERE REGEXP_LIKE(name,'^.....$')</code>
                <code class="code">mysql> SELECT * FROM pet WHERE REGEXP_LIKE(name,'^{5}$')</code>
            </pre>
            </div>
        </div>
    </div>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
  components: { BaseCard },
  data(){
      return {
          sqls:[
              { id:'sql1', title:'创建数据库', sqlCode:'mysql> CREATE DATABASE menagerie;'},
              { id:'sql2', title:'访问此数据库', sqlCode:'mysql> USE menagerie;'},
              { id:'sql3', title:'查看当前选择的数据库', sqlCode:'mysql> SELECT DATABASE();'},
              { id:'sql4', title:'查看数据库内的所有表', sqlCode:'mysql> SHOW TABLES;'},
              { id:'sql5', title:'查询服务器中当前存在哪些数据库', sqlCode:'mysql> SHOW DATABASES;'},
              { id:'sql6', title:'创建数据表', sqlCode:'mysql> CREATE TABLE pet(name VARCHAR(20), owner VARCHAR(20),species VARCHAR(20), sex CHAR(1), birth DATE, death DATE)'},
              { id:'sql7', title:'显示数据表的结构', sqlCode:'mysql> DESCRIBE pet;'},
              { id:'sql8', title:'一次添加一条新记录', sqlCode:"mysql> INSERT INTO pet VALUES('Puffball','Diane','hamster','f','1999-03-30',NULL);"},
              { id:'sql9', title:'批量加载数据入表中', sqlCode:"mysql> LOAD DATA LOCAL INFILE '/path/pet.txt' INTO TABLE pet;"},
              { id:'sql10', title:'批量加载数据入表中,如果是用(\r\n)作为回车符', sqlCode:"mysql> LOAD DATA LOCAL INFILE '/path/pet.txt' INTO TABLE pet LINES TERMINATED BY '\r\n';"},
              { id:'sql11', title:'从表中检索所有内容', sqlCode:"SELECT * FROM pet;"},
              { id:'sql12', title:'修改数据表中的数据', sqlCode:"mysql> UPDATE pet SET birth = '1989-08-31' WHERE name = 'Bowser';"},
              { id:'sql13', title:'选择特定的行', sqlCode:"mysql> SELECT * FROM pet WHERE name = 'Bowser';"},
              { id:'sql14', title:'选择1998年或之后出现的动物', sqlCode:"mysql> SELECT * FROM pet WHERE birth >= '1998-1-1';"},
              { id:'sql15', title:'使用(AND)组合条件，查找雌狗', sqlCode:"mysql> SELECT * FROM pet WHERE species = 'dog' AND sex = 'f';"},
              { id:'sql16', title:'使用(OR)组合条件，查找蛇和鸟', sqlCode:"mysql> SELECT * FROM pet WHERE species = 'snake' OR species = 'bird';"},
              { id:'sql17', title:'AND并且 OR可以混合使用。同时使用这两个运算符，则最好使用括号来明确指示应如何对条件进行分组。寻找公猫和母狗。', sqlCode:"mysql> SELECT * FROM pet WHERE (species = 'cat' AND sex = 'm') OR (species = 'dog' AND sex = 'f');"},
              { id:'sql18', title:'选择特定的列。用逗号分隔感兴趣的列名', sqlCode:"mysql> SELECT name, birth FROM pet;"},
              { id:'sql19', title:'选择owner列所有名字。owner名字即使有重复也只输出一次。', sqlCode:"mysql> SELECT DISTINCT owner FROM pet;"},
              { id:'sql20', title:'选择名字和出生日列，若要按照降序排列。', sqlCode:"mysql> SELECT name, birth FROM pet ORDER BY birth DESC;"},
              { id:'sql21', title:'选择名字、物种和出生日列。名字和物种默认升序排列，只有出生日会降序排列。(DESC)关键字只影响紧跟前方的birth', sqlCode:"mysql> SELECT name, species, birth FROM pet ORDER BY species, birth DESC;"},
              { id:'sql22', title:'选择名字、出生日、当前时间和出生到当前时间之间的年差值并放入age列。', sqlCode:"mysql> SELECT name, birth, CURDATE(), TIMESTAMPDIFF(YEAR,birth,CURDATE()) AS age FROM pet;"},
              { id:'sql23', title:'选择名字、出生日、死亡日和出生到死亡日期的年差值并放入age列，条件为已死亡，并按照年龄升序排列。', sqlCode:"mysql> SELECT name, birth, death, TIMESTAMPDIFF(YEAR,birth,death) AS age FROM pet WHERE death IS NOT NULL ORDER BY age;"},
              { id:'sql24', title:'选择名字、出生日和出生日的月份。', sqlCode:"mysql> SELECT name, birth, MONTH(birth) FROM pet;"},
              { id:'sql25', title:'选择名字、出生日，条件为出生日月份为5月的动物。', sqlCode:"mysql> SELECT name, birth FROM pet WHERE MONTH(birth) = 5;"},
              { id:'sql26', title:"处理月份计算问题 十二月份加一不等于一月 DATE_ADD(CURDATE(),INTERVAL 1 MONTH)添加时间间隔到当前时间 以当前时间+1下个月内所有日期为条件检索。", sqlCode:"mysql> SELECT name, birth FROM pet WHERE MONTH(birth) = MONTH(DATE_ADD(CURDATE(),INTERVAL 1 MONTH));"},
              { id:'sql27', title:'选择名字、出生日和出生日的月份。', sqlCode:"mysql> SELECT name, birth FROM pet ORDER BY birth;"},
              { id:'sql28', title:'清空pet表。', sqlCode:"mysql> DELETE FROM pet;"},
              { id:'sql29', title:'删除pet表中名字为John的数据行。', sqlCode:"mysql> DELETE FROM pet WHERE name = 'John';"},
          ]
      }
  }
}
</script>

<style scoped>
#sql {
    background: linear-gradient(#000, #fff);
}
</style>
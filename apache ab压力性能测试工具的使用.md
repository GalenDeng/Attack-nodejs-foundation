# apache ab性能测试工具的介绍与使用方法 (2017.09.20)
## ab是apache自带的一个很好用的压力测试工具，当安装完apache的时候，就可以在bin下面找到ab
 
1. 我们可以模拟100个并发用户，对一个页面发送1000个请求
./ab -n1000 -c100 http://www.baidu.com
其中-n代表请求数，-c代表并发数

```
返回结果:
##首先是apache的版本信息 
This is ApacheBench, Version 2.3 <$Revision: 655654 $> 
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/ 
Licensed to The Apache Software Foundation, http://www.apache.org/
Benchmarking vm1.jianfeng.com (be patient)

Server Software:        Apache/2.2.19    ##apache版本 
Server Hostname:        vm1.jianfeng.com   ##请求的机子 
Server Port:            80 ##请求端口
Document Path:          /a.html 
Document Length:        25 bytes  ##页面长度
Concurrency Level:      100  ##并发数 
Time taken for tests:   0.273 seconds  ##共使用了多少时间 
Complete requests:      1000   ##请求数 
Failed requests:        0   ##失败请求 
Write errors:           0   
Total transferred:      275000 bytes  ##总共传输字节数，包含http的头信息等 
HTML transferred:       25000 bytes  ##html字节数，实际的页面传递字节数 
Requests per second:    3661.60 [#/sec] (mean)  ##每秒多少请求，这个是非常重要的参数数值，服务器的吞吐量 
Time per request:       27.310 [ms] (mean)  ##用户平均请求等待时间 
Time per request:       0.273 [ms] (mean, across all concurrent requests)  ##服务器平均处理时间，也就是服务器吞吐量的倒数 
Transfer rate:          983.34 [Kbytes/sec] received  ##每秒获取的数据长度
Connection Times (ms) 
              min  mean[+/-sd] median   max 
Connect:        0    1   2.3      0      16 
Processing:     6   25   3.2     25      32 
Waiting:        5   24   3.2     25      32 
Total:          6   25   4.0     25      48
Percentage of the requests served within a certain time (ms) 
  50%     25  ## 50%的请求在25ms内返回 
  66%     26  ## 60%的请求在26ms内返回 
  75%     26 
  80%     26 
  90%     27 
  95%     31 
  98%     38 
  99%     43 
100%     48 (longest request)
``` 
 
 
2. ab也可以运行在windows中，如果在windows下安装apache,就可以在bin下找到ab.exe
直接就可以使用，不用依赖其他的dll
下面是我使用ab.exe 测试新浪一个页面的结果：
``` 
C:\Users\nickyjf\Desktop\useful>ab -n1000 -c100 http://sports.sina.com.cn/k/2011-05-24/12095590365.shtml 
This is ApacheBench, Version 2.3 <$Revision: 655654 $> 
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/ 
Licensed to The Apache Software Foundation, http://www.apache.org/
Benchmarking sports.sina.com.cn (be patient) 
Completed 100 requests 
Completed 200 requests 
Completed 300 requests 
Completed 400 requests 
Completed 500 requests 
Completed 600 requests 
Completed 700 requests 
Completed 800 requests 
Completed 900 requests 
Completed 1000 requests 
Finished 1000 requests

Server Software:        Apache/2.0.63 
Server Hostname:        sports.sina.com.cn 
Server Port:            80
Document Path:          /k/2011-05-24/12095590365.shtml 
Document Length:        86680 bytes
Concurrency Level:      100 
Time taken for tests:   66.453 seconds 
Complete requests:      1000 
Failed requests:        0 
Write errors:           0 
Total transferred:      87135790 bytes 
HTML transferred:       86680000 bytes 
Requests per second:    15.05 [#/sec] (mean) 
Time per request:       6645.294 [ms] (mean) 
Time per request:       66.453 [ms] (mean, across all concurrent requests) 
Transfer rate:          1280.51 [Kbytes/sec] received
Connection Times (ms) 
              min  mean[+/-sd] median   max 
Connect:        1   56 398.3      2    3003 
Processing:    89 6331 2603.7   6293   14626 
Waiting:        2 1748 1485.9   1590    6284 
Total:         90 6388 2615.0   6302   14627
Percentage of the requests served within a certain time (ms) 
  50%   6302 
  66%   7121 
  75%   8435 
  80%   9193 
  90%   9231 
  95%   9385 
  98%  11549 
  99%  12459 
100%  14627 (longest request)
```
3. 先启动要测试的js的程序，如： node http.js
4. 在windows下安装apache服务器，新建一个windows命令行
   窗口，cd进入到apache安装目录的bin的目录中
5.  在windows下执行:
`ab.exe -n1000 -c10 http://localhost:8888/`
```
-n: 请求总数
-c: 并发数
8888后的/一定要加上
```
`result:`
```
D:\Program Files\Apache Software Foundation\Apache2.2\bin>ab.exe -n1000 -c
p://localhost:8888/
This is ApacheBench, Version 2.3 <$Revision: 655654 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:
Server Hostname:        localhost
Server Port:            8888

Document Path:          /
Document Length:        15 bytes

Concurrency Level:      10
Time taken for tests:   0.292 seconds
Complete requests:      1000
Failed requests:        0
Write errors:           0
Total transferred:      116000 bytes
HTML transferred:       15000 bytes
Requests per second:    3424.46 [#/sec] (mean)
Time per request:       2.920 [ms] (mean)
Time per request:       0.292 [ms] (mean, across all concurrent requests)
Transfer rate:          387.93 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       1
Processing:     1    3   2.6      2      24
Waiting:        1    3   2.5      2      24
Total:          1    3   2.6      2      24

Percentage of the requests served within a certain time (ms)
  50%      2
  66%      3
  75%      3
  80%      3
  90%      5
  95%      6
  98%     13
  99%     18
 100%     24 (longest request)

D:\Program Files\Apache Software Foundation\Apache2.2\bin>
```
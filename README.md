# mock平台后台
## 基本功能
* 注册用户
* 创建项目
* 定义接口：url+response body

# 服务部署
## 开启纯净容器
docker run -it  -p 22080:80 -p 22020-22023:20-23 -p 22306:3306 --name   22.afreeca.jd.com         /bin/bash

## 打开宿主机器端口
```
vi /etc/sysconfig/iptables
-A INPUT -p tcp -m state --state NEW -m tcp --dport 22080 -j ACCEPT
-A INPUT -p tcp -m state --state NEW -m tcp --dport 22020:22023 -j ACCEPT
-A INPUT -p tcp -m state --state NEW -m tcp --dport 22306 -j ACCEPT
```

重启iptables
```
service iptables status    #查看iptables状态
service iptables restart   #iptables服务重启
service iptables stop      #iptables服务禁用
```

## 设置docker宿主机器nginx代理
``` nginx
server {
    listen       80;
    server_name  afreeca.jd.com;
    location / {
        proxy_pass       http://127.0.0.1:22080;
        proxy_redirect   off;
        proxy_set_header Host    $host;
        proxy_set_header X-Forwarded-For $remote_addr;
    }
}
```
并重启nginx：`nginx -s reload`
## 安装mysql、redis、pm2
配置：/etc/mysql/my.cnf里保证mysqld,mysql_safe,client的.sock、.pid文件存放位置存在
启动：mysqld_safe &
停止：mysqladmin shutdown -p
远程访问 1)my.cnf bind-address=0.0.0.0  2) user表 localhost -> %
## 部署node服务
## 启动node

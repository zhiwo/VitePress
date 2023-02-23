# docker 镜像命令

### 下载镜像
```
docker pull <package_name>:<version>

例： sudo docker pull ultralytics/yolov5:latest
注：windows下不需要加sudo
```
### 查看已有镜像
```
docker images
````
### 创建容器
```
docker run -it -d --name <容器名字> <镜像名字> /bin/bash
docker run --name <容器名字> --ipc=host -it -v <挂载本地盘路径>:<镜像目录> <package_name>:<version>

例：
//创建容器并启动
docker run -it -d --name redis001 redis:5.0.5 /bin/bash

创建容器并挂载本地目录
docker run --name yolo --ipc=host -it -v /D/work/python/docker/coco:/usr/src/coco ultralytics/yolov5:latest

创建容器并映射服务端口
docker run --name yolo -p 8082:8082 --ipc=host -it -v /D/work/python/docker/coco:/usr/src/coco ultralytics/yolov5:latest

创建容器并启动python项目
docker run --name yolove-2 --restart=always -p 8083:8083 --ipc=host -it -v /D/work/python/docker/yolov5:/usr/src/coco ultralytics/yolov5:v6.2 /bin/bash -C 'cd ../coco/ && python test222.py'
注：
   --name yolo：容器名字
   -v：挂载目录，: 前指的是本机本地路径，: 后指的是镜像内挂载的路径(项目所在目录)，本地路径是绝对路径
   -p: 端口映射，: 前是本机(项目服务)端口 : 容器端口 ，项目端口需要和容器端口一致
   -d：后台运行
   -it：交互模式
   --restart=always 重启
   -C：自动启动服务
```
### 查看运行的容器
```
docker ps -a
```
### 查看容器中文件
```
cat 文件名
例：cat mytest.py
```
### 停止运行的容器
```
docker stop <容器名>
```
### 重启已停止容器
```
docker start <容器ID>/<容器名字>
```
### 进入已存在容器
```
docker exec -it <容器ID> /bin/bash
例：docker exec -it 52b5acad360b /bin/bash
```
### 更改容器为自启动
```
docker update --restart=always <容器名>/<容器ID>
例：将redis设为自启动
    docker update --restart=always redis  
```

## docker离线镜像打包步骤
### 利用dockfile打镜像
```
   FROM tdkj/yolov5:latest
   WORKDIR /usr/src/app
   EXPOSE 8083
   CMD python detection.py

注：最后一步是要自动执行某个文件
文件名字：Dockerfile
```
### 把存在的容器打包成本地镜像
```
docker commit <容器ID> <镜像名称>
例： docker commit 3ab702ee5834 tdkj-yolov5  ---镜像名称自定义
```
### 保存镜像到本地
```
docker save -o <本地路径> <镜像名字>
例：
  docker save -o /root/mhn/yolov5.tar  ultralytics/yolov5
或
  docker save -o  D:/root/yolov5.tar  mhn --镜像名字是第一步自定义的镜像名称
```
### 导入本地保存的新镜像
```
docker load -i <已保存的新镜像>
例：docker load -i  D:/op/docker/yolo.tar
```
### 启动新镜像
```
docker run --name <自定义镜像名字> -p <项目端口>:<容器端口> <新镜像名字>
例： docker run --name localtest -p 8084:8084 tdkj-yolov5:latest
```
### 容器中创建目录
```
docker exec <容器ID> mkdir <目录名>
例：docker exec demo mkdir /code
```
### 查看目录下文件
```
ls
ls -alh ：查看当前目录详细信息
```
### 查看docker信息
```
docker inspect <容器ID>
```
### docker 内文件重命名
```
mv <文件名> <文件重命名后>
mv template templates
```
### 文件复制
```
   docker cp <容器ID>:<容器中文件路径> <本地路径>
或 
   cp <容器中文件路径> <容器中目标文件路径>
或
   docker cp <本地文件绝对路径> <容器ID>:<容器目录路径>

例： docker cp 52b5acad360b:/usr/src/app/app.py D:/python
注：第二种是已经进入容器中：
    如：root@3ab702ee5834:/usr/src/coco# cp -rf ./weights ../app
    ./：标识当前目录
    ../:上一级目录
    第三种：本地文件复制到容器中，容器路径记得加斜杠，如果容器已存在相同的则覆盖相同文件
    docker cp D:/python/master.py 52b5acad360b:/usr/src/app/     
```
### 退出镜像
```
exit
查看文件：vim demo.py 
键盘：i 标识插入
退出保存：esc :w
退出vim: esc :q
```




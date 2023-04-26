# 本地项目上传git仓库
### Git 全局设置
```
git config --global user.name 'XXXX'
git config --global user.email 'xxx'
```
### 方式一：克隆仓库
```
git clone https://codeup.aliyun.com/638c62cf121be2db491c74d8/AndroidVideoPlug/video-plug-in.git
cd video-plug-in
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```
### 方式二：已有文件夹或仓库
```
cd existing_folder
git init
git remote add origin https://codeup.aliyun.com/638c62cf121be2db491c74d8/AndroidVideoPlug/video-plug-in.git
git add .
git commit
git push -u origin master
```
### 方式三：导入代码库
```
git clone --bare https://git.example.com/your/project.git your_path
cd your_path
git remote set-url origin https://codeup.aliyun.com/638c62cf121be2db491c74d8/AndroidVideoPlug/video-plug-in.git
git push origin --tag && git push origin --all
```
### 常用命令
```
git init //初始化仓库
git status  --------------查看仓库当前状态
git add  --------------将文件增加到暂存区
git add . --------------将当前工作区所有文件都加入暂存区
git add -u -----------添加所有被修改或删除的文件信息到暂存区，不处理untracked文件
git add -A --------------添加所有被修改或删除的文件信息到暂存区，处理untracked文件

git add -i   ------进入到交互界面，按需添加到暂存区
git commit -m '提交说明'   -----将暂存区内容提交到本地仓库
git commit -a -m '提交说明'   --------跳过缓存区，直接把工作区内容提交到本地仓库

同步远程仓库：git push -u origin master
本地仓库内容推送到远程仓库：git remote add origin git@github.com:帐号名/仓库名.git
从远程仓库克隆项目到本地：git clone git@github.com:git帐号名/仓库名.git
查看远程库信息：git remote
拉取远程分支到本地仓库：
git checkout -b 本地分支 远程分支 # 会在本地新建分支，并自动切换到该分支
git fetch origin 远程分支:本地分支 # 会在本地新建分支，但不会自动切换，还需checkout
git branch –set-upstream 本地分支 远程分支 # 建立本地分支与远程分支的链接
同步远程仓库更新：：git fetch origin master
```
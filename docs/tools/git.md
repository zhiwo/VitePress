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
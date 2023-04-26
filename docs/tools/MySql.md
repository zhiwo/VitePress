### MySql 查询用户信息
```
select user,host,password from mysql.user;

```
### MySql 修改所有机器能访问,默认只能本机访问
```
 update user set host = '%' where user = 'root';

 flush privileges;
```

### MySql 创建Native_Password 方式使用(用于低版本使用)
```
use mysql;
select * from user;

create user 'tdkj'@'%' identified with mysql_native_password by 'zhhj@2023';
flush privileges;
grant all privileges on *.* to 'tdkj'@'%' with grant option;
flush privileges;

select * from user;
```
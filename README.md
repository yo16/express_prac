# express_prac
Expressの練習


## Docker環境
```
sudo service docker start
docker container run -d --rm --name mongo-docker -p 27018:27017 mongo:3.6.3
docker exec -it mongo-docker mongo --version
```
- バージョン指定はいらなかったか・・・


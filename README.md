# express_prac
Expressの練習


## Docker環境
```
sudo service docker start
docker container run -d --rm --name mongo-docker -p 27018:27017 mongo:3.6.3
docker exec -it mongo-docker mongo --version
```
- バージョン指定はいらなかったか・・・
- mongoとかどうこうするのはやめた

## Reactのbuildをexpressのpublicへ突っ込む
- 参考
  - [React+Expressで本番環境へデプロイ #JavaScript - Qiita](https://qiita.com/creaporta/items/aedc6f7510cfb5f6352e)
    - my_clientのフォルダを、expressのpublicへコピー
  - [Express のアプリケーション生成プログラム](https://expressjs.com/ja/starter/generator.html)
    - [[Render]](https://dashboard.render.com/)での起動方法
      - Root Directory
        - myserverapp
      - 環境変数
        - DEBUG=myserverapp:*
          - DEBUGってなんだろう・・・いいのか？
      - Start Command
        - `npm start`
- 備考
  - server以下は、テスト用で使ってない
  - トップのpackage.jsonもいらないと思う

# 開発環境
- Anaconda
- python 3.10.4

## セットアップ方法
1. Anaconda navigatorからpython3.10.4で新規環境作成
2. 新規作成した環境で```pip install -r requirements.txt```

## アプリの起動方法
1. DBの初期化
	```python init_db.py```
2. アプリの起動
	```python app.py```

# 開発に参加する方法
## 事前準備
1. githubのmahorobaリポジトリからcode>httpsのリンクをコピー
2. ターミナルから作業用ディレクトリへ移動し 
	```git clone https://github.com/truelywaath/mahoroba.git```

## コーディング・コミット・プルリクエスト
### 注意事項
- **直接masterブランチを修正しないこと**
- **1機能、1修正ごとにブランチを切ること**
- **(念の為)毎回ブランチを切る前に```git pull```すること**。
### 手順
1. ```git branch```コマンドでmasterブランチにいることを確認し、```git pull```
	- masterブランチにいなかった場合は```git checkout master```でmasterブランチへ移動
2. ```git checkout -b ブランチ名```で新規ブランチを作成し、移動
	- ブランチの命名は新規機能追加の場合```feature/XXX```、修正の場合は```fix/XXX```のようにつけると良い。
3. プログラムの実装をする。
4. ```git add .```でブランチに修正したファイルを追加する。
5. ```git commit -m "コミットメッセージ"```でコミットする。   
	- コミットメッセージにはそのコミットでの変更内容を簡単に記載する。
6. githubを開き```create new pull request```をクリック。
7. 変更箇所・変更内容を文章で記入し、masterブランチとの差分を見てプログラムに間違いがないことを確認した後、プルリクエストを送る。

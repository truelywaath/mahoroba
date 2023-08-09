# 開発環境
- python
  - v3.10.4
  - ライブラリはrequirements.txt参照
- react
  - v18.2.0

# アプリの起動
- **動作確認する場合はここだけ読めばOK**
- **アプリを最新状態にするには```git pull```をしてください。**
## 環境構築
1. gitの準備(導入済みの場合はスキップ)  
以下のURLからgitをインストール  
https://git-scm.com/book/ja/v2/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB
2. リポジトリの準備
   1. 任意の場所の作業用ディレクトリに移動
   2. 以下のコマンドでリポジトリのクローンを作成  
   	```$ git clone https://github.com/truelywaath/mahoroba.git```
3. Anaconda(python環境)の準備
   1. 以下のURLからAnacondaをインストール(導入済みの場合はスキップ)  
   https://www.anaconda.com/download
   2. Anaconda-Navigatorを起動し、Environmentsタブへ移動
   3. Createから新規環境を作成
	- Name: mahoroba
	- packages: python 3.10.11
   4. 作成したmahoroba環境を選択し、Open Terminal
   5. 作業用ディレクトリ配下のmahorobaディレクトリへ移動  
	```$ cd /path/to/作業用ディレクトリ/mahoroba```
   6. pythonライブラリをインストール  
	```$ pip install -r requirements.txt```
4. React環境の準備
    1. 以下のURLからnvmをインストール  
    https://github.com/coreybutler/nvm-windows/releases
    2. LTSをインストール  
	```$ nvm install 18.17.0```
## アプリの起動
**Flaskのサーバー用とReactのサーバー用でターミナルを２つ起動しておくこと**
1. Flaskのサーバーをたてる。  
	```$ python ./backend/app.py```
2. Reactのサーバーをたてる。  
	```$ cd ./frontend```  
	```$ npm start```
> note  
> 'react-scripts' は、内部コマンドまたは外部コマンド、  
> 操作可能なプログラムまたはバッチ ファイルとして認識されていません。  
> ↑が表示された場合は以下コマンドを実行。  
> ```$ npm install```  
> ```$ npm start```  
> 

# 開発方法
- **開発に参加する場合は必読**
- **アプリ起動までの手順は実行済みのもとのする**

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
6. ```git push ブランチ名```でpushする。
7. githubを開き```create new pull request```をクリック。
8. 変更箇所・変更内容を文章で記入し、masterブランチとの差分を見てプログラムに間違いがないことを確認した後、プルリクエストを送る。

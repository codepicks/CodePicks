<h1 align="center"> CodePicks </h1> <br>
<p align="center">
  <a href="https://codepicks.jp/">
    <img alt="GitPoint" title="CodePicks" src="https://i.imgur.com/6xHle0p.png" width="450">
  </a>
</p>

<p align="center">
  OSSで運営される新しいTechメディア。
</p>

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.codepicks">
    <img alt="Get it on Google Play" title="Google Play" src="http://i.imgur.com/mtGRPuM.png" width="140">
  </a>
</p>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [RoadMap](#roadmap)
- [Feedback](#feedback)
- [Build Process](#build-process)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

CodePicksは、#エンジニア #個人開発 #フリーランス #オープンソース のキーワードに刺さるすべての方向けの情報収集&共有サービスです。

アプリのソースコードは完全にオープンソースで公開されています。
ソースコードURL: https://github.com/KangYoosam/CodePicks

- ReactNativeでアプリを開発したい
- オープンソースコミュニティがプロダクトを伸ばすのを目の当たりにしたい
- ベンチャー起業家・エンジニアのサービス開発・運営手法をみたい
- 純粋にテックメディアを利用したい

こんな思いがあるすべての方に届きますように。
ご質問等ある方は https://twitter.com/kangyoosam までDMください。

**iOS版は現在審査中です🙇‍**

<p align="center">
  <img src = "https://i.imgur.com/ZKxWYgV.png" width=550>
</p>

## RoadMap

- [x] 記事の取得・閲覧
- [x] カテゴリをタブ別に分けて表示。スクロール可能に。
- [x] WebView内のナビゲーション（history back等）
- [x] GAの導入（スクリーントラッキング・イベントトラッキング）
- [ ] Sentryの導入（エラートラッキング）
- [ ] 多言語化
- [ ] ユーザ認証
- [ ] 記事の保存(Pick)
- [ ] 記事へのコメントとコメントの閲覧
- [ ] コメントへの「いいね！」
- [ ] 各種SNSへのシェア機能
- [ ] 他のユーザをフォロー

## Feedback

フィードバックやお問い合わせ・質問などは [Twitter](https://twitter.com/codepicks) もしくは [file an issue](https://github.com/KangYoosam/CodePicks/issues/new) でお気軽にお願いします。 機能要望はいつでもウェルカムです！ まだコントリビュートガイドラインはまだ決まっていません。コントリビュートしてくださる方は勝手にPullRequestを送ってください。
https://twitter.com/kangyoosam に連絡していただくか、定期的に開催する（予定の） [ReactNaitve勉強会](https://r-n.connpass.com/event/112874/)にてご質問ください。

## Build Process

- ReactNative初心者の方は[公式ドキュメント](https://facebook.github.io/react-native/docs/getting-started.html)をご一読ください。開発マシンは何でも構いませんが、**iOSアプリをビルド・開発するにはMacが必要です。**
- `git clone git@github.com:KangYoosam/CodePicks.git`
- `yarn`: 依存ライブラリをインストールします。
- `yarn ios`: iOSのSimulatorを起動します。
- `yarn android`: Androidのemulatorを起動します。

**APIについて**: APIは諸事情によりまだオープンソース化されていません。しかし、僕にはAPI側のコードもOSS化する意思があります。当面はcodepicks本番のAPIを使ってください。↓こちらのようにJson形式でレスポンスが返ってきます。
https://codepicks.jp/api/v1/categories/all/articles

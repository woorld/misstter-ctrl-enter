# Misstterの投稿ボタンをCtrl+Enterで押せるようにするやつ

その名の通りの機能を実現するChrome拡張機能です。

前提条件として、Misstter（ https://chrome.google.com/webstore/detail/misstter/apepechijpaheieelimdgbnjcecobhpp ）の導入が必要です。

## 導入方法

1. 「Code」ボタンから「Download ZIP」を選択し、このソースをダウンロード
2. 適当なところに展開（導入後にフォルダを削除・移動するとChromeから削除されてしまうので注意）
3. Chromeを開き、`chrome://extensions/`にアクセス
4. 「パッケージ化されていない拡張機能を読み込む」から、展開したフォルダ（misskey-ctrl-enterフォルダ）を選択

## 注意事項

- 私個人が使用する目的で作成したため、最低限の機能のみでポップアップすらありません。
- 動作環境によっては、Twitter（現X）のデフォルトのイベントが走り、Misskeyへの投稿が行われないかもしれません。
- Twitter（現X）やMisstterのアップデートにより、動作しなくなる可能性があります。
  - 特にTwitter（現X）（こう書くのめんどくさくなってきた）側は、直接は関係のないアップデートでも、取得する要素のクラス名が変わってしまい使えなくなる可能性が大いにあります。
- 不具合を発見した際は、当リポジトリのIssueまたは連絡用メールアドレス`contact.wooooorld@gmail.com`にご連絡いただけると喜びます。

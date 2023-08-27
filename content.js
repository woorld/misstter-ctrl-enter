document.addEventListener('keydown', (e) => {
  if (!e.ctrlKey || e.key !== 'Enter') {
    return;
  }

  // 投稿フォームの入力フィールド、ボタン類のパネルが交互に入っている
  // Twitter側のちょっとしたアプデでクラス名変わりそうで怖いけどこれくらいしか要素の特定方法がない
  const fieldElements = document.getElementsByClassName('css-1dbjc4n r-18u37iz r-184en5c');

  // 入力フィールドをメインに回すのでi += 2
  for (let i = 0; i < fieldElements.length; i += 2) {
    if (!document.activeElement.isEqualNode(fieldElements[i].querySelector('div[aria-label="テキストをツイート"]'))) {
      continue;
    }

    try {
      fieldElements[i + 1].getElementsByClassName('misskey-button')[0].click();
    }
    catch (e) {
      console.log('Misstterの投稿ボタンをCtrl+Enterで押せるようにするやつ: 投稿ボタンの押下に失敗しました。\n' + e);
    }
  }
}, true);

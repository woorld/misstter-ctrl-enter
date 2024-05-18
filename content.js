document.addEventListener('keydown', (e) => {
  if (!e.ctrlKey || e.key !== 'Enter') {
    return;
  }

  // 投稿フォームの入力フィールド、ボタン類のパネルが入った要素を取得
  // Twitter側のちょっとしたアプデでクラス名変わりそうで怖いけどこれくらいしか要素の特定方法がない
  const fieldElements = document.getElementsByClassName('css-175oi2r r-1iusvr4 r-16y2uox r-1777fci r-1h8ys4a r-1bylmt5 r-13tjlyg r-7qyjyx r-1ftll1t');

  for (let i = 0; i < fieldElements.length; i++) {
    if (!document.activeElement.isEqualNode(fieldElements[i].querySelector('div[aria-label="ポスト本文"]'))) {
      continue;
    }

    try {
      fieldElements[i].getElementsByClassName('misskey-button')[0].click();
    }
    catch (e) {
      console.log('Misstterの投稿ボタンをCtrl+Enterで押せるようにするやつ: 投稿ボタンの押下に失敗しました。\n' + e);
    }
  }
}, true);

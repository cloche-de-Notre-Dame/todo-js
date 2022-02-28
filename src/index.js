import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除

const deleteFromIncomleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(Completado)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "Completado";
  completeButton.addEventListener("click", () => {
    //押されたCompletadoボタンの親タグ(div）を未完了リストから削除
    deleteFromIncomleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "Volver";
    backButton.addEventListener("click", () => {
      //押されたVolverボタンの親タグ(div）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton); //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);

    // const deleteTarget = deleteButton.parentNode;
  });

  //button(Liberar)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Liberar";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div）を未完了リストから削除
    deleteFromIncomleteList(deleteButton.parentNode);
  });

  //divタグの子要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

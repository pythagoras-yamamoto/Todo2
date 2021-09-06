import "./styles.css";

const onClick = () => {
  //inputの中身を取得し、入力欄を初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了のTODOにinputした内容を生成
  const div = document.createElement("div");
  div.className = "list-low";
  const li = document.createElement("li");
  li.innerText = inputText;
  div.appendChild(li);

  //完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  div.appendChild(completeButton);
  //完了機能
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
  });

  //削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  //削除機能
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了TODOの削除機能
const deleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClick());

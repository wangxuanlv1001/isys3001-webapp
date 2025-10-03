// 等待 HTML 文档完全加载后执行
document.addEventListener('DOMContentLoaded', () => {

    // 获取页面上的元素
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // 为 "Add" 按钮添加点击事件监听器
    addButton.addEventListener('click', () => {
        // 获取输入框中的文本，并去除首尾空格
        const taskText = todoInput.value.trim();

        // 如果输入不为空
        if (taskText !== '') {
            // 1. 创建一个新的列表项 <li>
            const listItem = document.createElement('li');
            listItem.textContent = taskText; // 设置文本内容

            // 2. 将新的列表项添加到 <ul> 列表中
            todoList.appendChild(listItem);

            // 3. 清空输入框
            todoInput.value = '';
        }
    });
});
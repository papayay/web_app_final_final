import React, { useState } from 'react';
import Button from './assets/first_page/button'; // 假设这是您的自定义按钮组件
import Dialog from '@mui/material/Dialog';
import SecondPageFindPeople from './assets/second_page_find_poeple';
import UserProfile from './assets/third_page'; // 确认这是正确的导入路径
import './App.css'; // 您的样式表
import { Stack } from '@mui/material';

const App = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('findPeople'); // 新增一个状态变量来控制显示内容

  const handleOpenFindPeople = () => {
    setOpen(true);
    setContent('findPeople'); // 设置为显示 "找工作" 的内容
  };

  // 修改这个函数以跳转到新的网页
  const handleOpenSeekPeople = () => {
    window.location.href = 'https://papayay.github.io/web_app_add/';
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderDialogContent = () => {
    switch(content) {
      case 'userProfile': // 新增的案例
        return <UserProfile />;
      case 'findPeople':
      default:
        return <SecondPageFindPeople />;
    }
  };

  return (
    <div className="center-container">
      <h1>找工作</h1>
      <Stack direction="row" spacing={2}>
        <Button onClick={handleOpenFindPeople} text="找工作" />
        <Button onClick={handleOpenSeekPeople} text="找員工" />
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiDialog-paper': {
            maxWidth: 'none',
            width: '80%',
          }
        }}
      >
        {renderDialogContent()}
      </Dialog>
    </div>
  );
};

export default App;

// 假设这是您的 SecondPageFindPeople.js 文件
import React from 'react';
import FindPeopleMessCard from './find_people_mess_card';

const SecondPageFindPeople = () => {
  return (
    <div>
      <FindPeopleMessCard 
        title="找工作" 
        description="这里是关于找队友的详细信息描述。" 
      />
      {/* 这里可以添加更多的 FindPeopleMessCard 组件或其他内容 */}
    </div>
  );
};

export default SecondPageFindPeople;

import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'code',
          title: '编程在手',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'antd',
          title: '前端框架',
          href: 'https://ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> edison Github
            </>
          ),
          href: 'https://https://github.com/Edisonchow119',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;

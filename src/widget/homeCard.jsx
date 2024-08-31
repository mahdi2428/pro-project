import React from 'react';
import { Card, Typography } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export default function HomeCard({title , color , footer , icon , value}) {
  
  return (
    
    <Card
      className='float-start m-3 w-44 h-48'
      style={{
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        backgroundColor:color
      }}

    >
      <Card.Meta className='text-right '
        avatar={
          <div>
            {icon}
          </div>
        }
       
        title={
          <Typography.Text  type="secondary" style={{ fontSize: 14, color:"white"}}>
            {title}
          </Typography.Text>
        }
        description={
          <Typography.Title level={3} style={{ color: 'white' }}>
            {value}
          </Typography.Title>
        }
      />
      {/* {footer && (
        <Card.Footer style={{ borderTop: '1px solid #E5E7EB', padding: 16 }}>
          {footer}
        </Card.Footer>
      )} */}
    </Card>
  );
}
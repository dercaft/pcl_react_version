import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormDateRangePicker, ProFormSelect } from '@ant-design/pro-form';

const waitTime = (time = 100) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
export default (): React.ReactNode => (
  <PageContainer content="">
    <Card>
      <Typography.Title level={2} style={{ textAlign: 'center' }}>
         创建任务
      </Typography.Title>
    </Card>
    <Card>
      <ProForm
      onFinish={async values => {
        await waitTime(2000);
        console.log(values);
        message.success('提交成功！');
      }}
      initialValues={{
        name: '蚂蚁设计有限公司',
        useMode: 'chapter',
      }}
    >
      <ProForm.Group>
        <ProFormText
          width="m"
          name="name"
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
        />
        <ProFormText width="m" name="company" label="我方公司名称" placeholder="请输入名称" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText name="contract" width="m" label="合同名称" placeholder="请输入名称" />
        <ProFormDateRangePicker width="m" name={['contract', 'createTime']} label="合同生效时间" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: '盖章后生效',
            },
          ]}
          // readonly
          width="xs"
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect
          width="xs"
          options={[
            {
              value: 'time',
              label: '履行完终止',
            },
          ]}
          name="unusedMode"
          label="合同约定失效效方式"
        />
      </ProForm.Group>
      <ProFormText width="s" name="id" label="主合同编号" />
      <ProFormText name="project" width="m" disabled label="项目名称" initialValue="xxxx项目" />
      <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
    </ProForm>
    </Card>
  </PageContainer>
);
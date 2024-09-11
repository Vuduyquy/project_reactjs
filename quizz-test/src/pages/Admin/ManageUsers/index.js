import React from 'react';
import { Button, Space, Table, Tag, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const ManageUsers = () => {
	const columns = [
		{
			title: 'Tên đề thi',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Thời gian',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Môn thi',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Mức độ',
			key: 'tags',
			dataIndex: 'tags',
			render: (_, { tags }) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Số lượng câu hỏi',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			),
		},
		{
			title: 'Hành động',
			key: 'action',
			align: 'center',
			render: (_, record) => (
				<Tooltip title='Xem chi tiết'>
					<Button shape='circle' icon={<EyeOutlined />} />
				</Tooltip>
			),
		},
	];
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
	];

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '12px',
				}}
			>
				<h1>Danh sách người dùng </h1>
			</div>
			<Table columns={columns} dataSource={data} />
		</div>
	);
};

export default ManageUsers;
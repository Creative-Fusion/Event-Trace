import React from "react";
import { Table, Modal } from "antd";
import { TableFilter } from "../../../data/tableFilter";
import { Container } from "../../../components/container";
import { BsExclamationTriangle } from "react-icons/bs";

export class Participants extends TableFilter {
	showDeleteConfirm() {
		Modal.confirm({
			title: "Are you sure remove this user's registration?",
			icon: (
				<BsExclamationTriangle className="w-8 h-8 text-yellow-400 pb-2 mx-auto" />
			),
			centered: true,
			content: "You will not be able to undo this action.",
			okText: "Yes",
			okType: "danger",
			cancelText: "No",
			onOk() {
				console.log("OK");
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	}

	handleChange = (filters, sorter) => {
		console.log(
			`Filters: ${JSON.stringify(filters)} \nSorter: ${JSON.stringify(sorter)}`
		);
		this.setState({
			filteredInfo: filters,
			sortedInfo: sorter,
		});
	};

	fake_participants = [
		{
			key: "1",
			name: "Jopn Brown",
			phone: 32,
			gender: "Male",
			email: "abcd@gmail.com",
			address: "New York No. 1 Lake Park",
		},
		{
			key: "2",
			name: "Moe Black",
			email: "abcd@gmail.com",
			gender: "Female",
			phone: 42,
		},
		{
			key: "3",
			name: "Bim Green",
			email: "abcd@gmail.com",
			phone: 32,
			address: "Sidney No. 1 Lake Park",
		},
		{
			key: "4",
			name: "Pim Red",
			email: "abcd@gmail.com",
			address: "London No. 2 Lake Park",
		},
	];

	render() {
		let { sortedInfo, filteredInfo } = this.state;
		sortedInfo = sortedInfo || {};
		filteredInfo = filteredInfo || {};

		const columns = [
			{
				title: "Name",
				dataIndex: "name",
				key: "name",
				ellipsis: true,
				sorter: (a, b) => a.name.localeCompare(b.name),
				// sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
				...this.getColumnSearchProps("name"),
			},
			{
				title: "Email",
				dataIndex: "email",
				key: "email",
				ellipsis: true,
				...this.getColumnSearchProps("email"),
			},
			{
				title: "Phone",
				dataIndex: "phone",
				key: "phone",
				ellipsis: true,
				render: (value) => (value ? value : "---"),
			},
			{
				title: "Gender",
				dataIndex: "gender",
				key: "gender",
				ellipsis: true,
				filters: [
					{ text: "Male", value: "Male" },
					{ text: "Female", value: "Female" },
				],
				// filteredValue: filteredInfo.gender || null,
				onFilter: (value, record) =>
					record.gender ? record.gender.indexOf(value) === 0 : null,
				render: (value) => (value ? value : "---"),
			},
			{
				title: "Address",
				dataIndex: "address",
				key: "address",
				ellipsis: true,
				sorter: (a, b) =>
					a.address ? a.address.localeCompare(b.address) : null,
				render: (value) => (value ? value : "---"),
				...this.getColumnSearchProps("address"),
			},
			{
				title: "Action",
				key: "action",
				ellipsis: true,
				render: (text, record) => (
					<button
						className="border-none text-primary text-base"
						onClick={this.showDeleteConfirm}
					>
						Remove
					</button>
				),
			},
		];

		return (
			<div className="md:w-4/6 w-9/12 mx-auto">
				<Container>
					<div className="pb-3">
						<h2>Participants' List</h2>
					</div>
					<Table
						columns={columns}
						dataSource={this.fake_participants}
						size="middle"
						onChange={this.handleChange}
					/>
				</Container>
			</div>
		);
	}
}

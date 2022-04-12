import { BsEnvelope, BsTelephone, BsGlobe2 } from "react-icons/bs";
import moment from "moment";

export const trimtext = ({ text, length = 380 }) => {
	return text.length > length ? `${text.slice(0, length)}...` : text;
};

export const checkContactLinks = (dataSet) => {
	const contactLinks = [];
	if (dataSet.email)
		contactLinks.push({
			value: dataSet.email,
			icon: <BsEnvelope className="w-6 h-6" />,
		});
	if (dataSet.phone)
		contactLinks.push({
			value: dataSet.phone,
			icon: <BsTelephone className="w-6 h-6" />,
		});
	if (dataSet.website)
		contactLinks.push({
			value: dataSet.website,
			icon: <BsGlobe2 className="w-6 h-6" />,
		});

	return contactLinks;
};

export function disabledDate(current) {
	// Can not select days before today and today
	return current && current < moment().endOf("day");
}

// const handleSearch = (selectedKeys, confirm, dataIndex) => {
// 	confirm();
// 	return {
// 		searchText: selectedKeys[0],
// 		searchedColumn: dataIndex,
// 	};
// };

// const handleReset = (clearFilters) => {
// 	clearFilters();
// 	return { searchText: "" };
// };

// export const getColumnSearchProps = (dataIndex)  {return ({
// 	filterDropdown: ({
// 		setSelectedKeys,
// 		selectedKeys,
// 		confirm,
// 		clearFilters,
// 	}) => (
// 		<div style={{ padding: 8 }}>
// 			<Input
// 				ref={(node) => {
// 					searchInput = node;
// 				}}
// 				placeholder={`Search ${dataIndex}`}
// 				value={selectedKeys[0]}
// 				onChange={(e) =>
// 					setSelectedKeys(e.target.value ? [e.target.value] : [])
// 				}
// 				onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
// 				style={{ marginBottom: 8, display: "block" }}
// 			/>
// 			<Space>
// 				<Button
// 					type="primary"
// 					onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
// 					icon={<SearchOutlined />}
// 					size="small"
// 					style={{ width: 90 }}
// 				>
// 					Search
// 				</Button>
// 				<Button
// 					onClick={() => handleReset(clearFilters)}
// 					size="small"
// 					style={{ width: 90 }}
// 				>
// 					Reset
// 				</Button>
// 				<Button
// 					type="link"
// 					size="small"
// 					onClick={() => {
// 						confirm({ closeDropdown: false });
// 						return {
// 							searchText: selectedKeys[0],
// 							searchedColumn: dataIndex,
// 						};
// 					}}
// 				>
// 					Filter
// 				</Button>
// 			</Space>
// 		</div>
// 	),
// 	filterIcon: (filtered) => (
// 		<SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
// 	),
// 	onFilter: (value, record) =>
// 		record[dataIndex]
// 			? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
// 			: "",
// 	onFilterDropdownVisibleChange: (visible) => {
// 		if (visible) {
// 			setTimeout(() => searchInput.select(), 100);
// 		}
// 	},
// 	render: (text) => text,
// })};

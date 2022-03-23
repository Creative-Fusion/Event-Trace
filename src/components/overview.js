import React from "react";
import { Divider } from "antd";
import colors from "tailwindcss/colors";

function DataOverview({ data }) {
	return (
		<div className="h-full w-full inline-flex items-center justify-between">
			<div className="">
				<h3 className="text-secondary text-2xl">{data.count}</h3>
				<p className="text-secondary text-lg opacity-60">{data.title}</p>
			</div>
			{data.icon}
		</div>
	);
}

export const Overview = ({ dataList }) => {
	const gridCol = `grid-cols-${dataList.length}`;

	return (
		<div className="w-full h-[6.5rem] bg-primary rounded-lg px-6 py-4">
			<div className={`grid ${gridCol} h-full justify-evenly gap-2`}>
				{dataList.map((data) => (
					<div className="flex h-full">
						<DataOverview data={data} />
						<Divider
							type="vertical"
							style={{ height: "100%", borderLeft: "1px solid #000000" }}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

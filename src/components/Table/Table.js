import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useTableDateSettings from "../../lib/hooks/useTableDateSettings";
import "./Table.css";
import cls from "classnames";
import { motion } from "framer-motion";

const Table = ({
	data,
	datamap,
	datasettings,
	onItemClick,
	onSort,
	className,
	selected,
}) => {
	const [sortItem, setSortItem] = useState("_id");
	const [sortOrder, setSortOrder] = useState("asc");

	const { headers, newData } = useTableDateSettings(
		data,
		datamap,
		datasettings,
		sortItem,
		sortOrder
	);

	const renderHeader = () => {
		return (
			<tr className="Table__header-row">
				{headers.map((item, index) => {
					if (index !== 0) {
						return (
							<th
								key={index}
								className={cls(
									"Table__header",
									sortItem ===
										Object.keys(datamap)[index - 1] &&
										"Table__header--selected"
								)}
								onClick={() => {
									setSortOrder(
										sortOrder === "asc" ? "desc" : "asc"
									);
									setSortItem(
										Object.keys(datamap)[index - 1]
									);
									onSort(Object.keys(datamap)[index - 1]);
								}}
							>
								<motion.div
									whileTap={{ scale: 1.1 }}
									className="Table__header-content"
								>
									<div className="Table__header-text">
										{item}
									</div>
									{sortItem ===
										Object.keys(datamap)[index - 1] && (
										<FontAwesomeIcon
											icon={
												sortOrder === "asc"
													? faChevronUp
													: faChevronDown
											}
											className="Table__header-icon"
										/>
									)}
								</motion.div>
							</th>
						);
					}
					return null;
				})}
			</tr>
		);
	};

	const renderBody = () => {
		return newData.map((item, index) => {
			return (
				<tr
					key={index}
					className={cls(
						"Table__row",
						selected === item._id && "Table__row--selected"
					)}
					onClick={() => onItemClick(item._id)}
				>
					{Object.values(item).map((next, index2) => {
						if (index2 !== 0) {
							return (
								<td key={index2} className="Table__data">
									{next}
								</td>
							);
						}
						return null;
					})}
				</tr>
			);
		});
	};

	return (
		<div className={cls("Table", className)}>
			<table className="Table__table">
				<thead>{renderHeader()}</thead>
				<tbody>{renderBody()}</tbody>
			</table>
		</div>
	);
};

export default Table;

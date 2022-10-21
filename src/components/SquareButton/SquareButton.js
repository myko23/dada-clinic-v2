import React from "react";
import "./SquareButton.css";
import cls from "classnames";
import { motion } from "framer-motion";

const SquareButton = ({ className, children, onClick, width }) => {
	return (
		<motion.div
			whileTap={{ scale: 0.95 }}
			className={cls("SquareButton", className)}
			onClick={onClick}
			style={{ width: width }}
		>
			{children ?? "Submit"}
		</motion.div>
	);
};

export default SquareButton;

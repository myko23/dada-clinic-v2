import React, { useEffect } from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const Modal = ({ onExit, children }) => {
	useEffect(() => {
		document.addEventListener("keydown", onKeyDownExit);
	}, []);

	const onKeyDownExit = (e) => {
		if (e.key === "Escape") {
			onExit();
		}
	};

	return (
		<div className="Modal" onKeyDown={onKeyDownExit} tabIndex="0">
			<motion.div
				animate={{ opacity: 0.7 }}
				exit={{ opacity: 0 }}
				className="Modal__overlay"
				onClick={onExit}
			></motion.div>
			<div className="Modal__content-box">{children}</div>
		</div>
	);
};

export default Modal;

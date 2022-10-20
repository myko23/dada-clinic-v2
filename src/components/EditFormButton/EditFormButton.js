import React from "react";
import SquareButton from "../SquareButton/SquareButton";
import "./EditFormButton.css";

const EditFormButton = ({ onSave, onReset, editConfigs }) => {
	const { editState, setEditState } = editConfigs;

	return (
		<div className="EditFormButton">
			{!editState ? (
				<SquareButton
					className="EditFormButton__button"
					onClick={() => setEditState(true)}
				>
					Edit
				</SquareButton>
			) : (
				<>
					<SquareButton
						className="EditFormButton__button"
						onClick={() => {
							setEditState(false);
							onSave();
						}}
					>
						Save
					</SquareButton>
					<SquareButton
						className="EditFormButton__button"
						onClick={() => {
							setEditState(false);
							onSave();
						}}
					>
						Reset
					</SquareButton>
				</>
			)}
		</div>
	);
};

export default EditFormButton;

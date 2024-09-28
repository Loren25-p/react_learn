import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export const AppButton = ({
    buttonText,
    buttonType = "button", // Значение по умолчанию
    isDisabled,
}) => {
    return (
        <button
            disabled={isDisabled}
            type={buttonType}
            id="next-btn">
            {buttonText}
        </button>
    );
};

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const FormCalendar = ({label, value, onChange}) => {
    return (
        <label className="form__label">{label}:
            <div className={"calendar-wrapper"}>
                <DatePicker
                    selected={value}
                    onChange={onChange}
                />
            </div>
        </label>

    );

};

//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSign } from "../../api/rest";
import { dataAtualFormatada } from "../../utilities/date-parser";
import "./Signs.css";

function Signs() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [sign, setSign] = useState(null);
  const submit = async () => {
    const day =
      selectedDate.getDate() < 10
        ? `0${selectedDate.getDate()}`
        : selectedDate.getDate();
    const month =
      selectedDate.getMonth() + 1 < 10
        ? `0${selectedDate.getMonth() + 1}`
        : selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
    setSign(await getSign(`${day}/${month}/${year}`));
  };

  return (
    <div className="Signs">
      <div className="signs-container-wrapper">
        <div className="signs-container" id="signs-container">
          <div>
            <div>
              <label for="day">Birthday Date:</label>
              <input
                type="date"
                id="birthday"
                required
                pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
                onChange={(e) => {
                  setSelectedDate(e.target.valueAsDate);
                }}
              ></input>
              <span class="validity"></span>
            </div>
            <div>
              <button
                onClick={() => {
                  submit();
                }}
              >
                Submit
              </button>
            </div>
            <b>{sign}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signs;

import { useState } from "react";
import Button from "./Button";

function SimpleForm() {
  const [showDiv, setShowDiv] = useState(false);
  const [showAnotherButton, setShowAnotherButton] = useState(true);
  const [searchWord, setSearchWord] = useState("");

  return (
    <div
      data-testid="form"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        data-testid="searchBar"
        placeholder="Search...."
        style={{ padding: "1rem", fontSize: "x-large" }}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <h1>{searchWord}</h1>
      {showDiv && (
        <h4 data-testid="MainTitleWantToShow">
          Hi My name is Rocky, Web developer
        </h4>
      )}
      <Button
        label="Click Here...."
        handleClick={() => setShowAnotherButton(!showAnotherButton)}
      />

      {showAnotherButton && (
        <Button
          label="Click Here...."
          handleClick={() => setShowDiv(!showDiv)}
        />
      )}
    </div>
  );
}

export default SimpleForm;

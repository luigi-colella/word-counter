import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Alert from "../components/alert";
import { countWords } from "../helpers/strings";
import { locale } from "../locales/ui";
import classNames from "./app.module.css";

type FormStatus = "submittable" | "success" | "error";

function App() {
  const [textInput, setTextInput] = useState("");
  const [wordsCount, setWordsCount] = useState(0);
  const [formStatus, setFormStatus] = useState<FormStatus>("submittable");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormStatus("submittable");
    setTextInput(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (formStatus !== "submittable") {
      return;
    }
    const trimmedTextInput = textInput.trim();
    if (trimmedTextInput.length > 0) {
      setWordsCount(countWords(trimmedTextInput));
      setFormStatus("success");
      setErrorMessage("");
    } else {
      setFormStatus("error");
      setErrorMessage(locale.errors.emptyTextError);
    }
  };

  return (
    <div className={classNames.app}>
      <h1>{locale.mainHeading}</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder={locale.form.insertText}
          onChange={handleTextChange}
          value={textInput}
        />
        <div>
          <button type="submit">{locale.form.submit}</button>
        </div>
      </form>
      {formStatus === "success" && wordsCount && (
        <Alert type="success">
          {locale.result.count}: {wordsCount}
        </Alert>
      )}
      {formStatus === "error" && errorMessage && (
        <Alert type="error">
          <strong>{locale.errors.generalLabel}: </strong>
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}

export default App;

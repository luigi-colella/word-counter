import { ReactNode } from "react";
import classNames from "./alert.module.css";

interface Props {
  type: "success" | "error";
  children: ReactNode;
}

const Alert: React.FunctionComponent<Props> = (props) => (
  <div className={`${classNames.alert} ${classNames[props.type]}`}>
    <span>{props.children}</span>
  </div>
);

export default Alert;

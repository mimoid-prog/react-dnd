import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function DropTarget({ children }: Props): JSX.Element {
  return <div className="dropTarget">{children}</div>;
}

export default DropTarget;

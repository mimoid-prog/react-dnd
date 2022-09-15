interface Props {
  id: string;
}

function Box({ id }: Props) {
  return <div id={id} className="dragSource" />;
}

export default Box;

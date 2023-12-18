export const ItemTypes = {
  CARD: "card",
};

const style = {
  border: "1px solid gray",
  padding: "0.5rem 0 0.5rem 0",
  margin: ".2rem ",
  backgroundColor: "white",
  cursor: "move",
};

export interface ListItemProps {
  value: string;
}

export const ListItem: React.FC<ListItemProps> = ({value}) => {
  return (
    <div
      style={{
        ...style,
        height: `${parseInt(value) * 20}px`,
        backgroundColor: "#041014",
        color: "whitesmoke",
        width: "43.06px",
        textAlign: "center",
      }}
    >
      {value}
    </div>
  );
};

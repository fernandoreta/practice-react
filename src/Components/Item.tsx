import { Button } from "@mui/material";

export interface IItem {
    name: string | undefined;
    price: string | undefined;
    removeItem?: (item: IItem) => void;
}

export function Item(prop: IItem) {

    const removeItem = (item: IItem) => {
        if (prop.removeItem) {
            prop.removeItem(item);
        }
    };

    return (
        <div>
            <ul>
                <li>{prop.name} {prop.price}</li>
                <Button onClick={() => removeItem(prop)}>Remove</Button>
            </ul>
        </div>
    );
}
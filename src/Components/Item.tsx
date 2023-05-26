
export interface IItem {
    name: string | undefined;
    price: string | undefined;
}

export function Item(props: IItem) {

    return (
        <div>
            <ul>
                <li>{props.name} {props.price}</li>
            </ul>
        </div>
    );
}
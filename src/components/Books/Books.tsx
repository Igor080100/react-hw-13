import { IBook } from "../../data";

export const Books = (props: any) => {
   const { items = [], addToOrder } = props;

   return (
      <div>
         {items.map((book: IBook) => <Book key={book.id} addToOrder={addToOrder} {...book} />)}
      </div>
   )
}

export const Book = (props: any) => {
   const { id, title, price, addToOrder } = props;

   return (
      <div>
         <h2>{title}</h2>
         <span>{price}</span>
         <button onClick={() => addToOrder(id)}>Buy</button>
      </div>
   )
}
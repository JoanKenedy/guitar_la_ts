export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

 // Hereda los datos de guitar
export type CartItem = Guitar &{
  quantity: number
};

// loop oop
// export type GuitarID = Guitar['id']

// Utility Types hya muchos peor los mas comunes como Pick y Omit

// export type CartItem = Pick <Guitar, 'id' | 'name' | 'price'> & {
//   quantity: number
// }


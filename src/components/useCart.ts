import { ref, computed } from 'vue';

// Definición de la interfaz del producto
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number; // Agregamos el precio
}

// Definición de la interfaz para los elementos del carrito
interface CartItem extends Product {
  quantity: number;
}

// Estado reactivo para los artículos del carrito
const cartItems = ref<CartItem[]>([]);

// Función para agregar un producto al carrito
const addToCart = (product: Product) => {
  const existingProduct = cartItems.value.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++; // Incrementa la cantidad si ya está en el carrito
  } else {
    // Agrega un nuevo producto al carrito con cantidad 1
    cartItems.value.push({ ...product, quantity: 1 });
  }
};

// Cálculo del precio total del carrito
const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0); // Usamos el precio correcto
});

// Función para eliminar un producto del carrito
const removeFromCart = (index: number) => {
  cartItems.value.splice(index, 1); // Elimina el producto por su índice
};

// Exportar las funciones y el estado del carrito
export default function useCart() {
  return {
    cartItems,
    addToCart,
    totalPrice,
    removeFromCart,
  };
}

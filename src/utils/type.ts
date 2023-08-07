interface image {
    public_id: string
    image_url: string
}
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: image
    category: string;
  }
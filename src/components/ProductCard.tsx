import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift border-border/50" data-testid={`card-product-${id}`}>
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-secondary/20">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-semibold text-foreground mb-2" data-testid={`text-product-name-${id}`}>{name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-primary" data-testid={`text-product-price-${id}`}>${price.toFixed(2)}</span>
            <Button variant="secondary" size="sm" data-testid={`button-view-details-${id}`}>
              View Details
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;

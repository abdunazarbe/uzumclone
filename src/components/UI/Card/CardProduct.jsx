
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardProduct = ({case:{name, price, images}}) => {
  return (
    <Card className="w-[232px]">
      <CardHeader shadow={false} floated={false} className="h-[309px]">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col">
          <Typography color="blue-gray" className="text-[12.8px] mb-1">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-['InterMedium']">
            {price} so'm
          </Typography>
        </div>
      
      </CardBody>
      
    </Card>
  );
};

export default CardProduct;
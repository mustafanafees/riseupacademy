
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SpecialOffer = () => {
  return (
    <Card className="border-accent/20 bg-accent/5">
      <CardHeader>
        <CardTitle className="text-lg lg:text-xl text-accent">
          Special Admission Offer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
          25% OFF
        </div>
        <p className="font-semibold mb-2 text-sm lg:text-base text-primary">
          For 1st Batch of Students
        </p>
        <p className="text-xs lg:text-sm text-muted-foreground">
          Limited time offer for new enrollments. Contact us now to secure your spot!
        </p>
      </CardContent>
    </Card>
  );
};

export default SpecialOffer;

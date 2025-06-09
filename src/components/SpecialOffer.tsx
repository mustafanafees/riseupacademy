
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SpecialOffer = () => {
  return (
    <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
      <CardHeader>
        <CardTitle className="text-lg lg:text-xl">
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Special Admission Offer
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
          25% OFF
        </div>
        <p className="font-semibold mb-2 text-sm lg:text-base">
          <span className="bg-gradient-to-r from-navy to-primary bg-clip-text text-transparent">
            For 1st Batch of Students
          </span>
        </p>
        <p className="text-xs lg:text-sm text-muted-foreground">
          Limited time offer for new enrollments. Contact us now to secure your spot!
        </p>
      </CardContent>
    </Card>
  );
};

export default SpecialOffer;

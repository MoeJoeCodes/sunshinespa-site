import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
const Pricing = () => {
  const massages = [{
    name: "Aroma therapy (full body)",
    min30: "R200",
    min60: "R300",
    min90: "R450"
  }, {
    name: "Thai hot oil (full body)",
    min30: "R200",
    min60: "R350",
    min90: "R500"
  }, {
    name: "Deep tissue massage",
    min30: "R250",
    min60: "R350",
    min90: "R500"
  }, {
    name: "Sports massage",
    min30: "R250",
    min60: "R350",
    min90: "R500"
  }, {
    name: "Pre-natal pregnancy",
    min30: "R250",
    min60: "R350",
    min90: "R500"
  }, {
    name: "Back, neck & shoulder",
    min30: "R200",
    min60: "R300",
    min90: "R450"
  }, {
    name: "Head massage",
    min30: "R150",
    min60: "-",
    min90: "-"
  }, {
    name: "Foot massage ",
    min30: "R200",
    min60: "R300",
    min90: "-"
  }, {  
    name: "Foot massage & scrub",
    min30: "-",
    min60: "R300",
    min90: "-"
  }, {
    name: "Kids/teens foot massage & scrub",
    min30: "R200",
    min60: "R300",
    min90: "R450"
  }, {
    name: "Hand massage",
    min30: "R150",
    min60: "-",
    min90: "-"
  }, {
    name: "Walking massage",
    min30: "R250",
    min60: "R350",
    min90: "R500"
  }, {
    name: "Hot stone massage",
    min30: "-",
    min60: "R400",
    min90: "R500"
  }, {
    name: "Thai herbal massage",
    min30: "-",
    min60: "R400",
    min90: "R500"
  }, {
    name: "Foot reflexology massage",
    min30: "R200",
    min60: "R350",
    min90: "-"
  }, {
    name: "Traditional massage",
    min30: "R250",
    min60: "R350",
    min90: "R500"
  }, {
    name: "Thai massage (dry)",
    min30: "R250",
    min60: "R350",
    min90: "R500"
  }, {
    name: "Hot oil massage",
    min30: "R250",
    min60: "R350",
    min90: "R500"
  }];
  const cupping = [{
    name: "Thai cupping",
    price: "R150"
  }, {
    name: "Wet/sunnah cupping",
    price: "R300"
  }];
  const bodyTreatments = [{
    name: "Full body scrub",
    min30: "R200",
    min60: "R300"
  }];
  const facials = [{
    name: "Classic facial",
    price: "R200"
  }];
  const hairTreatments = [{
    name: "Scalp detox & hair steaming treatment",
    price: "R250"
  }];
  const combos = ["Neck, back & shoulder 30 min massage or aroma therapy full body 30 min massage + 30 min body scrub R300", "Full body 60 min massage + dry cupping R350", "Full body 60 min massage + wet cupping R500", "Foot massage + scrub & scalp detox & hair steaming treatment R300", "Pre-natal pregnancy 60 min massage + foot massage & scrub + facial R600"];
  return <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground font-playfair">
              Price List
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-gradient-sunrise mx-auto mb-4 sm:mb-6 rounded-full" />
            <div className="space-y-2 text-muted-foreground">
              <p className="text-sm sm:text-base md:text-lg">   071 117 4675 | 062 166 7239</p>
              <p className="text-sm sm:text-base md:text-lg">  85 Albatross Street, Lenasia, Ext 1</p>
            </div>
          </div>

          {/* Massages */}
          <Card className="mb-6 sm:mb-8 border-none shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl font-playfair">Massages</CardTitle>
              <CardDescription className="text-sm sm:text-base">Choose your preferred duration</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%] sm:w-[50%] text-xs sm:text-sm">Treatment</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">30m</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">60m</TableHead>
                    <TableHead className="text-center text-xs sm:text-sm">90m</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {massages.map((massage, idx) => <TableRow key={idx}>
                      <TableCell className="font-medium text-xs sm:text-sm">{massage.name}</TableCell>
                      <TableCell className="text-center text-xs sm:text-sm">{massage.min30}</TableCell>
                      <TableCell className="text-center text-xs sm:text-sm">{massage.min60}</TableCell>
                      <TableCell className="text-center text-xs sm:text-sm">{massage.min90}</TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4 italic">
                Surcharge of R50 extra for all massages for men!!!
              </p>
            </CardContent>
          </Card>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Cupping */}
            <Card className="border-none shadow-elegant bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-playfair">Cupping</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {cupping.map((service, idx) => <TableRow key={idx}>
                        <TableCell className="font-medium text-sm sm:text-base">{service.name}</TableCell>
                        <TableCell className="text-right font-semibold text-primary text-sm sm:text-base">{service.price}</TableCell>
                      </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

          </div>

        </div>
      </main>
      <Footer />
    </div>;
};
export default Pricing;
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="px-20 bg-slate-500">
      <Card className="bg-pink-100">
        <CardHeader>
          <CardTitle>Anticancer and scmall molecules</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="grid grid-col-2">
          <p>Content</p>
          {/* <Image
      src={"portfolio"}
      width={50}
      height={50}
      alt="Picture of the author"
    ></Image> */}
        </CardContent>
      </Card>
      <br></br>
      <Tabs defaultValue="home" className=" bg-red-200">
        <TabsList className="flex justify-center">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="document">Document</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <Carousel>
            <CarouselContent>
              <CarouselItem>honey singh</CarouselItem>
              <CarouselItem>emiway</CarouselItem>
              <CarouselItem>divine</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <br></br>
            <Card className="bg-pink-100">
              <CardHeader>
                <CardTitle className = "text-2xl">Introduction to Cancer</CardTitle>
                <CardContent>
                  Cancer, being the second leading cause of death globally. So,
                  the development of effective anticancer treatments is crucial
                  in the field of medicine. Anticancer peptides (ACPs) have
                  shown promising therapeutic potential in cancer treatment
                  compared to traditional methods. However, the process of
                  identifying ACPs through experimental means is often time-
                  intensive and expensive. To overcome this issue, we employed a
                  machine learning-based approach for the first time to develop
                  an anticancer model using small molecules. Anticancer small
                  molecules (ACSMs) are compounds that have been developed to
                  target and inhibit cancer cells. In this study, we used 10,000
                  compounds to develop the machine learning models using five
                  algorithms such as, Random Forest (RF), Light gradient
                  boosting machine (LightGBM), K-nearest neighbors (KNN),
                  Decision tree (DT) and Extreme Gradient Boosting (XGB). The
                  developed models were evaluated using the test set and top
                  three models were identified (RF, LightGBM and XGB).
                  Furthermore, to validate the predictive performance of our
                  models, we have performed external validation using an FDA
                  approved anticancer compounds/drugs. Following this analysis,
                  we found that our LightGBM model correctly predicted 9
                  compounds as active. However, RF and XGB exhibited some
                  limitations by predicting 8 and 7 compounds as active out of
                  10, respectively. These results demonstrate that, when
                  compared to RF and XGB, the LightGBM model showcase robust
                  prediction capabilities, achieving a superior accuracy of 79%
                  with an AUC of 0.88. These findings provide promising insights
                  into the potential of our approach for predicting anticancer
                  small molecules, highlighting the role of machine learning in
                  advancing cancer treatment research. Keywords: Anticancer
                  peptides, Anticancer small molecules, Machine learning, Light
                  Gradient Boosting Machine. Random forest.
                </CardContent>
              </CardHeader>
             
            </Card>
          </Carousel>
        </TabsContent>
        <TabsContent value="services">Change your services here.</TabsContent>
        <TabsContent value="document">Change your document here.</TabsContent>
        <TabsContent value="contact">Change your contact here.</TabsContent>
      </Tabs>
      <br></br>

      <Card className="bg-pink-100 grid grid-cols-3">
        <Card>
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Mail_1</p>
          <p>Mail_2</p>
        </CardContent>
        </Card>
        <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          {/* <p>Card Content</p> */}
        </CardContent>
        </Card>
        <Card>
        <CardHeader>
          <CardTitle>Citation</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Tang Q, Nie F, Zhao Q, Chen W. A merged molecular representation deep learning method for blood-brain barrier permeability prediction. Brief Bioinform. 2022 Sep 20;23(5):bbac357. doi: 10.1093/bib/bbac357. PMID: 36002937</p>
        </CardContent>
        </Card>
      </Card>

      <br></br>

      <Card className="bg-pink-100">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </main>
  );
}

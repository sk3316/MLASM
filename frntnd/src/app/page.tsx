import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
    <main>
    <div className=" px-20 bg-purple-900">
      <Card className="bg-pink-100">
        <CardHeader>
          <CardTitle>Anticancer and small molecules</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent className="grid grid-cols-2">
          <p>Content</p>
          <Image
						src='/images/portfolio.jpg'
						alt=''
						width={50}
						height={50}
						className="place-items-end "
						// unoptimized
            // layout = "fill"
					></Image>
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
              <CarouselItem><Image
						src = '/images/ML-flowchart.png' 
						alt=''
						width={500}
						height={500}
						className="place-items-end"
						// unoptimized
            // layout = "fill"
					></Image></CarouselItem>
              <CarouselItem><Image
						src = '/images/portfolio.jpg'
						alt=''
						width={100}
						height={100}
						className="place-items-end "
						// unoptimized
            // layout = "fill"
					></Image></CarouselItem>
              <CarouselItem><Image
						src='/images/portfolio.jpg'
						alt=''
						width={100}
						height={100}
						className="place-items-end "
						// unoptimized
            // layout = "fill"
					></Image></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
        </TabsContent>
        <TabsContent value="services">
        <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
        </TabsContent>
        <TabsContent value="document">Change your document here.</TabsContent>
        <TabsContent value="contact">Change your contact here.</TabsContent>
      </Tabs>
      <br></br>

      <Card className="grid grid-cols-3">
        <Card className = "bg-slate-100">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          <p>Mail_1</p>
          <p>Mail_2</p>
        </CardContent>
        </Card>
        <Card className = "bg-slate-100">
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
        </CardHeader>
        <CardContent>
          {/* <p>Card Content</p> */}
        </CardContent>
        </Card>
        <Card className = "bg-slate-100">
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

    </div>
      <Card className="justify-center grid px-0">
        <CardHeader>
          {/* <CardTitle>Card Title</CardTitle> */}
          <CardDescription>Copyright © 2020.Chengdu University of TCM All rights reserved.</CardDescription>
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
      </Card>
    </main>
  );
}

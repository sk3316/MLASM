import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";

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
      <div className="px-20 bg-purple-900">
        <Card className="h-[300px]">
          <CardHeader className="absolute z-10 ">
            <h1 className="text-6xl text-white/100 uppercase font-bold">
              Anticancer blood molecules
            </h1>
            <h4 className="text-white text-large">
              Deep-B3, A merged molecular representation deep learning method
              for blood-brain barrier permeability prediction{" "}
            </h4>
          </CardHeader>
          <Image
            alt="Card background"
            width={0}
            height={0}
            sizes="100-vw"
            className="z-0 w-full h-full object-cover border-2"
            src="/images/Types-of-blood-cancer_11zon.jpg"
          />
        </Card>
        <br></br>
        <Tabs defaultValue="services" className=" bg-red-100">
          <TabsList className="flex justify-center">
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="document">Document</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
          </TabsList>
          <TabsContent value="home">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src="/images/flowchart.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                    // className="place-items-end"
                    // unoptimized
                    // layout = "fill"
                  ></Image>
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/images/graph.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                    // className="place-items-end"
                    // unoptimized
                    // layout = "fill"
                  ></Image>
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/images/graph2.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                    // className="place-items-end"
                    // unoptimized
                    // layout = "fill"
                  ></Image>
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/images/graph3.png"
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }} // optional
                    // className="place-items-end"
                    // unoptimized
                    // layout = "fill"
                  ></Image>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <br></br>
            <Card className="bg-pink-100">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Introduction to Cancer
                </CardTitle>
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
            <div className="px-8">
              <br />
              <Card className="bg-blue-200 p-6">
                <p>
                  Please cite! If you use Deep-B3 for research, please cite the
                  following paper: Deep-B3. If you have any comments,
                  corrections or questions please contact us. All datasets used
                  in this study can be downloaded from here.
                </p>
              </Card>
              <br />
              <div className="items-center grid grid-cols-2">
                <div>
                  <p>Enter your SMILE notation here :</p>
                </div>
                <div>
                  <Input
                    type="notation"
                    placeholder="For example: CH3CH2CH5CH2CH8"
                  />
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            </div>
            <br />
          </TabsContent>

          <TabsContent value="document">
            <div className="px-8">
              <p className="text-4xl">Cancer and Small molecules</p>
              <br />
              <Card className="bg-red-200 p-6">
                <p>
                  Please cite! If you use Deep-B3 for research, please cite the
                  following paper: Deep-B3. If you have any comments,
                  corrections or questions please contact us. All datasets used
                  in this study can be downloaded from here.
                </p>
              </Card>
              <br />
              <Card>
                <CardHeader className="bg-blue-200">
                  <CardTitle>
                    Model interpretation based on the Morgan fingerprints
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap gap-4 py-4">
                  <div>
                    <Image
                      src="/images/graph3.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    ></Image>
                  </div>
                  <div>
                    <p>hey</p>
                  </div>
                </CardContent>
              </Card>

              <br />
              <Card>
                <CardHeader className="bg-blue-200">
                  <CardTitle>
                    Model interpretation based on the Morgan fingerprints
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap gap-4 py-4">
                  <div>
                    <p>hey</p>
                  </div>

                  <div>
                    <Image
                      src="/images/graph3.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    ></Image>
                  </div>
                </CardContent>
              </Card>
              <br />
              <Card>
                <CardHeader className="bg-blue-200">
                  <CardTitle>
                    Model interpretation based on the Morgan fingerprints
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap gap-4 py-4">
                  <div>
                    <Image
                      src="/images/graph3.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    ></Image>
                  </div>
                  <div>
                    <p>hey</p>
                  </div>
                </CardContent>
              </Card>
              <br />
              <Card>
                <CardHeader className="bg-blue-200">
                  <CardTitle>
                    Model interpretation based on the Morgan fingerprints
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-row-2 gap gap-4 py-4">
                  <div>
                    <Image
                      src="/images/graph3.png"
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    ></Image>
                  </div>
                  <div>
                    <p>hey</p>
                  </div>
                </CardContent>
              </Card>
              <br />
            </div>
          </TabsContent>
          <TabsContent value="research"></TabsContent>
        </Tabs>
        <br></br>

        <div className="grid grid-cols-2 gap gap-x-5">
          <Card className="bg-slate-100">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>sk3316@srmist.edu.in</p>
              <p>vs1548@srmist.edu.in</p>
            </CardContent>
          </Card>
          {/* <Card className = "bg-slate-100"> */}
          {/* <CardHeader> */}
          {/* <CardTitle>Statistics</CardTitle> */}
          {/* <CardDescription>Card Description</CardDescription> */}
          {/* </CardHeader> */}
          {/* <CardContent> */}
          {/* <p>Card Content</p> */}

          {/* </CardContent>
        </Card> */}
          <Card className="bg">
            <CardHeader>
              <CardTitle>Citation</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <p>
                Tang Q, Nie F, Zhao Q, Chen W. A merged molecular representation
                deep learning method for blood-brain barrier permeability
                prediction. Brief Bioinform. 2022 Sep 20;23(5):bbac357. doi:
                10.1093/bib/bbac357. PMID: 36002937
              </p>
            </CardContent>
          </Card>
        </div>

        <br></br>
      </div>
      <Card className="justify-center grid px-0">
        <CardHeader>
          {/* <CardTitle>Card Title</CardTitle> */}
          <CardDescription>
            Copyright © 2024.SRM Institute of Science and Technology All rights
            reserved.
          </CardDescription>
        </CardHeader>
        {/* <CardContent>
          <p>Card Content</p>
        </CardContent> */}
      </Card>
    </main>
  );
}

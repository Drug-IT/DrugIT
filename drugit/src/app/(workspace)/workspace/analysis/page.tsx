"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useState } from "react";
import AdmetDataTable from "./admet-data-table";
import RdkitDataTable from "./rdkit-data-table";
import TableSkeleton from "./table-skeleton";

interface MoleculeData {
  moleculeTitle?: string;
  moleculeDescription?: string;
}

export default function Analysis() {
  const [isLoading, setIsLoading] = useState(false);
  const [smiles, setSmiles] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [fetchDataError, setFetchDataError] = useState(false);
  const [moleculeData, setMoleculeData] = useState<MoleculeData>({});
  const [chirality, setChirality] = useState("");
  const [isomer, setIsomer] = useState("");
  const [rdkit, setRdkit] = useState<Record<string, any>[]>([]);
  const [admeValues, setAdmeValues] = useState<Record<string, any>[]>([]);
  const rdkitUrl =
    "https://rdkitfunction1.azurewebsites.net/api/CalculateRdkit";
  const admeValuesUrl =
    "https://admetfunctionapp.azurewebsites.net/api/CalculateAdmet";
  const chiralityUrl = "https://rsfunction.azurewebsites.net/api/CalculateRS";
  const IsomerUrl =
    "https://zeisomerfunctionapp.azurewebsites.net/api/determinezeisomer";
  /*const lungCancerUrl =
    "https://modelredirect.azurewebsites.net/api/http_trigger1?";*/

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFetchDataError(false);
    setIsLoading(true); // Start loading

    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${smiles.trim()}/description/JSON`;
    const imgUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${smiles.trim()}/PNG`;

    try {
      // Fetch molecule data
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch molecule data");
      }
      const data = await response.json();

      setMoleculeData({
        moleculeTitle: data?.InformationList?.Information[0]?.Title,
        moleculeDescription:
          data?.InformationList?.Information[2]?.Description ||
          data?.InformationList?.Information[1]?.Description,
      });
      setImgUrl(imgUrl);

      // Fetch chirality data
      const chiralityResponse = await fetch(chiralityUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "amiramir",
        },
        body: JSON.stringify({ smiles: smiles }),
      });

      if (!chiralityResponse.ok) {
        throw new Error("Failed to fetch chirality centers");
      }

      const chiralityData = await chiralityResponse.text();
      setChirality(chiralityData);

      // Fetch Isomer data
      const isomerResponse = await fetch(IsomerUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "amiramir",
        },
        body: JSON.stringify({ smiles: smiles }),
      });

      if (!isomerResponse.ok) {
        throw new Error("Failed to fetch isomerism");
      }

      const isomerData = await isomerResponse.text();
      setIsomer(isomerData);

      // Fetch RDKit data
      const rdkitResponse = await fetch(rdkitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "amiramir",
        },
        body: JSON.stringify({ smiles: smiles }),
      });

      if (!rdkitResponse.ok) {
        throw new Error("Failed to fetch molecule descriptors");
      }

      const text = await rdkitResponse.text();
      const jsonString = text
        .replace(/np\.float64\(([^)]+)\)/g, "$1")
        .replace(/'/g, '"');
      const rdkitData = JSON.parse(jsonString);
      setRdkit([rdkitData]);

      // Fetch Adme data
      const admeResponse = await fetch(admeValuesUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "amiramir",
        },
        body: JSON.stringify({ smiles: smiles }),
      });

      if (!admeResponse.ok) {
        throw new Error("Failed to fetch molecule descriptors");
      }

      const admetext = await admeResponse.text();
      const admejson = admetext
        .replace(/np\.float64\(([^)]+)\)/g, "$1")
        .replace(/'/g, '"');
      const admeData = JSON.parse(admejson);
      console.log(admeData);
      setAdmeValues([admeData]);

      /*// Fetch activity on lung cancer
      const lungCancerResponse = await fetch(lungCancerUrl, {
        method: "POST",
        body: JSON.stringify({
          columns: Object.keys(rdkitData),
          data: Object.values(rdkitData),
        }),
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "2nlwfl08o6Deibx04ItRFbILSQigwQTKXQK3RgpwfcgzAzFuaAuLGw==",
        },
      });

      if (!lungCancerResponse.ok) {
        throw new Error(
          "Request failed with status code " + lungCancerResponse.status
        );
      }

      const lungCancerData = await lungCancerResponse.json();
    console.log(lungCancerData);*/
    } catch (error) {
      console.error("Error:", error);
      setFetchDataError(true);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <>
      <div className="m-2 p-2 flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight pb-6 text-primary">
            Molecule Selection
          </h2>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Molecule Smiles</CardTitle>
            <CardDescription>
              Please enter your molecule smiles.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex items-center" onSubmit={handleSubmit}>
              <Input
                value={smiles}
                onChange={(e) => {
                  setSmiles(e.currentTarget.value);
                }}
                placeholder="Type your molecule smiles here..."
              />
              <Button
                className="m-3"
                disabled={!smiles || isLoading}
                type="submit"
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      {fetchDataError ? (
        <Alert variant="destructive">
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            Please try using another molecule smiles.
          </AlertDescription>
        </Alert>
      ) : (
        imgUrl &&
        moleculeData && (
          <div className="grid grid-cols-3 p-6">
            <div className="flex justify-start">
              <Card>
                <Image
                  src={imgUrl}
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
              </Card>
            </div>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="text-primary">
                  Molecule Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <div className="grid gap-4">
                    <p className="text-sm font-bold leading-none">
                      Molecule Title
                    </p>
                    <p className="text-sm text-foreground">
                      {moleculeData.moleculeTitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-4">
                    <p className="text-sm font-bold leading-none">
                      Molecule Description
                    </p>
                    <p className="text-sm text-foreground">
                      {moleculeData.moleculeDescription}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      )}
      <div className="flex flex-col items-center w-full p-6 space-y-4">
        {chirality && (
          <Card className="w-5/6">
            <CardHeader>
              <CardTitle className="text-primary">
                R/S Chirality Centers
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <p className="text-sm font-bold leading-none">{chirality}</p>
            </CardContent>
          </Card>
        )}
        {isomer && (
          <Card className="w-5/6">
            <CardHeader>
              <CardTitle className="text-primary">Z/E Isomers</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <p className="text-sm font-bold leading-none">{isomer}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {isLoading ? (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-primary">Molecule Descriptors</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <ScrollArea className="h-[600px] rounded-md border">
              <TableSkeleton rows={6} columns={8} />
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        rdkit.length > 0 && (
          <Card className="mb-10">
            <CardHeader>
              <CardTitle className="text-primary">
                Molecule Descriptors
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <ScrollArea className="h-[600px] rounded-md border">
                <RdkitDataTable data={rdkit} />
              </ScrollArea>
            </CardContent>
          </Card>
        )
      )}
      {isLoading ? (
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-primary">ADMET Values</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <ScrollArea className="h-[600px] rounded-md border">
              <TableSkeleton rows={6} columns={8} />
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        rdkit.length > 0 && (
          <Card className="mb-10">
            <CardHeader className="text-primary">
              <CardTitle>ADMET Values</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <ScrollArea className="h-[600px] rounded-md border">
                <AdmetDataTable data={admeValues} />
              </ScrollArea>
            </CardContent>
          </Card>
        )
      )}
    </>
  );
}

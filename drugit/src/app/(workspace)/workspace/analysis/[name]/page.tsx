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
import Image from "next/image";
import { useState } from "react";

interface MoleculeData {
  moleculeTitle?: string;
  moleculeDescription?: string;
}

export default function Page({ params }: { params: { name: string } }) {
  const target = decodeURIComponent(params.name);
  const [isLoading, setIsLoading] = useState(false);
  const [smiles, setSmiles] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const [moleculeData, setMoleculeData] = useState<MoleculeData>({});

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFetchError(false);
    const url = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${smiles.trim()}/description/JSON`;
    const imgUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${smiles.trim()}/PNG`;
    try {
      setIsLoading(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            setFetchError(true);
          }
          return res.json();
        })
        .then((data) => {
          if (!fetchError) {
            setMoleculeData({
              moleculeTitle: data?.InformationList?.Information[0]?.Title,
              moleculeDescription: data?.InformationList?.Information[2]
                ? data?.InformationList?.Information[2]?.Description
                : data?.InformationList?.Information[1]?.Description,
            });
            setImgUrl(imgUrl);
          }
        });
    } catch (error) {
      console.error("Error:", error);
      setFetchError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>{target}</div>
      <div className="m-2 p-2 flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight pb-6">
            Molecule Selection
          </h2>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <Card>
          <CardHeader>
            <CardTitle>Molecule Smiles</CardTitle>
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
      {fetchError ? (
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
                <CardTitle>Molecule Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <div className="grid gap-4">
                    <p className="text-sm font-bold text-primary leading-none">
                      Molecule Title
                    </p>
                    <p className="text-sm text-foreground">
                      {moleculeData.moleculeTitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-4">
                    <p className="text-sm font-bold leading-none text-primary">
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
    </>
  );
}

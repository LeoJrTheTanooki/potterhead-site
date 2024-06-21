"use client";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [wizardArray, setWizardArray] = useState<Array<any>>();
  const [wizardIndex, setWizardIndex] = useState<number>(-1);
  const [wizardArrayJsx, setWizardArrayJsx] = useState<any>();
  const [name, setName] = useState<any>();
  const [alternateNames, setAlternateNames] = useState<any>();
  const [species, setSpecies] = useState<any>();
  const [gender, setGender] = useState<any>();
  const [house, setHouse] = useState<any>();
  const [dateOfBirth, setDateOfBirth] = useState<any>();
  const [yearOfBirth, setYearOfBirth] = useState<any>();
  const [wizard, setWizard] = useState<any>();
  const [ancestry, setAncestry] = useState<any>();
  const [eyeColour, setEyeColour] = useState<any>();
  const [hairColour, setHairColour] = useState<any>();
  const [wand, setWand] = useState<any>();
  const [patronus, setPatronus] = useState<any>();
  const [hogwartsStudent, setHogwartsStudent] = useState<any>();
  const [hogwartsStaff, setHogwartsStaff] = useState<any>();
  const [actor, setActor] = useState<any>();
  const [alternateActors, setAlternateActors] = useState<any>();
  const [alive, setAlive] = useState<any>();
  const [image, setImage] = useState<any>();

  interface ICharacter {
    id: string;
    name: string;
    alternate_names: Array<string>;
    species: string;
    gender: string;
    house: string;
    dateOfBirth?: string;
    yearOfBirth?: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: {
      wood: string;
      core: string;
      length?: number;
    };
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: Array<string>;
    alive: boolean;
    image: string;
  }

  const getCharacterData = async () => {
    const res = await fetch("https://potterhead-api.vercel.app/api/characters");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const loadData = async () => {
      const charArray = await getCharacterData();
      setWizardArray(charArray);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (wizardArray) {
      const jsxLoad = wizardArray.map((e: ICharacter, index: number) => {
        return (
          <div key={index} className=" my-1">
            <Button
              onClick={() => {
                setWizardIndex(index);
              }}
            >
              {e.name}
            </Button>
          </div>
        );
      });
      setWizardArrayJsx(jsxLoad);
    }
  }, [wizardArray]);

  useEffect(() => {
    if (wizardArray && wizardIndex !== -1) {
      setName(wizardArray[wizardIndex].name);
      setAlternateNames(wizardArray[wizardIndex].alternate_names);
      setSpecies(wizardArray[wizardIndex].species);
      setGender(wizardArray[wizardIndex].gender);
      setHouse(wizardArray[wizardIndex].house);
      setDateOfBirth(wizardArray[wizardIndex].dateOfBirth);
      setYearOfBirth(wizardArray[wizardIndex].yearOfBirth);
      setWizard(wizardArray[wizardIndex].wizard);
      setAncestry(wizardArray[wizardIndex].ancestry);
      setEyeColour(wizardArray[wizardIndex].eyeColour);
      setHairColour(wizardArray[wizardIndex].hairColour);
      setWand(wizardArray[wizardIndex].wand);
      setPatronus(wizardArray[wizardIndex].patronus);
      setHogwartsStudent(wizardArray[wizardIndex].hogwartsStudent);
      setHogwartsStaff(wizardArray[wizardIndex].hogwartsStaff);
      setActor(wizardArray[wizardIndex].actor);
      setAlternateActors(wizardArray[wizardIndex].alternate_actors);
      setAlive(wizardArray[wizardIndex].alive);
      setImage(wizardArray[wizardIndex].image);
    }
  }, [wizardArray, wizardIndex]);

  return (
    <div className="background">
      <h1 className=" text-3xl font-bold">Harry Potter Character Chart</h1>
      <div className=" w-1/2">{wizardArrayJsx ? wizardArrayJsx : ""}</div>
      <div className=" w-1/2 fixed inset-y-0 right-0 flex flex-wrap">
        <div>
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className=" h-32" src={image} alt={"Picture of " + name} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img className=" h-32" src="/unknown.jpg" alt="Unknown Image" />
          )}
        </div>
        <div>
          {name ? <div className="border border-black">Name: {name}</div> : ""}
          {alternateNames && alternateNames.length > 0 ? (
            <div className="border border-black">
              Alternate Names:{" "}
              {alternateNames.map((e: any, i: number, arr: any) => {
                return (
                  <span key={i}>
                    {e}
                    {i != arr.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {species ? (
            <div className="border border-black">Species: {species}</div>
          ) : (
            ""
          )}
          {gender ? (
            <div className="border border-black">Gender: {gender}</div>
          ) : (
            ""
          )}
          {house ? (
            <div className="border border-black">House: {house}</div>
          ) : (
            ""
          )}
          {dateOfBirth ? (
            <div className="border border-black">Birthday: {dateOfBirth}</div>
          ) : (
            ""
          )}
          {yearOfBirth ? (
            <div className="border border-black">Birth Year: {yearOfBirth}</div>
          ) : (
            ""
          )}
          {wizardIndex > -1 ? (
            <>
              <div className="border border-black">
                Wizard: {alive ? "Yes" : "No"}
              </div>
            </>
          ) : (
            ""
          )}
          {ancestry ? (
            <div className="border border-black">Ancestry: {ancestry}</div>
          ) : (
            ""
          )}
          {eyeColour ? (
            <div className="border border-black">Eye Color: {eyeColour}</div>
          ) : (
            ""
          )}
          {hairColour ? (
            <div className="border border-black">Hair Color: {hairColour}</div>
          ) : (
            ""
          )}
          {wand ? (
            <>
              {wand.wood ? (
                <div className="border border-black">
                  Wand Wood: {wand.wood}
                </div>
              ) : (
                ""
              )}
              {wand.core ? (
                <div className="border border-black">
                  Wand Core: {wand.core}
                </div>
              ) : (
                ""
              )}
              {wand.length ? (
                <div className="border border-black">
                  Wand Length: {wand.length}
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
          {patronus ? (
            <div className="border border-black">Patronus: {patronus}</div>
          ) : (
            ""
          )}
          {wizardIndex > -1 ? (
            <>
              <div className="border border-black">
                Hogwarts Student: {hogwartsStudent ? "Yes" : "No"}
              </div>
              <div className="border border-black">
                Hogwarts Staff: {hogwartsStaff ? "Yes" : "No"}
              </div>
            </>
          ) : (
            ""
          )}
          {actor ? (
            <div className="border border-black">Actor: {actor}</div>
          ) : (
            ""
          )}
          {alternateActors && alternateActors.length > 0 ? (
            <div className="border border-black">
              Alternate Actors:{" "}
              {alternateActors.map((e: any, i: number, arr: any) => {
                return (
                  <span key={i}>
                    {e}
                    {i != arr.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {wizardIndex > -1 ? (
            <>
              <div className="border border-black">
                Status: {alive ? "Alive" : "Dead"}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

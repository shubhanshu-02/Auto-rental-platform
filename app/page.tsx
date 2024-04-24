import { CustomFilter, Hero, SearchBar } from "@/components";
import { getCars } from "@/utility";
import Image from "next/image";

export default async function Home() {
  const cars = await getCars();
const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  // console.log(cars)

  return (
    <main className="overflow-hidden">
      <Hero />
       <div className="mt-12 padding-x padding-y max-width" id = "discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p>explore the cars you might like</p>
        </div>

<div className="home__filters">
  <SearchBar />
</div>

<div className="home__filter-container">
  {/* <CustomFilter title = "fuel" /> 
  <CustomFilter title = "fuel" />  */}

</div>
{/* (!isDataEmpty ) */}

       </div>
    </main>
  )
}

"use client";
import { Link, Plus } from "lucide-react";
import { client } from "../lib/sanity";
import { create } from "domain";

function AddProduct() {
  const mutations = [
    {
      create: {
        _type: "product",
        name: "ad",
        price: 32,
        category: {
            type: "reference",
            name:"Men"
        },
        images: [],
      },
    },
  ];
  fetch(`https://smc01tzi.api.sanity.io/v2021-06-07/data/mutate/production`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer skXTvobxs9XJKBEURbeLn0doLTjiU0xXYy9aqgdEFA4IvZjltePStmJbjtN8NxnquCV4Fe9Z91Rf09tEfUxpTnHjOkhIspbeHXCTIJ7lwHBaon8FspFBWTfWbNznOETJ9fuetYLoSfatY6snPJ3JdNA7HG05tWK4BZ85FYz69vcLW7Xe5ZnG`,
    },
    body: JSON.stringify({ mutations }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

export function AddNewProduct() {
  return (
    <button onClick={AddProduct}>
      <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 flex items-center justify-center">
        <Plus className="w-12 h-12 text-gray-500" />
      </div>
    </button>
  );
}

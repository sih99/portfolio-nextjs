import React from "react";
import { ProjectCard } from "../../molecules/card";

const MyExpertise = () => {
  // const { isLoading, error, data } = useQuery("expertise", () =>
  //   axios
  //     .get("api/expertise")
  //     .then(({ data }) => data)
  //     .catch((error) => console.error("Error fetching testimonials:", error))
  // );

  const datas = [{ title: "지콘스튜디오", desc: "비교 번역 서비스 와 맞춤 번역 서비스를 제공하는 기계 번역 플랫폼" }];

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-2xl font-bold text-black">Commercial Projects</div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 ">
        {/* {isLoading
          ? [1, 2, 3, 4, 5, 6].map(() => <ParagraphSkeleton className={"space-y-2 p-8"} />)
          : data?.map((data, key) => <ExpertiseCard key={key} data={data} />)} */}
        {datas.map((data, key) => (
          <ProjectCard key={key} data={data} />
        ))}
      </div>
    </>
  );
};

export default MyExpertise;

import clsx from "clsx";

export default function Home() {
  return (
    <>
      <main className={clsx("container p-4")}>
        <h1 className={clsx("headline text-4xl leading-normal")}>Hello World!</h1>

        {[1, 2, 3, 4].map((_, index) => {
          const key = index.toString();

          return (
            <p className="mb-4" key={key}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsum unde, iusto ipsam voluptas
              obcaecati? Repellat minus fuga officia eos architecto nihil cupiditate rerum soluta placeat. Excepturi
              modi autem architecto veniam nam quidem repellat assumenda, fugit, iure laboriosam animi sapiente! Quasi
              ratione quidem ex maiores molestiae! Placeat quidem, corrupti temporibus, rerum dolorum beatae harum in
              unde consequuntur ipsam reiciendis, voluptates debitis maxime itaque. Corporis ut, voluptas quae laborum
              minima possimus sapiente atque deserunt distinctio ipsa facere saepe quas voluptate dolores fuga, neque
              aliquam enim. Cupiditate quibusdam voluptate perspiciatis, sint ipsam nostrum debitis distinctio numquam
              eius alias odio esse autem eligendi eaque tenetur, veniam rerum. Deleniti eligendi magni ut aliquid, sit
              repellat saepe numquam totam! Laudantium expedita iste mollitia corporis impedit!
            </p>
          );
        })}
      </main>
    </>
  );
}

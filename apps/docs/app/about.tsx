function PageContent({ n }: { n: number }) {
  return n < 100 ? <h1>Less than 100</h1> : <h1>100 or more</h1>;
}

export default function Page() {
  return (
    <>
      <h1>About</h1>;
      <PageContent n={100} />
    </>
  );
}

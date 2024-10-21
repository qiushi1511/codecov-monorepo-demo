"use client";

import { useState } from "react";

function ToggleContent({
  children,
  defaultShow = false,
}: {
  children?: React.ReactNode;
  defaultShow?: boolean;
}) {
  const [show, setShow] = useState(defaultShow);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? children : null}
    </div>
  );
}

export default function Page() {
  const ranNum = Math.round(Math.random() * 100);

  return (
    <>
      <h1>Feat 1</h1>

      <ToggleContent>
        <p>
          <span>P1:</span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          voluptatem mollitia suscipit odio eos fugiat eum in molestias itaque
          ex magni fuga deleniti dolores. Accusamus blanditiis reiciendis ab
          quibusdam saepe.
        </p>
      </ToggleContent>
      <ToggleContent defaultShow={true}>
        <p>
          <span>P2:</span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          voluptatem mollitia suscipit odio eos fugiat eum in molestias itaque
          ex magni fuga deleniti dolores. Accusamus blanditiis reiciendis ab
          quibusdam saepe.
        </p>
      </ToggleContent>

      {ranNum > 50 && <p>Random number is greater than 50</p>}
      {ranNum <= 50 && <p>Random number is less than 50</p>}
    </>
  );
}

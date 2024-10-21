"use client";

import { useState } from "react";

function ToggleContent({ children }: { children?: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? children : null}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <h1>Feat 1</h1>

      <ToggleContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          voluptatem mollitia suscipit odio eos fugiat eum in molestias itaque
          ex magni fuga deleniti dolores. Accusamus blanditiis reiciendis ab
          quibusdam saepe.
        </p>
      </ToggleContent>
    </>
  );
}

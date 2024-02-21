import Image from "next/image";
import "./page.css";

import React from 'react';

/*export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold">MainFrame</h1>
      <p className="text-lg font-light">
        The portfolio of Pablo cantudo.<br />
      </p>
    </main>
  );
*/
export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl font-bold">MainFrame</h1>
      <p className="text-lg font-light">
        The portfolio of Pablo cantudo.<br />
      </p>
      <ul data-flip="">
        {(new Array(810)).fill(null).map((_, i) => (
          <li key={i}>
            <div className="flipper">
              <div className="flipper__dot">
                <span className="flipper__front">
                  {/* Front content */}
                </span>
                <span className="flipper__back">
                  {/* Back content */}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/demo">Go To Demo Page</Link>
    </>
  );
}

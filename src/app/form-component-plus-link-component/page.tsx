import Form from "next/form";
import Link from "next/link";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  return (
    <>
      <p>
        <strong>Search query:</strong>{" "}
        <span id="renderedSearchQuery">{search || "(empty)"}</span>
      </p>
      <Form action="">
        <label htmlFor="searchField">Search:</label>
        <input
          id="searchField"
          type="text"
          name="search"
          autoFocus
          defaultValue={search}
        />
        <button>Submit</button>
      </Form>
      <Link href={{ query: { search: "changed" } }}>Change search query</Link>
      <Link href={{ query: { search: "" } }}>Empty search query</Link>
    </>
  );
}

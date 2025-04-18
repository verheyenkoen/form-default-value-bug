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
      <form>
        <label htmlFor="searchField">Search:</label>
        <input
          id="searchField"
          type="text"
          name="search"
          autoFocus
          defaultValue={search}
        />
        <button>Submit</button>
      </form>
      <a href="?search=changed">Change search query</a>
      <a href="?search=">Empty search query</a>
    </>
  );
}

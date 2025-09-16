export default function Data() {
  const user = ["Nika", "Thida", "Nita", "Raksmey"];
  const pet = ["dog", "cat", "owl", "monkey"];
  return (
    <>
      {user.map((item, index) => (
        <h1 className="text-3xl font-medium">
          User {index + 1}: {item} loves {pet[index]}
        </h1>
      ))}
    </>
  );
}

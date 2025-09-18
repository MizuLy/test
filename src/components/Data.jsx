export default function Data() {
  const user = [
    { name: "Nika", gender: "Female", age: "24", pet: "dog" },
    { name: "Mika", gender: "Female", age: "21", pet: "parrot" },
    { name: "Kyoko", gender: "Female", age: "25", pet: "cat" },
    { name: "Mizu", gender: "Male", age: "20", pet: "dog" },
  ];

  return (
    <>
      {/* {user.map((item, index) => (
        <h1 className="text-3xl font-medium">
          User {index + 1}: {item} loves {pet[index]}
        </h1>
      ))} */}

      <div className="w-full">
        <table className="w-full">
          <tr className="text-3xl border-2 p-5 text-center ">
            <th>NAME</th>
            <th>TITLE</th>
            <th>AGE</th>
            <th>PET</th>
            <th>BIO</th>
          </tr>
          {user.map((item, index) => (
            <tr className="text-3xl border-2 p-5 text-center ">
              <td className="border-x-2 hover:bg-gradient-to-br from-blue-500 to-amber-500 ">
                {item.name}
              </td>
              <td className="border-x-2 hover:bg-gradient-to-br from-blue-500 to-amber-500 ">
                {item.gender}
              </td>
              <td className="border-x-2 hover:bg-gradient-to-br from-blue-500 to-amber-500 ">
                {item.age}
              </td>
              <td className="border-x-2 hover:bg-gradient-to-br from-blue-500 to-amber-500 ">
                {item.pet}
              </td>
              <td className="border-x-2 hover:bg-gradient-to-br from-blue-500 to-amber-500 ">
                {item.bio}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export const metadata = {
  title: 'About',
  description: 'Generated by create next app',
};

export default function AboutPage() {
  const myComplexObject = { name: 'lukas', hobbies: 'coding', age: 40 };
  console.log(myComplexObject);

  const myComplexObjectAsString = JSON.stringify(myComplexObject);
  console.log(myComplexObjectAsString);

  const myComplexObjectAsJsAgain = JSON.parse(myComplexObjectAsString);
  console.log(myComplexObjectAsJsAgain);
  return (
    <>
      <h1>This is my about page</h1>
      <div>Render undefined, null, true, false</div>
      {/* This doesn't get rendered by React, only strings and numbers */}
      <div>{[undefined, null, true, false]}</div>

      <div>{JSON.stringify([undefined, null, true, false])}</div>
      <div>{myComplexObjectAsString}</div>
      <div>{myComplexObjectAsJsAgain.name}</div>
    </>
  );
}

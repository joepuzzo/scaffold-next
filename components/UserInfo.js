
async function getData() {
  const res = await fetch(`/user`);
  return res.json();
}

export default function UserInfo() {

  // const user = await getData();

  return (
    <>
      <h1>Hello World!</h1>
      {/* <h2>Health Check {data.status}</h2>  */}
    </>
  )

}
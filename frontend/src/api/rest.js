export function getSigns() {
  return fetch("http://localhost:5000/signs")
    .then((res) => res.json())
    .then(
      (result) => {
        return "coisa";
      },
      (error) => {
        console.log("error");
      }
    );
}

export async function getSign(date) {
  return fetch("http://localhost:5000/date/" + date)
    .then((res) => {
      return res.json();
    })
    .then(
      (result) => {
        return result.sign_name;
      },
      (error) => {
        console.log("error");
      }
    );
}

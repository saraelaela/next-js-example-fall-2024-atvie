import Link from 'next/link';

export default async function checkout() {
  // const fruitCommentsCookie = await getCookie('fruitsComments');

  // let fruitComments = parseJson(fruitCommentsCookie) || [];

  // if (!Array.isArray(fruitComments)) {
  //   fruitComments = [];
  // }
  return (
    <>
      <h1>Checkout</h1>
      <div> Total Price</div>
      <fieldset>
        <form>
          <h2>Personal details</h2>
          <label>First Name</label> <input type="text" />
          <label>Last Name</label> <input type="text" />
          <label>Email</label> <input type="text" />
          <label>Adress</label> <input type="text" />
          <label>City</label> <input type="text" />
          <label>Postal Code</label> <input type="text" />
          <label>Country</label> <input type="text" />
        </form>
        <form>
          <h2>Payment Details</h2>
          <div>
            <label>Credit Card</label>{' '}
            <select>
              <option value="visa">Visa</option>
              <option value="mastercard">Mastercard</option>
            </select>
            <label>name of cardholder</label>
            <input />
            <label> card number</label>
            <input />
            <label>security code</label>
            <input />
          </div>
        </form>
      </fieldset>
      <Link href="app/test">
        <button>Place Order</button>
      </Link>
      {/* {fruits.map((fruit) => {
        const fruitComment = fruitComments.find(
          (fruitObject) => fruit.id === fruitObject.id,
        );
        return (
          <div key={`fruitId-${fruit.id}`}>
            <Link href={`/fruits/${fruit.id}`}>
              <h2>
                {fruit.name} {fruit.icon}
              </h2>
            </Link>
            <div>{fruitComment?.comment}</div>
          </div>
        );
      })} */}
    </>
  );
}

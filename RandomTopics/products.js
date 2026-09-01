const orders = [
  { userId: 1, amount: 500, status: "paid" },
  { userId: 2, amount: 700, status: "pending" },
  { userId: 1, amount: 300, status: "paid" },
  { userId: 2, amount: 300, status: "paid" },

];


const calculatePaidPerUser = () => {
    return orders.reduce((acc, order) =>{
        if(order.status == "paid") {
            acc[order.userId] = (acc[order.userId] || 0) + order.amount;
        }

        return acc;
    }, {})

}

function main () {
    const ans = calculatePaidPerUser();
    console.log(ans);
}

main();
/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a for loop

*/

let n = 4;

function sumTillNum(num){
	//your code here
	let sum = 0;
	for (let i = 0; i < num; i ++){
		sum = sum + i
	}
	return sum;	
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));


/*4 ----> 10
0 +1 + 2 + 3 + 4 = 10
0 +1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
primera vuelta i vale 0 es menor que 4? si, sumale 1
segunda vuelta i vale 1 es menor que 4? si, sumale 1
tercera vuelta i vale 2 es menor que 4? si, sumale 1
4ta vuelta i vale 3 es menor que 4? si, sumale 1
*/

		// 1. Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
			function factorial(x){
				if(x === 0){
					return 1;
				}
				return x*factorial(x-1);
			}
			alert(factorial(5));
	// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
			var gcd = function(a, b) {
				if ( ! b) {  
					return a;  
				}  
				
				return gcd(b, a % b);
			};  
			console.log(gcd(24,8));

		// 3. Write a JavaScript program to get the integers in range (x, y).
		// Example : range(2, 9)
		// Expected Output : [3, 4, 5, 6, 7, 8]
			function range(a,b){
				if(b - a ===2){
					return [a+1]
				}
				else {
					var range_list = range(a, b-1);
					range_list.push(b-1)
				return range_list;
				}
			}

		// 4. Write a JavaScript program to compute the sum of an array of integers.

		// Example : var array = [1, 2, 3, 4, 5, 6]
		// Expected Output : 21
			function sum_numbers(arr2){
				if(arr2.length === 1){
					return arr2[0]
					}
				else {
					return arr2.pop() + sum_numbers(arr2);
				}
			}
			sum_numbers([1,2,3,4,5]);

		// 5. Write a JavaScript program to compute the exponent of a number.

		// Note : The exponent of a number says how many times the base number is used as a factor.
		// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
			function exp(a,n){
				if(n===0){
					return 1;
				} else {
					return a*exp(a, n-1);
				}
			}
			exp(2,3);

		// 6. Write a JavaScript program to check whether a number is even or not.
			function is_even(number){
				if(number < 0){
					number = Math.abs(number);
				}
				if(number===0){
					return true;
				}
				if(number === 1){
					return false;
				}else {
					number = number -2
					return is_even(number);}
				}
			is_even(5);
			is_even(22);



